#!/usr/bin/env node

const fs = require("fs")
const path = require("path")

const USERNAME = "jiujitsunyc"
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`
const API_URL = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`
const OUTPUT_PATH = path.join(__dirname, "..", "src", "data", "instagram-posts.json")
const MAX_POSTS = Number(process.env.INSTAGRAM_MAX_POSTS || 5)
const MIN_POSTS = Number(process.env.INSTAGRAM_MIN_POSTS || 3)

function collapseWhitespace(value) {
  return value.replace(/\s+/g, " ").trim()
}

function cleanCaption(value) {
  return collapseWhitespace(
    value
      .replace(/#[\w-]+/g, "")
      .replace(/@jiujitsunyc\s*,?/gi, "@jiujitsunyc ")
      .replace(/\s+([,.;:!?])/g, "$1")
  )
}

function truncateSentence(value, maxLength) {
  const clean = collapseWhitespace(value)
  if (clean.length <= maxLength) return clean

  const boundaryMatch = clean.slice(0, maxLength + 1).match(/[.!?]\s/g)
  if (boundaryMatch) {
    const boundary = clean.slice(0, maxLength + 1).lastIndexOf(boundaryMatch[boundaryMatch.length - 1])
    if (boundary > 40) return clean.slice(0, boundary + 1)
  }

  return `${clean.slice(0, maxLength).replace(/[\s,.;:!?]+$/, "")}…`
}

function titleFromCaption(caption) {
  const firstLine = caption.split(/[.!?]\s|\n/)[0]
  return truncateSentence(firstLine || caption, 72)
}

function copyFromCaption(caption, title) {
  const sentenceParts = caption.split(/(?<=[.!?])\s+/)
  const withoutFirstSentence = sentenceParts.length > 1 ? sentenceParts.slice(1).join(" ") : ""
  const withoutTitle = caption.startsWith(title)
    ? caption.slice(title.length).replace(/^[\s,.;:!?-]+/, "")
    : withoutFirstSentence
  return truncateSentence(withoutTitle || caption, 156)
}

function isoDateFromTimestamp(timestamp) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(timestamp * 1000))
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]))
  return `${values.year}-${values.month}-${values.day}`
}

function formatDateLabel(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number)
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)))
}

function postHref(node) {
  const kind = node.__typename === "GraphVideo" ? "reel" : "p"
  return `https://www.instagram.com/${USERNAME}/${kind}/${node.shortcode}/`
}

function captionForNode(node) {
  const edges = node.edge_media_to_caption?.edges || []
  return cleanCaption(edges[0]?.node?.text || "")
}

async function fetchProfileJson() {
  const response = await fetch(API_URL, {
    redirect: "follow",
    headers: {
      "accept": "application/json",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "referer": PROFILE_URL,
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      "x-asbd-id": "129477",
      "x-ig-app-id": "936619743392459",
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Instagram API fetch failed: ${response.status} ${response.statusText} ${body.slice(0, 160)}`)
  }

  return response.json()
}

function extractPosts(data) {
  const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges || []

  return edges
    .map((edge, profileOrder) => ({ ...edge.node, profileOrder }))
    .filter(node => node.shortcode && node.taken_at_timestamp)
    .sort((a, b) => b.taken_at_timestamp - a.taken_at_timestamp || a.profileOrder - b.profileOrder)
    .slice(0, MAX_POSTS)
    .map(node => {
      const date = isoDateFromTimestamp(node.taken_at_timestamp)
      const caption = captionForNode(node)
      const title = titleFromCaption(caption || "Instagram update from @JiuJitsuNYC")
      const copy = copyFromCaption(caption || "Open the original Instagram post for the full academy update.", title)

      return {
        title,
        copy,
        href: postHref(node),
        tag: formatDateLabel(date),
        date,
      }
    })
}

function canonicalFeed(posts) {
  return {
    source: PROFILE_URL,
    generatedAt: new Date().toISOString(),
    posts,
  }
}

function stableFeedForCompare(feed) {
  return JSON.stringify({
    source: feed.source,
    posts: feed.posts,
  })
}

async function main() {
  const data = await fetchProfileJson()
  const posts = extractPosts(data)

  if (posts.length < MIN_POSTS) {
    throw new Error(`Only parsed ${posts.length} Instagram posts; refusing to overwrite feed.`)
  }

  const nextFeed = canonicalFeed(posts)
  const currentFeed = fs.existsSync(OUTPUT_PATH)
    ? JSON.parse(fs.readFileSync(OUTPUT_PATH, "utf8"))
    : null

  if (currentFeed && stableFeedForCompare(currentFeed) === stableFeedForCompare(nextFeed)) {
    console.log(`No Instagram feed changes. Latest post remains ${posts[0].tag}: ${posts[0].href}`)
    return
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(nextFeed, null, 2)}\n`)
  console.log(`Updated Instagram feed with ${posts.length} posts. Latest: ${posts[0].tag} ${posts[0].href}`)
}

main().catch(error => {
  console.error(error.stack || error.message)
  process.exit(1)
})

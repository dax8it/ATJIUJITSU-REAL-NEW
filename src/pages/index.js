import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Layout from "../components/layout2"
import SEO from "../components/seo"
import PostCard from "../components/postCard"
import homepageContent from "../data/homepage.json"
import instagramFeed from "../data/instagram-posts.json"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const byOrder = (a, b) => (a.order || 0) - (b.order || 0)
const visibleItems = items => (items || []).filter(item => item.visible !== false).sort(byOrder)
const isInternalLink = href => typeof href === "string" && href.startsWith("/")

const buttonClass = style => {
  if (style === "secondary") return "button button-secondary"
  if (style === "ghost") return "button button-ghost"
  return "button button-primary"
}

const SmartLink = ({ href, className, children, ...props }) => {
  const safeHref = href || "#"

  if (isInternalLink(safeHref)) {
    return (
      <Link className={className} to={safeHref} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={className} href={safeHref} {...props}>
      {children}
    </a>
  )
}

const ActionLink = ({ action }) => (
  <SmartLink className={buttonClass(action.style)} href={action.href}>
    {action.label}
  </SmartLink>
)

const programs = visibleItems(homepageContent.programs)
const instagramPosts = instagramFeed.posts
const seo = homepageContent.seo || {}

const faqs = [
  {
    question: "What martial arts classes are available at @JiuJitsuNYC?",
    answer:
      "@JiuJitsuNYC offers Brazilian Jiu-Jitsu, kids Jiu-Jitsu, toddler Jiu-Jitsu, kickboxing, Muay Thai, MMA, kettlebell, and movement-focused programs in Jackson Heights, Queens.",
  },
  {
    question: "Is @JiuJitsuNYC good for beginners?",
    answer:
      "Yes. Classes welcome complete beginners and experienced students. Coaches focus on safe fundamentals, clear progressions, and practical self-defense skills.",
  },
  {
    question: "Do you offer kids martial arts classes in Queens?",
    answer:
      "Yes. The academy offers kids Jiu-Jitsu, kids kickboxing, kids MMA, and toddler Jiu-Jitsu programs for families in Jackson Heights and nearby Queens neighborhoods.",
  },
  {
    question: "Where is @JiuJitsuNYC located?",
    answer:
      "The academy is located at 82-19 Northern Blvd, 2nd Floor, Jackson Heights, NY 11372 — between 82nd and 83rd Street, near the corner of 83rd Street and Northern Blvd.",
  },
  {
    question: "How do I try a class or see the schedule?",
    answer:
      "Use the Sign Up and Schedule buttons on the website to view available classes through Gymdesk and register for the right program.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "@JiuJitsuNYC Martial Arts Academy",
  url: "https://www.atjiujitsunyc.com/",
  image: "https://www.atjiujitsunyc.com/img/og-image.jpg",
  telephone: "+1" + "917" + "745" + "1772",
  email: "atjiujitsunyc@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "82-19 Northern Blvd, 2nd Floor",
    addressLocality: "Jackson Heights",
    addressRegion: "NY",
    postalCode: "11372",
    addressCountry: "US",
  },
  areaServed: ["Jackson Heights", "Queens", "Elmhurst", "Woodside", "Corona"],
  sameAs: [
    "https://www.facebook.com/ATjiujitsuNYC/",
    "https://instagram.com/jiujitsunyc",
    "https://www.youtube.com/channel/UCdi6CZkOmv_5dNZUhlVOkgw",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Martial arts programs",
    itemListElement: programs.map(program => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: program.title,
        description: program.copy,
        areaServed: "Queens, NY",
      },
    })),
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.fields.slug !== "/calendar/"
  )

  const homepageSections = visibleItems([
    { id: "hero", ...(homepageContent.hero || {}) },
    { id: "intro", ...(homepageContent.intro || {}) },
    { id: "programs", ...(homepageContent.programsSection || {}) },
    { id: "firstClass", ...(homepageContent.firstClass || {}) },
    { id: "instagram", ...(homepageContent.instagramSection || {}) },
    { id: "featuredUpdates", ...(homepageContent.featuredUpdates || {}) },
  ])

  const renderHero = section => (
    <section className="hero-shell" aria-labelledby="home-hero-title" key="hero">
      <div className="hero-copy">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h1 id="home-hero-title">{section.title}</h1>
        {section.lede && <p className="hero-lede">{section.lede}</p>}
        {section.actions?.length > 0 && (
          <div className="hero-actions" aria-label="Primary actions">
            {section.actions.map(action => (
              <ActionLink action={action} key={`${action.label}-${action.href}`} />
            ))}
          </div>
        )}
        {section.highlights?.length > 0 && (
          <div className="trust-strip" aria-label="Academy highlights">
            {visibleItems(section.highlights).map(item => (
              <div className="trust-item" key={item.label}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {section.image && (
        <div className="hero-visual" aria-label={section.imageLabel || "Homepage hero image"}>
          <img src={section.image} alt={section.imageAlt || ""} />
          {visibleItems(section.badges).map(badge => (
            <div className={`hero-card hero-card-${badge.position || "top"}`} key={`${badge.position}-${badge.label}`}>
              <span>{badge.label}</span>
              <strong>{badge.text}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  )

  const renderIntro = section => (
    <section className="section intro-grid" aria-labelledby="why-title" key="intro">
      <div>
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h2 id="why-title">{section.title}</h2>
      </div>
      {section.body?.length > 0 && (
        <div className="intro-copy">
          {section.body.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </section>
  )

  const renderPrograms = section => (
    <section className="section program-section" aria-labelledby="programs-title" key="programs">
      <div className="section-heading">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h2 id="programs-title">{section.title}</h2>
        {section.copy && <p>{section.copy}</p>}
      </div>
      <div className="program-grid">
        {programs.map(program => (
          <SmartLink className="program-card" href={program.href} key={program.title}>
            {program.image && <img src={program.image} alt={program.imageAlt || `${program.title} training at @JiuJitsuNYC`} />}
            {program.detail && <span className="program-tag">{program.detail}</span>}
            <h3>{program.title}</h3>
            {program.copy && <p>{program.copy}</p>}
            <span className="card-link">Explore program →</span>
          </SmartLink>
        ))}
      </div>
    </section>
  )

  const renderFirstClass = section => (
    <section className="section split-cta" aria-labelledby="first-class-title" key="firstClass">
      {section.image && (
        <div className="split-media">
          <img src={section.image} alt={section.imageAlt || ""} />
        </div>
      )}
      <div className="split-copy">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h2 id="first-class-title">{section.title}</h2>
        {section.copy && <p>{section.copy}</p>}
        {section.bullets?.length > 0 && (
          <ul className="check-list">
            {section.bullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {section.actions?.length > 0 && (
          <div className="hero-actions compact">
            {section.actions.map(action => (
              <ActionLink action={action} key={`${action.label}-${action.href}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  )

  const renderInstagram = section => (
    <section className="section instagram-section" aria-labelledby="instagram-title" key="instagram">
      <div className="section-heading social-heading">
        <div>
          {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
          <h2 id="instagram-title">{section.title}</h2>
          {section.copy && <p>{section.copy}</p>}
        </div>
        {section.buttonHref && (
          <a
            className="button button-secondary"
            href={section.buttonHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {section.buttonLabel || "Follow"}
          </a>
        )}
      </div>
      <div className="instagram-grid" aria-label="Latest Instagram posts from @jiujitsunyc, newest first">
        {instagramPosts.map(post => (
          <a
            className="instagram-card"
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            key={post.href}
          >
            <span className="instagram-label">{post.tag}</span>
            <h3>{post.title}</h3>
            <p>{post.copy}</p>
            <span className="card-link">View on Instagram →</span>
          </a>
        ))}
      </div>
    </section>
  )

  const renderFeaturedUpdates = section => (
    <section className="section feed-section" aria-labelledby="featured-title" key="featuredUpdates">
      <div className="section-heading">
        {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
        <h2 id="featured-title">{section.title}</h2>
        {section.copy && <p>{section.copy}</p>}
      </div>
      <div className="post-feed modern-feed">
        {posts.slice(0, section.postLimit || 6).map(({ node }, index) => (
          <PostCard key={node.fields.slug} count={index + 1} node={node} postClass="post" />
        ))}
      </div>
    </section>
  )

  const renderHomepageSection = section => {
    if (section.id === "hero") return renderHero(section)
    if (section.id === "intro") return renderIntro(section)
    if (section.id === "programs") return renderPrograms(section)
    if (section.id === "firstClass") return renderFirstClass(section)
    if (section.id === "instagram") return renderInstagram(section)
    if (section.id === "featuredUpdates") return renderFeaturedUpdates(section)
    return null
  }

  return (
    <Layout title={siteTitle}>
      <SEO
        title={seo.title || "Brazilian Jiu-Jitsu & Kids Martial Arts in Jackson Heights, Queens"}
        description={seo.description || "Train Brazilian Jiu-Jitsu, kids martial arts, kickboxing, Muay Thai, MMA, and toddler Jiu-Jitsu at @JiuJitsuNYC in Jackson Heights, Queens."}
        image={seo.image || "/img/og-image.jpg"}
        pathname="/"
        keywords={seo.keywords || []}
        schema={[localBusinessSchema, faqSchema]}
      />

      {homepageSections.map(renderHomepageSection)}

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="section-heading">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">FAQs about @JiuJitsuNYC</h2>
        </div>
        <div className="faq-list">
          {faqs.map(item => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { order: ASC } }
      filter: { frontmatter: { order: { in: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            order
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 1360, height: 1000, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
              relativePath
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <BlogIndex location={props.location} data={data} {...props} />}
  />
)

# AT Jiu Jitsu current build handoff

Last updated: 2026-06-04 23:36 EDT

This document is for future agent sessions that need to pick up the current AT Jiu Jitsu website build without relying on chat history.

## Repository and hosting

- GitHub repo: `dax8it/ATJIUJITSU-REAL-NEW`
- Default / production branch: `master`
- Current feature branch: `feat/modern-cms-seo-redesign-20260604-143320`
- Active PR: https://github.com/dax8it/ATJIUJITSU-REAL-NEW/pull/1146
- PR base: `master`
- PR head at this handoff: `51ee56dc3cc0d0a1165f4071591d78e2e0359753`
- `master` remote head at this handoff: `f5077a025aa6c5185b7aa86f054c8bfbad62acba`
- Netlify project: `atjiujitsunyc2020`
- Current PR deploy preview: https://deploy-preview-1146--atjiujitsunyc2020.netlify.app/
- Production domain is expected to remain the existing AT Jiu Jitsu Netlify production site until Alex approves merge/publish.

## Local worktrees

Use the feature worktree for this build:

```bash
cd /Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW-20260604-143320
```

Known local worktrees at this handoff:

- `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW` — older/dirty `master` checkout. Do not use for this PR unless you deliberately clean/rebase it.
- `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW-20260604-143320` — active feature branch for PR #1146.
- `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW-instagram-sync` — detached worktree used by the nightly Instagram sync cron script.

Always verify current state before editing:

```bash
git status --short --branch
git fetch origin --prune
gh pr view 1146 --json url,state,baseRefName,headRefName,headRefOid,statusCheckRollup
```

## Current build summary

The feature branch contains a modernized homepage / Gatsby + Decap site update, including:

- modern homepage hero and program cards
- local SEO copy and schema improvements
- refreshed Decap/admin-related config updates from this branch's earlier work
- recent blog posts for the summer promotions
- Instagram homepage section showing latest public `@jiujitsunyc` posts newest-first
- automated Instagram feed data sync support

Do not assume production has these changes until PR #1146 is merged and Netlify production is verified.

## Instagram feed implementation

The homepage no longer hardcodes Instagram cards directly in `src/pages/index.js`.

Relevant files:

- `src/pages/index.js` imports `instagramFeed` from `../data/instagram-posts.json` and renders `instagramFeed.posts`.
- `src/data/instagram-posts.json` is the generated static data source committed to the repo.
- `scripts/update-instagram-feed.js` fetches public Instagram profile metadata, sorts posts by timestamp newest-first, keeps 5 posts, and writes the JSON only when the stable feed changes.
- `package.json` includes `npm run instagram:update`.

Manual update/check:

```bash
npm run instagram:update
python3 -m json.tool src/data/instagram-posts.json | sed -n '1,140p'
```

Expected behavior:

- If no new Instagram posts exist, the command prints `No Instagram feed changes...` and does not change files.
- If new posts exist, it updates `src/data/instagram-posts.json`.
- It refuses to overwrite the last good JSON if Instagram fetch/parsing fails.

Important implementation detail:

- The script uses Instagram's public web metadata endpoint, not the official Meta API.
- It sends browser-like headers including `x-ig-app-id: 936619743392459` and same-origin `sec-fetch-*` headers.
- This is intentionally fail-safe, but it may need maintenance if Instagram changes the endpoint.

## Nightly Instagram cron job

Hermes cron job configured under profile `filippo`:

- Job name: `ATJJ Instagram nightly website sync`
- Job ID: `625db8b32047`
- Schedule: `15 3 * * *` — nightly at 3:15 AM
- Mode: `no_agent=true`
- Script: `atjj-instagram-nightly-sync.sh`
- Script path: `/Users/fattyclaw/.hermes/profiles/filippo/scripts/atjj-instagram-nightly-sync.sh`
- Delivery: local

Cron behavior:

- Checks PR #1146 state.
- While PR #1146 is open, it targets `feat/modern-cms-seo-redesign-20260604-143320`.
- After the PR is no longer open, it targets `master` only if the sync script exists on that branch.
- Runs `npm run instagram:update`.
- If no changes: exits 0 with empty stdout, so there is no spam.
- If feed data changes: runs `SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build`, commits `src/data/instagram-posts.json`, pushes to the target branch, and prints one short summary.
- If fetch/build/push fails: exits non-zero so Hermes raises an alert.

Check cron state:

```bash
hermes cron list
# or from an agent: cronjob(action="list")
```

Manual dry test of the script behavior:

```bash
bash /Users/fattyclaw/.hermes/profiles/filippo/scripts/atjj-instagram-nightly-sync.sh
```

At this handoff, a manual run returned exit 0 with empty stdout because there were no feed changes.

## Build and QA commands

Primary build command on Apple Silicon/macOS:

```bash
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build
```

Known non-blocking warnings:

- `gatsby-plugin-react-helmet` warning about Gatsby built-in head support.
- GraphQL query warning for `src/templates/blog-post copy.js`.
- old Browserslist/caniuse-lite warning.
- `gatsby-plugin-decap-cms` dynamic dependency warning.

Preview checks:

```bash
gh pr checks 1146 --watch --interval 10
```

Browser verification target while PR is open:

```text
https://deploy-preview-1146--atjiujitsunyc2020.netlify.app/
```

Homepage Instagram browser probe:

```js
[...document.querySelectorAll('.instagram-card')].map(a => ({
  label: a.querySelector('.instagram-label')?.textContent,
  title: a.querySelector('h3')?.textContent,
  href: a.href,
}))
```

At this handoff, preview rendered 5 Instagram cards in this order:

1. June 4, 2026 — `https://www.instagram.com/jiujitsunyc/reel/DZLAs8kKyu4/`
2. June 1, 2026 — `https://www.instagram.com/jiujitsunyc/reel/DZDvX5ySVC2/`
3. May 27, 2026 — `https://www.instagram.com/jiujitsunyc/p/DY3LiCglBEd/`
4. May 27, 2026 — `https://www.instagram.com/jiujitsunyc/p/DY2wzFCkohj/`
5. May 15, 2026 — `https://www.instagram.com/jiujitsunyc/reel/DYXcpoqxhaN/`

## Approval / production plan

Alex said production push/merge will probably happen tomorrow after approval.

Do not merge PR #1146 or push to `master` unless Alex explicitly approves production.

When approval is given:

1. Verify PR #1146 is still current and checks are green.
2. Run local build from the feature branch:

   ```bash
   SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build
   ```

3. Merge PR #1146 into `master` via GitHub/gh, or push only if Alex explicitly asks for direct branch operations.
4. Wait for Netlify production deploy.
5. Browser-verify production URL and `/admin/` still loads.
6. Verify homepage Instagram cards render newest-first on production.
7. After merge, confirm the nightly cron script now targets `master` by running it once; if no feed changes exist, it should stay silent.

Suggested post-merge verification commands:

```bash
gh pr view 1146 --json state,mergedAt,mergeCommit
# then poll/check Netlify production as appropriate
npm run instagram:update
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build
```

## Guardrails for future agents

- Work from real git/PR/Netlify state, not this document alone.
- Do not edit generated `public/` build output; edit source files.
- Do not add a browser-side Instagram widget unless Alex explicitly asks. Current approach is static JSON generated by a server-side scheduled sync.
- Do not treat a preview deploy as production.
- Do not push to `master` until Alex approves production.
- Preserve the cron fail-safe behavior: no stdout on no-change, non-zero on failures, short stdout only when a real website update was pushed.

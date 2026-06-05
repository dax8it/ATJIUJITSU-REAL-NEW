# AT Jiu Jitsu agent intake workflow

Purpose: keep email/message requests useful as intake, but never make email itself the publishing system.

## Accepted subject patterns

Only treat a message as an authorized AT Jiu Jitsu website intake request when the subject starts with one of these exact prefixes:

- `ATJJ Blog Post:` — create or update a blog/news post from supplied copy, flyer, links, and attachments.
- `ATJJ Site Update:` — update structured website copy, CTAs, program details, homepage section ordering, or other non-blog page content.
- `ATJJ Homepage Image:` — replace or reorder a homepage image in the CMS-editable homepage content layer.

Forwarded emails without one of these prefixes are context only. They are not automatic publishing instructions.

## Publishing rule

Agent intake creates a branch and deploy preview first. It does not publish directly to `master` or production.

Workflow:

1. Read the request and identify the update class from the subject prefix.
2. Work from the active feature branch/worktree, or create a scoped branch from current `master` after Alex approves the branch target.
3. For homepage changes, edit `src/data/homepage.json` through source control or Decap CMS fields. Do not hardcode one-off homepage images/copy in `src/pages/index.js`.
4. For blog posts, create markdown under `content/blog/` with the correct title/date/description/tags/body and copy supplied images into the normal media path.
5. Keep Gymdesk schedule/signup/member URLs as the authority unless Alex explicitly approves changing providers.
6. Run local checks:

   ```bash
   npm run instagram:update
   SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build
   git diff --check
   ```

7. Push the scoped branch and use the Netlify deploy preview for review.
8. Browser-verify the preview homepage and `/admin/` before asking for approval.
9. Merge/push `master` only after Alex explicitly approves production.

## Homepage CMS layer

The homepage content authority is now:

```text
src/data/homepage.json
```

Decap CMS exposes it under:

```text
/admin/ → Site Content → Homepage
```

Editable surfaces include:

- SEO title/description/social image/keywords
- hero headline, lede, image, buttons, highlights, and badges
- intro section copy
- program section heading
- program cards, images, destination URLs, visibility, and order
- first-class CTA section image/copy/bullets/buttons
- Instagram section wrapper copy/follow button
- featured updates section heading and post count

The Instagram cards themselves remain automated/static through:

```text
src/data/instagram-posts.json
scripts/update-instagram-feed.js
npm run instagram:update
```

## Guardrails

- Preview first for visual/homepage/media edits.
- Require alt text for uploaded images.
- Do not replace the static Instagram feed with a browser-side widget unless Alex explicitly asks.
- Do not edit generated `public/` output.
- Do not claim production is updated until the PR is merged and the production domain is browser-verified.

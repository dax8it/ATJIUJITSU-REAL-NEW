# Agent operating notes for this repo

This is the AT Jiu Jitsu Gatsby/Decap/Netlify site.

Before making changes, read:

- `docs/agent-handoff-current-build.md`

Current approval gate:

- Do not push or merge to `master` until Alex explicitly approves production.
- Current work is on PR #1146 from `feat/modern-cms-seo-redesign-20260604-143320` into `master`.
- Use the preview URL for QA until production approval: `https://deploy-preview-1146--atjiujitsunyc2020.netlify.app/`.

Common commands:

```bash
npm run instagram:update
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm run build
gh pr checks 1146 --watch --interval 10
```

Important local paths:

- Primary feature worktree: `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW-20260604-143320`
- Dirty/older master checkout may exist at: `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW`
- Instagram sync worktree: `/Users/Shared/GITHUB/ATJIUJITSU-REAL-NEW-instagram-sync`

If a future agent session starts here, verify live git/PR state first; this file is a handoff, not a substitute for current checks.

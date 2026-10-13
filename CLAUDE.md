@AGENTS.md

# Isla Verde website prototype

Prototype website for a client ("Isla Verde"). Built with Astro, hosted on Cloudflare Workers,
code on GitHub. The client reviews the live workers.dev URL.

- GitHub: https://github.com/wilopez8/isla-verde-web-template (branch `main`)
- Local dev: `npm run dev` → http://localhost:4321
- Deploys happen by pushing to GitHub (Cloudflare Workers Builds). Don't use `npm run deploy`.
- Home page content lives in plain data objects at the top of `src/pages/index.astro`.
- Brand colors: `--accent` / `--accent-dark` in `src/styles/global.css`.

# Status log

Update this section at the end of every session: move finished items to "Done", add new ones.

## Done
- 2026-10-12: Project created from Cloudflare's Astro blog starter.
- 2026-10-12: Rebranded to Isla Verde: site title, green accent, header (Home / Services / About / Contact button), footer; removed Astro social icons.
- 2026-10-12: Built home page skeleton: hero, services cards, about, gallery, testimonial, contact info + form. All placeholder content.

## In progress
- Connecting the local project to GitHub. The GitHub repo already had a "source repo import" commit
  (template copy, likely created by Cloudflare's "Deploy to Cloudflare" button), so the first push
  needs `--force` (see steps given in session 1).
- Worker name mismatch: `wrangler.json` says `isla-verde`, but the Cloudflare Worker linked to the repo
  is probably `isla-verde-web-template`. Confirm in the dashboard and make them match before pushing.

## Next up
- Confirm the Cloudflare Worker exists and is linked to the GitHub repo; get the client's live URL.
- Get real client info: business type, services, copy, photos, logo, contact details.
- Replace placeholder images (they show the Astro logo) and text.
- Decide whether the blog is needed; if not, remove `src/pages/blog`, `src/content/blog`, `rss.xml.js`.
- Update the About page (`src/pages/about.astro`), still starter content.
- Contact form is not connected; choose a solution (e.g. form service or a Worker endpoint).
- Set `site:` in `astro.config.mjs` once the final domain is known.
- Optional: rename the local folder `broken-lab-31d0` and move the project out of OneDrive.

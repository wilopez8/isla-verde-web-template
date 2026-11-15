@AGENTS.md

# Isla Verde website prototype

Prototype website for a client ("Isla Verde"). Built with Astro, hosted on Cloudflare Workers,
code on GitHub. The client reviews the live workers.dev URL.

- GitHub: https://github.com/wilopez8/isla-verde-web-template (branch `main`)
- Local dev: `npm run dev` → http://localhost:4321
- Live (client) URL: https://isla-verde-web-template.wilopez52.workers.dev
- Deploys happen by pushing to GitHub (Cloudflare Workers Builds, Worker `isla-verde-web-template`).
  Don't use `npm run deploy`. Build status shows as a check run on each GitHub commit.
- Site is in Spanish, 5 pages: `/` (index), `/servicios`, `/proyectos`, `/nosotros`, `/contacto`,
  all using `src/layouts/SiteLayout.astro`. `/about` redirects to `/nosotros` (astro.config.mjs).
- Page text lives in plain data objects at the top of each page. Shared content: services in
  `src/data/servicios.ts`, project gallery in `src/data/proyectos.ts`.
- Brand: `manual-de-marca.md`. Colors are `--iv-*` variables in `src/styles/global.css` (plus darker
  greens `--iv-forest-dark` / `--iv-forest-deep`); fonts Montserrat + Lato from Google Fonts in BaseHead.
- Icons: `src/components/Icon.astro` (Lucide paths, add new ones there).
- Photos: `public/images/proyectos/` (copies with clean names; originals in `public/islaverde-images/`).

# Status log

Update this section at the end of every session: move finished items to "Done", add new ones.

## Done
- 2026-10-12: Project created from Cloudflare's Astro blog starter.
- 2026-10-12: Rebranded to Isla Verde: site title, green accent, header (Home / Services / About / Contact button), footer; removed Astro social icons.
- 2026-10-12: Built home page skeleton: hero, services cards, about, gallery, testimonial, contact info + form. All placeholder content.
- 2026-11-15: Redesigned in Spanish as a 5-page site ("more contrast" version of the Claude Design
  canvases), using the brand manual colors/fonts, the logo and 14 client photos. Removed starter About page.
- 2026-11-15: Local project connected to GitHub; Cloudflare Workers Builds deploys `main` to the live URL
  (verified: commit eb941c3 built and is live). Added the real company story (Patricia) to Nosotros.

## In progress
- (nothing)

## Next up
- Fill the `[BRACKETED]` placeholders: contact details + links (contacto.astro), client quote
  (nosotros.astro). Confirm the service checklists with the client.
- `wrangler.json` `name` is `isla-verde` but the Cloudflare Worker is `isla-verde-web-template`. Builds
  work today; consider renaming it in `wrangler.json` to match so the two don't drift.
- Photos are 200–430 KB each; consider resizing/compressing them before launch.
- Decide whether the blog is needed; if not, remove `src/pages/blog`, `src/content/blog`, `rss.xml.js`,
  `src/layouts/BlogPost.astro`, `src/components/HeaderLink.astro` and the Atkinson fonts. (Blog is still English.)
- Contact form is not connected (shows a thank-you with a "test form" note); choose a solution
  (e.g. form service or a Worker endpoint).
- Use the favicon files from the brand manual (`favicon.ico`, 512px PNG) once available; only the 32px PNG is in `public/`.
- Set `site:` in `astro.config.mjs` once the final domain is known.
- Optional: rename the local folder `broken-lab-31d0` and move the project out of OneDrive.

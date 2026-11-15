// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",
	integrations: [mdx(), sitemap()],
	// The old starter "About" page was replaced by the Spanish "Nosotros" page.
	redirects: {
		"/about": "/nosotros",
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});

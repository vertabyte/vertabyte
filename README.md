# Vertabyte corporate website

A standalone, fully static Astro and TypeScript website for **Vertabyte Tech Limited**, intended for **https://vertabyte.tech**. Normal CSS, system fonts, no React, backend, database, authentication, CMS or client JavaScript.

## Development

Use Node.js 22.12+ (Node.js 24 recommended) and npm.

```sh
npm ci
npm run dev
```

The development server prints its local URL. If the environment blocks Astro's optional build-tool telemetry preferences, run commands with `ASTRO_TELEMETRY_DISABLED=1`. This is developer tooling only; the generated website contains no telemetry.

## Verify and build

```sh
npm run verify
npm run preview
```

Verification runs Astro's TypeScript checks, generates the production build and checks the required pages, internal links and anchors, metadata, email links, sitemap, assets and absence of client JavaScript. The complete deployable website is in `dist/`. `preview` serves it locally; it is not a production server.

## Deploy to any static host

1. Install dependencies with `npm ci`.
2. Run `npm run build`.
3. Publish **only the contents of `dist/`** as the website root.
4. Configure the host to serve directory index files: `/privacy` must resolve to `privacy/index.html`, and `/support` to `support/index.html`. A redirect to the slash form is acceptable. Do not add an SPA fallback that returns the homepage for missing pages; use `404.html` for not-found responses.
5. Connect `vertabyte.tech` in the host's custom-domain settings. Follow the DNS records supplied by that host, enable HTTPS, and redirect alternate hostnames to `https://vertabyte.tech`.
6. Check `/`, `/privacy`, `/support`, `/robots.txt`, `/sitemap.xml`, email links and the not-found page at the real domain.

Cloudflare Pages, Netlify and Vercel can use build command `npm run build` and output directory `dist`, with no server adapter. For GitHub Pages, publish the generated `dist` artifact using a Pages workflow, add `vertabyte.tech` as the custom domain, and use a `.nojekyll` file if publishing through a branch. A conventional web server can simply serve `dist` with directory indexes and HTTPS. No environment secrets are needed.

## Website content

The site includes a homepage, website privacy notice, software support page and a custom 404 page. Contact links use **info@vertabyte.tech**.

No analytics, advertising, browser storage, third-party embeds or cookies are implemented. Keep the privacy notice consistent with the production host's configuration and any future website changes.

## Files and editing

- `src/pages/index.astro`: homepage content.
- `src/pages/privacy.astro`, `support.astro`, `404.astro`: information pages.
- `src/layouts/Layout.astro`: common HTML, canonical and social metadata.
- `src/components/`: navigation and footer.
- `src/styles/global.css`: responsive styles, focus treatment and reduced-motion support.
- `src/pages/sitemap.xml.ts`: sitemap generated at build time; no runtime endpoint.
- `public/`: favicon and crawler instructions.
- `scripts/verify.mjs`: production-output checks.

Canonical URLs use `https://vertabyte.tech`, including when reviewing on another host. Update Astro's `site` setting, the sitemap and robots file together if the permanent domain changes. Metadata includes Open Graph and Twitter summary fields; no social account or unsupported image asset is claimed.

The layout uses visible, wrapping navigation without a mobile script, semantic landmarks, a skip link, one H1 per page, visible keyboard focus, responsive grids and system fonts. Before release, manually review mobile and desktop layouts, keyboard navigation and 200% zoom in your target browsers. Automated content checks are not a full accessibility audit.

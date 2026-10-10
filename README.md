# El Mehdi Essaadi · Frontend engineering

[![El Mehdi Essaadi portfolio · Frontend Engineer](static/images/portfolio-hero.png)](https://mehdiessaadi.com)

[Visit my portfolio](https://mehdiessaadi.com)

A portfolio for React, Next.js and TypeScript product work, with a light interface, navy accents, a personal portrait and large product previews.

## What is included

* Professional projects at Overseas Network, with a dedicated FIFA World Cup 2026 case study and approved sample data screenshots.
* Current experience, grouped skills and practical AI engineering workflows.
* Earlier independent projects with GitHub source links.
* A one page, selectable PDF résumé with clickable contact links, retaining the original gray header and two column layout.
* Responsive layouts, semantic navigation, visible keyboard focus, reduced motion support and optimized project images.
* Search and social metadata, a favicon, robots.txt and sitemap.xml.

## Run locally

Use Node 22, the version used to validate this update.

```sh
npm ci
npm run develop -- --host 127.0.0.1 --port 3110
```

For the production preview:

```sh
npm run build
npm run verify
npm run serve -- --host 127.0.0.1 --port 3110
```

The site remains Gatsby. Build output is in `public/`; the existing Netlify plugin is retained. The approved production build was uploaded to the existing Netlify project on October 10, 2026. Netlify automatically builds the connected `main` branch. `netlify.toml` pins Node 22 and publishes the generated `public/` directory.

## Update content

`src/data/profile.json` is the shared source for employment, capabilities and résumé content. Page specific project narratives are in `src/pages/index.js` and `src/pages/work/fifa-world-cup.js`.

To regenerate the résumé:

```sh
python3 -m pip install -r scripts/requirements.txt
npm run resume
```

This writes `static/documents/el-mehdi-essaadi-resume.pdf` and updates `src/assets/documents/resume.pdf` for existing repository references. The script checks that the output fits on one page. Review the PDF visually after editing. Its Markdown companion is in `docs/resume.md`.

```sh
npm run social-cover
npm run format
npm run format:check
```

When changing the public domain, update `siteUrl` in the profile, `static/robots.txt`, `static/sitemap.xml` and the social cover generator. The existing Google Analytics identifier has been retained.

## Public content boundaries

The FIFA screenshots are application previews with sample data, including illustrative prices and availability. The application is no longer live. The case study describes frontend work performed at Overseas Network, not employment by FIFA. The images were selected and approved by the profile owner. No private company application source, credentials, release plans, migration counts or pricing policies are included.

## Validation

See `docs/verification.md` for the checks completed and any remaining review limitations.

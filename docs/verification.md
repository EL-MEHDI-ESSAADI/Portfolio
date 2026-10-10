# Verification

Checked on October 10, 2026 using Node 22 and the bundled Python PDF tools.

## Completed

* Production Gatsby build passes for the homepage, FIFA case study and 404 page.
* `npm run verify` passes for three generated pages, including page anchors, image references, local fonts and résumé downloads.
* Current employer, prior employers and the requested AI and AWS skills appear in generated content.
* Search and social metadata, canonical URLs, structured identity data, robots.txt, sitemap.xml and the 1200 × 630 social image are present.
* New and legacy résumé source paths contain identical, current PDFs.
* The résumé restores the original gray header, Raleway / Lato typography and two column structure. It is one page with selectable text and five clickable contact links. Its final rendered page was visually reviewed for alignment, clipping and legibility, and a text bounds check found no characters outside the page margins.
* Personal city and country are omitted from generated pages and the résumé.
* The redesigned interface uses a light hero with the approved portrait, larger product previews, simplified navigation and more readable typography.
* Code formatting and Git whitespace checks pass.
* Layout styles include mobile breakpoints, visible keyboard focus, a skip link, image alternatives and reduced motion support.
* The approved portrait and FIFA screenshots are used without changing their content. Gatsby supplies responsive, optimized versions.

## Remaining visual review

The local production preview is running at http://localhost:3110. Browser automation was rejected by the saved permission setting, including after the user approved access and reported changing that setting. No alternate browser or access workaround was used.

The live homepage and FIFA case study were subsequently opened and checked in Microsoft Edge after deployment. The live résumé and both cropped screenshot files match their approved local files by SHA-256. Mobile appearance, keyboard interaction and browser console behavior still need review. Build and file checks do not substitute for that review.

## Scope

Changes are in the local `refresh-professional-profile` branch. The approved production build was deployed to the existing Netlify project `mehdiessaadi` on October 10, 2026. Deploy `6acaa3cf8f9ade540f483eca` is the published production version at https://mehdiessaadi.com. The source is prepared for synchronization to GitHub. `netlify.toml` configures automatic builds from the connected main branch using Node 22. No GitHub profile change has been made. The retained Gatsby 4 stack was verified rather than replaced; dependency modernization is outside this branding update.

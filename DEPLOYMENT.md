# Deploy Biruk Wonduwosen’s portfolio

Production origin: https://biruk.ethioerp.com

## Upload package

`portfolio-production.zip` contains only the contents of the generated `out/` directory. When extracted, `index.html`, `404.html`, `_next/`, `work/`, images, the approved project and resume PDFs, sitemap.xml, and robots.txt sit directly in the extraction directory. Do not upload the repository, node_modules, .next, environment files, or build tools.

Only static files are uploaded. npm commands run on the build machine; the host does not need Node.js, a database, API keys, or a running application backend.

## Hosting steps

1. Create the `biruk.ethioerp.com` subdomain in your hosting panel.
2. Point its DNS to the hosting provider’s specified destination. Use the provider’s actual IP address or CNAME target; no destination is assumed in this package.
3. Locate the document root configured for that subdomain. Confirm this exact path in the hosting panel; do not assume it is the parent domain’s public_html folder.
4. Back up existing files in that document root before replacing them. Keep the backup outside the publicly served directory.
5. Upload and extract `portfolio-production.zip` into that document root. Allow replacement of the previous portfolio files only after taking the backup. Remove obsolete files from the previous deployment when appropriate.
6. Ensure `index.html` sits directly inside the document root, with `_next/`, `work/`, and asset folders beside it. There must be no extra `out/` or `portfolio-production/` wrapper directory.
7. Enable an SSL certificate for `biruk.ethioerp.com` through the hosting provider. Wait until DNS resolves to the provider so domain validation can complete.
8. Enable HTTPS redirection through the hosting panel. Do not add conflicting redirect rules in multiple places. The production canonical origin is HTTPS.
9. Configure the host to serve `index.html` as the default document for directories and `/404.html` for missing files with HTTP status 404. Enable appropriate MIME types for HTML, JavaScript, CSS, SVG, PNG, JPEG, WebP, XML, text, and PDF. Disable public directory listing.
10. Test the homepage and each direct project URL below, including refreshing the browser on those URLs. Check images, PDF, mobile menu, email actions, sitemap, robots, and a deliberately missing URL.
11. Remove the uploaded ZIP from the document root after successful extraction and verification; keep the local copy as the deployment artifact.

## Direct URLs

- https://biruk.ethioerp.com/
- https://biruk.ethioerp.com/work/my-clean-cook/
- https://biruk.ethioerp.com/work/fhc-hr-payroll/
- https://biruk.ethioerp.com/work/federal-housing-erp/
- https://biruk.ethioerp.com/work/oromia-mineral-management/
- https://biruk.ethioerp.com/work/land-development-management/
- https://biruk.ethioerp.com/work/biruk-wondu-portfolio/
- https://biruk.ethioerp.com/documents/fhc-hr-payroll-implementation.pdf
- https://biruk.ethioerp.com/documents/Biruk_Wonduwosen_Resume.pdf
- https://biruk.ethioerp.com/sitemap.xml
- https://biruk.ethioerp.com/robots.txt

A missing URL such as `/this-page-does-not-exist/` must return HTTP 404 and the custom page, not HTTP 200 with the homepage. `404.html` itself is a static file; visiting it directly may return 200, while missing routes must return 404.

## Server-specific examples (outside the ZIP)

The actual server type is unknown. Most panels can configure default documents and custom errors without additional files. No server config is included in the upload ZIP.

- **Apache:** `hosting-examples/apache.htaccess.example` can be reviewed and copied as `.htaccess` only on Apache hosts that permit these overrides. It uses DirectoryIndex and a local ErrorDocument; it has no SPA rewrite. See [Apache ErrorDocument documentation](https://httpd.apache.org/docs/2.4/mod/core.html#errordocument).
- **IIS:** `hosting-examples/iis.web.config.example` can be reviewed and copied as `web.config` only on IIS hosts with the necessary features and delegated sections. The server-relative error URL must be on this site. Check the missing-route status after configuring it. See [IIS custom error mapping documentation](https://learn.microsoft.com/en-us/iis/configuration/system.webserver/httperrors/error/).
- For another server or a locked hosting environment, ask the provider to configure index.html and the custom 404. Do not install both examples. Do not add catch-all redirects or rewrites to index.html.

These examples have not been run on your actual hosting provider. Host-side SSL, DNS, permissions, default documents, MIME settings, custom errors, and caching remain the provider/user’s responsibility.

## Rebuild and preview locally

Use Node.js 22 on the build machine, then run:

```powershell
npm ci
npm run lint
npm run typecheck
npm run build
node qa/serve-static.mjs
```

Open http://127.0.0.1:3100 for the exported-site preview. That local-only address is not used in production metadata. Stop the preview with Ctrl+C. The preview serves files directly and returns the custom error page with status 404 for missing paths; it does not simulate Apache or IIS.

After a new successful build, recreate the ZIP from the CONTENTS of out/. Keep this document and hosting examples outside the upload ZIP. No uploading, DNS changes, certificates, or remote server configuration have been performed by this preparation task.

## Preparation validation results

- Dependencies installed using the existing lockfile (`npm ci`). A local dev server holding a compiler binary open was stopped for installation; the retry completed successfully. The lockfile was not changed.
- Lint, TypeScript, and production build passed. The previous metadataBase warning is resolved.
- Seven content pages (home plus all six projects), all 67 exported files, and 74 local URLs/assets passed the static preview audit. Sitemap contains all seven production URLs; robots.txt points to the production sitemap.
- Every content page has its own production canonical and Open Graph URL; social sharing images use absolute production URLs. The custom error output is noindex with a /404.html canonical.
- No localhost URLs were found in exported production files. No environment files, repository source files, source maps, or private-key markers were found. Compiled public JavaScript/CSS under _next/ is included as required by Next.js.
- The missing-route check returned genuine HTTP 404 with the custom page. Browser checks confirmed all six direct project URLs load after refresh, and the 404 page links back home.
- Desktop (1440px), tablet (768px), and mobile (390px) layouts were reviewed. No horizontal overflow was observed. The mobile menu opens via Enter, and Escape from navigation closes it and returns focus to its button. Portrait and project image loading were checked.
- ZIP entries were checked for root-level index.html, CRC integrity, and byte-for-byte equality with out/. It contains no out/ wrapper folder.

Machine-readable local results are in `qa/production-validation.json` and `qa/production-package.json`; desktop/mobile screenshots are `qa/production-desktop.jpg` and `qa/production-mobile.jpg`. These review files and this guide are outside the upload ZIP.

No remote hosting checks were performed. DNS routing, actual host server type, provider-side 404/default-document behavior, domain SSL issuance, HTTPS redirection, and final public URLs must be verified after deployment by the user/provider. No uploading or DNS changes were made.



## Resume and contact update validation

The current ZIP includes documents/Biruk_Wonduwosen_Resume.pdf. The two-page resume was rendered and visually reviewed, text extraction was verified, and its six email/contact/profile hyperlinks were checked against the supplied destinations. The editable HTML and generators remain outside the ZIP in resume/. Hero and About download links use the actual PDF path and the Biruk_Wonduwosen_Resume.pdf download filename. WhatsApp and Telegram controls appear in Contact and the footer; both hiring profiles appear in the hero and Contact. Button targets and responsive layouts were checked at desktop and mobile sizes, with no horizontal overflow and new controls at least 48px tall. Lint, TypeScript, production build, export audit, and ZIP integrity/content verification passed. No publishing or DNS changes were performed.


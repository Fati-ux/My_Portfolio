# Biruk Wonduwosen portfolio

Next.js App Router, TypeScript, and Tailwind CSS portfolio, configured for static hosting at **https://biruk.ethioerp.com**. No runtime backend, database, API keys, or Node.js server is required on the host.

## Local setup

Use Node.js 22 and the existing package-lock.json:

```powershell
npm ci
npm run dev
```

The development server prints its local URL. To validate and preview the production export:

```powershell
npm run lint
npm run typecheck
npm run build
node qa/serve-static.mjs
```

The preview serves `out/` at http://127.0.0.1:3100, including directory index files and genuine custom 404 responses. Local preview addresses are not production URLs. Stop it with Ctrl+C.

## Content and design

- `lib/content.ts`: profile, confirmed work experience, six unique projects, skills, education, and services.
- `lib/project-types.ts`: optional screenshots, gallery, PDF, workflow, and related-work fields.
- `lib/site.ts`: production origin, absolute social image, and page-specific canonical / sharing metadata.
- `app/sitemap.ts` and `app/robots.ts`: static search-engine files from the production domain and project slugs.
- `components/`: reusable accessible navigation, previews, representative workflow, and email-copy control.
- `app/globals.css`: shared design tokens and responsive styling.

Project routes are generated from slugs; keep existing slugs to preserve URLs. The six projects are My Clean & Cook, FHC HR and Payroll Implementation, Federal Housing Corporation ERP, Oromia Mineral Management System, Land Development and Management System, and Biruk Wonduwosen Portfolio.

The current role is confirmed as Chief Software Developer at Federal Housing Corporation, May 2022–Present. The earlier Xoka developer role is retained. Email, social profile URLs, and the homepage portrait are preserved.

## Public assets and verification limits

The portrait original is retained in `public/images/`; its optimized WebP is used in the hero with explicit dimensions and preloading. The supplied My Clean & Cook homepage capture is cropped to remove browser chrome. The supplied FHC payroll screenshots are cropped to remove the internal URL, run identifiers, dates, payroll figures, account configuration, and session details. Uncropped internal screenshots are not included.

The approved four-page Frappe HR capability PDF is in `public/documents/` and linked on the payroll case study. Its diagrams and the representative payroll workflow are illustrative, not deployed-system screenshots. The three older enterprise previews also remain clearly labelled illustrations with fictional data.

Marketplace functionality and technologies are supplied by the owner; every feature has not been independently tested. Payments are described as a PayPal sandbox checkout integration; live capture remains unverified. No source repository or deployed portfolio has been verified. No results, user counts, testimonials, or implementation versions have been invented. The original résumé PDF was not supplied. A two-page resume is now generated from documented portfolio content and confirmed contact/employment details, without references. Its editable HTML source and build instructions are in resume/. Review project-specific technology details before publication.

## Deployment

See **DEPLOYMENT.md** for the exact subdomain, DNS, document-root, backup, upload/extraction, SSL, HTTPS, and verification steps. `portfolio-production.zip` contains only the contents of `out/`, with index.html at the ZIP root. Optional Apache and IIS examples live outside the ZIP in `hosting-examples/`; use only the one applicable to the provider.

`output: 'export'`, `trailingSlash: true`, and unoptimized Next.js image serving support ordinary static hosting at the domain root. No basePath or SPA fallback is used. Next.js client chunks under `_next/` are required public assets; keep them alongside the exported pages. npm commands run during the build, never on the live host.

Preparation does not upload files or change DNS. The provider still needs to supply DNS destination information, serve directory index files, enable correct MIME types, configure a 404 response using /404.html, and provision HTTPS.

Production preparation validation passed: exact-lockfile dependency installation, lint, typecheck, production build, local export audit, desktop/tablet/mobile checks, and ZIP integrity/content verification. See DEPLOYMENT.md and qa/production-validation.json for results and remaining provider-side steps. No files were uploaded and DNS was not changed.


## Contact and resume update

WhatsApp and Telegram links are centrally defined in lib/content.ts and shown with labelled icons in Contact and the footer. The hero and Contact sections offer both Upwork and LinkedIn hiring links; LinkedIn opens the existing profile. Hero and About download controls point to public/documents/Biruk_Wonduwosen_Resume.pdf with a meaningful download filename. The resume source is resume/Biruk_Wonduwosen_Resume.html; see resume/README.md for regeneration. No booking or payment flow is implied by the LinkedIn link.


Contact/resume validation: the two-page PDF was visually reviewed for clipping and page breaks, and its text selection and six embedded hyperlink destinations were checked. Website download filenames, messaging targets, hiring profiles, and desktop/mobile layouts passed. Lint, TypeScript, static build, and the production audit passed (67 exported files, 74 local URLs). The recreated ZIP includes the resume at documents/Biruk_Wonduwosen_Resume.pdf and retains index.html at its root. Editable HTML and generators are provided outside the ZIP in resume/.

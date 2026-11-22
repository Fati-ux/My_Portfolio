# Biruk Wondu portfolio

A lightweight Next.js App Router portfolio with TypeScript and Tailwind CSS, designed for static deployment. No runtime API keys or services are required.

## Develop and validate

Use Node.js 22. Run `npm ci`, then `npm run dev`. Open http://localhost:3000.

- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run build` — production build and static export to `out/`

For an initial installation without a lockfile, use `npm install` first. Commit the generated package-lock.json and use `npm ci` thereafter.

## Edit content

All profile information, project descriptions, skills, education, services, and work experience live in `lib/content.ts`. Project pages are generated from the project slugs. Shared components live in `components/`; responsive styling and design tokens are in `app/globals.css`.

## Deploy

Run `npm run build` and deploy `out/` to a static host with directory-index support (for example GitHub Pages, Netlify, or Cloudflare Pages). On Vercel, import as a Next.js project. This project has not been published. For a subdirectory deployment, configure Next.js basePath first. Do not put private documents or credentials in `public/`.

## Confirm before publishing

- The resume PDF was not attached to this workspace. Content uses only the facts supplied in the brief. Public profiles were not accessible during source review; the user-supplied profile URLs are retained.
- Confirm the senior role’s end date in `experience[0].end`. Until confirmed, the site displays only its start date and does not claim current employment.
- Verify project-specific technologies, implementation details, public demo/source URLs, and approved screenshots before adding them. No project-specific stack has been inferred.
- All interface previews are original illustrative concepts using fictional sample data. They are labelled in the visual and accessible description. They do not claim delivered functionality or real results.
- No portrait, phone number, references, private repositories, or CV download is published. Add a CV only after removing reference contact details and reviewing it for public use.
- Configure the final canonical domain, metadataBase, and absolute social image URLs once a domain is selected. A PNG social image is included for broad platform support.

## Accessibility and behavior

Semantic landmarks, a skip link, keyboard-operable mobile navigation with Escape support, visible focus styles, reduced-motion handling, and copy-email status feedback are included. If clipboard access is denied, the email address is displayed for manual copying. Email links use mailto and require a configured mail application. Profile links navigate in the same tab.


## Validation completed

- ESLint: passed without warnings.
- TypeScript: passed; the production build also completed its TypeScript check.
- Production static export: passed; the home page, three project pages, and 404 page are in `out/`.
- Local HTTP checks: home page and all three project pages returned 200.
- Browser checks at 1440px, 768px, and 390px: layouts reviewed; no horizontal overflow observed at the tablet and mobile widths.
- Keyboard mobile menu: Enter opens; Escape from a navigation link closes and returns focus to the menu button.
- Contact: copy-email button reported “Email copied.”; mailto target was verified without opening or sending an email.
- Project navigation: checked from the selected work preview into a correctly titled detail page.
- Profile link targets match the supplied URLs; external profile availability could not be independently verified.
- Screenshots: `qa/desktop.jpg` and `qa/mobile.jpg`.

The build warns that metadataBase is not set because no deployment domain was provided. Set it to the final HTTPS origin in `app/layout.tsx` before publishing so social image URLs resolve to the deployed host. `next start` is intentionally not included: this project deploys the static `out/` directory. Use `npm run dev` for local development.

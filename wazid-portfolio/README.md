# Wazid Hasan Likhon — Portfolio

Personal portfolio site, built with React + Vite. Migrated from a static HTML/CSS/JS site.

## Getting started

npm install
npm run dev

## Build for production

npm run build

The output goes to the `dist/` folder.

## Project structure

- `src/components/` — one file per section (Header, Home, About, Skills, Services, Portfolio, Github, Contact, Footer)
- `src/index.css` — all styling (ported from the original site, unchanged)
- `public/` — images, CV PDF, static assets

## Notes

- The GitHub Activity section pulls live public data from the GitHub REST API (no auth token, so it's limited to 60 requests/hour per IP).
- The contact form submits to Formspree — no backend needed.
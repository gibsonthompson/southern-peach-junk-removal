# Peach State Junk Removal

Marketing site for Peach State Junk Removal, serving metro Atlanta. Junk removal,
dumpster rentals, and light demolition.

Built with Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
public/                 brand assets (logo-black, logo-white, peach-mark)
src/
  app/
    layout.tsx          root layout, fonts (Anton + Archivo), site metadata
    page.tsx            homepage, assembles the section components + JSON-LD
    globals.css         design system: tokens + component styles
    sitemap.ts          sitemap (add service/location routes as they ship)
    robots.ts           robots.txt
  components/
    Header, Hero, Services, Gallery, Audiences, Process,
    WhatWeHaul, WhyUs, ServiceArea, CTA, Footer, MobileBar
    icons/index.tsx     custom line-icon set (matches the logo)
  data/
    site.ts             business facts (name, phone, tagline)
    services.ts         3 core services + sub-service SEO pages
    locations.ts        metro Atlanta service-area cities
    haul.ts             "what we haul" grid items
```

Pages are data-driven. Service, location, and sub-service pages are generated
from the arrays in `src/data`, so adding a city or service is one data entry, not
a new hand-built page.

## Design system

- Palette: near-black surfaces, single orange accent (#F26A2A / #FF8C42), chrome
  wordmark treatment, warm ember gradients. Tokens live in `globals.css` `:root`
  and in `tailwind.config.ts`.
- Type: Anton (display) + Archivo (body), loaded via `next/font`.
- Icons: one custom SVG family in `src/components/icons`. No icon library.

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values there. Nothing secret
is committed. The SMS and Supabase keys are placeholders for the Phase 5 quote
pipeline and are not wired up yet.

## Roadmap

- [x] Phase 2: scaffold, design system, homepage
- [ ] Phase 3: service page template + 3 core + sub-service SEO pages
- [ ] Phase 4: location page template + metro Atlanta city pages
- [ ] Phase 5: quote form pipeline (Supabase + photo upload + SMS to owner)
- [ ] Phase 6: admin dashboard, schema/sitemap completion, QA, deploy

## Deploy

Push to GitHub and import the repo in Vercel. Set `NEXT_PUBLIC_SITE_URL` in the
Vercel project settings. Every `git push` to the main branch deploys.

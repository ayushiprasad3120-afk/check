# VisionovaHQ

Premium marketing website for VisionovaHQ, a global performance advertising network. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy

This project deploys directly to Vercel. Push to GitHub, import the repo in Vercel, and deploy — no additional configuration required.

## Structure

- `app/` — routes, layouts, metadata (App Router)
- `components/` — UI, layout, home, forms, and shared components
- `lib/` — site content/data, SEO helpers, utilities
- `public/` — static assets (favicon, OG image)

## Notes

- Forms are client-side only (no backend wired up). Connect them to your API, form service, or email provider by replacing the `setTimeout` in each `components/forms/*.tsx` file with a real submission call.
- Update `lib/seo.ts` `siteConfig.url` to your production domain before deploying.

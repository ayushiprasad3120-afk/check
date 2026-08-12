# InsureDirect

A premium, config-driven insurance marketplace built with Next.js 15 (App Router), TypeScript, and
Tailwind CSS. InsureDirect helps visitors understand auto, ACA health, home, and final expense insurance
coverage and connects them with licensed agents — without hardcoding brand, campaign, or tracking values
anywhere in the codebase.

## Features

- **Config-driven everything** — brand identity, navigation, services, FAQs, testimonials, business hours,
  states/cities, and advertiser campaigns all live in `config/`. Nothing brand- or campaign-specific is
  hardcoded into a component.
- **Enterprise campaign system** — `/campaign/[slug]` routes are fully driven by `config/campaign.config.ts`.
  Switching a campaign's phone number, tracking URL, hero copy, meta tags, FAQs, or analytics IDs requires
  editing exactly one file.
- **Single call-routing source of truth** — every "Call Now" surface renders the same `CallButton`
  component, which automatically resolves to a tracking-URL redirect, a `tel:` link, or a disabled state
  with no per-component branching (see `lib/campaign/cta-resolver.ts`).
- **Programmatic, gated SEO** — vertical, state, and city pages are statically generated from
  `config/services.config.ts` and `config/states.config.ts`, with ISR revalidation and structured data
  (Organization, FAQPage, BreadcrumbList, Article) throughout.
- **MDX blog** with categories, tags, author pages, related-article linking, client-side search, and an RSS
  feed.
- **Accessible by default** — WCAG 2.1 AA–oriented components, visible focus states, semantic landmarks,
  reduced-motion support, and 44px+ tap targets throughout.
- **Consent-gated analytics** — GTM/GA4/Microsoft Clarity/Google Ads conversion/Meta Pixel scripts only load
  after the relevant cookie-consent category is granted.

## Folder Structure

See `INSURE-DIRECT-ARCHITECTURE.md` (Part 1 deliverable) for the full annotated folder structure and the
reasoning behind it. In short:

```
app/            Next.js App Router routes
components/     ui/ (primitives) -> shared/ -> marketing/, services/, blog/, forms/, layout/, consent/
config/         The control plane — brand, services, nav, seo, tracking, campaign, states, etc.
content/        MDX blog posts, author JSON, legal MDX
lib/            Framework-agnostic logic: seo, tracking, campaign, blog, validation, consent, utils
hooks/          Client hooks (useTrackingNumber, useCallAction, useScrollDepthTracking, ...)
types/          Shared TypeScript types
public/         Static assets
```

## Installation

See `INSTALL.md`.

## Environment Variables

See `CONFIGURATION.md` for the full list. At minimum:

```
NEXT_PUBLIC_SITE_URL=https://www.insuredirect.com
NEXT_PUBLIC_GA4_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CLARITY_ID=
```

## Commands

```bash
npm install       # install dependencies
npm run dev        # start local dev server
npm run build       # production build (also runs next-sitemap via postbuild)
npm run start       # serve the production build
npm run lint        # lint
```

## Deployment

See `DEPLOYMENT.md`.

## Important Note On This Build

This codebase was generated in an offline sandbox without registry access, so `npm install` and a full
`next build` could not be executed here to verify compilation end-to-end. Before deploying:

1. Run `npm install` and `npm run build` locally / in CI and fix any type errors that surface.
2. Replace placeholder assets in `public/images/` (logo files, OG images, author avatars, blog cover
   images) — these are referenced by config/content but not included as binary files.
3. Replace placeholder analytics/campaign IDs in `config/tracking.config.ts`, `config/campaign.config.ts`,
   and `config/analytics.config.ts` with real values.
4. Review `next.config.js`'s Content-Security-Policy — it is a working starting point, not a final policy.

# Changelog

## Part 1 — Architecture (planning only, no code)
Folder structure, information/UX/component/config architecture, DID and SEO design, blog system plan,
legal page plan, performance/accessibility/scalability plan, development roadmap.

## Part 2 — Foundation & Core Build
Project scaffold, Tailwind design tokens, full config layer (brand, services, navigation, seo, tracking,
business hours, FAQ, testimonials, reviews, campaign, states, features), lib layer (utils, DID resolver,
analytics stub, middleware, SEO metadata/JSON-LD builders, Zod schemas, MDX blog content layer), UI
primitive library, shared components (CallNowButton, SectionContainer/Heading, Logo, JsonLd,
AnimatedInView, CoverageArc), layout components (Navbar, Footer, Sticky Call Bar, Floating Call Button,
Breadcrumbs), marketing section components (Hero, ServiceCardGrid, TrustSection, HowItWorks, Testimonials,
FAQ section, CTASection, EducationalSection, PartnerLogos, FeatureGrid), blog components (ArticleCard/Grid,
RelatedArticles, AuthorBio, CategoryPill, TableOfContents), root layout, homepage, shared
ServicePageTemplate + all 4 vertical pages, Quote pages, all 4 lead-gen forms with Zod validation, `/api/lead`
and `/api/contact` routes.

## Part 3 — Enterprise Campaign System
Full `CampaignConfig` schema and two example campaigns, campaign/geo/CTA resolvers, holiday-aware business
hours resolver, `CampaignProvider`/`useActiveCampaign` context, `useCallAction` hook (context-first,
cookie-fallback so header/footer/sticky-bar pick up campaign DIDs outside the campaign route subtree), the
canonical `CallButton` component (redirect/tel/disabled), campaign landing page (`/campaign/[slug]`),
expanded analytics event taxonomy wired into Accordion/Navbar/Footer/scroll tracking, cookie consent
architecture (categories, context, banner, consent-gated `AnalyticsScripts`), legal content MDX.

## Part 4 — SEO & Content Platform
Blog article page with Article JSON-LD and automatic blog↔service cross-linking, blog search
(server+client split), state page and city page shared templates + dynamic routes for all 4 verticals,
`app/robots.ts`, `app/sitemap.ts` (auto-enumerates every vertical × state × city + every blog post),
`app/manifest.ts`, `browserconfig.xml`, RSS feed route, human-readable sitemap page.

## Part 5 — Trust & Compliance
About, Contact, all 5 legal pages (via a shared `LegalPageLayout` + per-slug MDX content), human sitemap
page, 404 (`not-found.tsx`), and error boundary (`error.tsx` / "500" page) with Return Home / Browse Guides
recovery paths.

## Part 6 — Production Optimization
Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, a starter
Content-Security-Policy) via `next.config.js`, ISR `revalidate` on all state/city pages, `loading.tsx`
streaming skeletons for `/blog` and `/insurance`, dynamic (`ssr:false`) import of the below-the-fold Cookie
Consent Banner to keep it off the critical bundle.

## Part 7 — Documentation & Deployment Readiness
`README.md`, `INSTALL.md`, `DEPLOYMENT.md`, `CONFIGURATION.md`, `SEO.md`, `CAMPAIGN_GUIDE.md`,
`MAINTENANCE.md`, this `CHANGELOG.md`.

## Known Gaps (see README "Important Note On This Build")

- No `npm install` / `next build` was run in this environment (no package registry access), so the build
  has not been compiled or type-checked end-to-end.
- Binary image assets (logo files, OG images, author avatars, blog cover images) are referenced by
  config/content but not included — the project expects them to be added before deployment.
- Real vendor credentials (call-tracking provider, GA4/GTM/Ads/Meta Pixel/Clarity IDs) are placeholders and
  must be replaced.

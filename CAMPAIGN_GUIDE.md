# Campaign Guide

InsureDirect's campaign system is designed so that **launching, updating, or pausing an advertiser campaign
requires editing exactly one file: `config/campaign.config.ts`.** No component, route, or layout file needs
to change.

## How campaign resolution works

1. A visitor lands on `/campaign/<slug>` (from a Google Ads final URL, for example).
2. `app/campaign/[campaignSlug]/layout.tsx` looks up the campaign by slug via `getCampaignBySlug()` and
   puts it into React context via `CampaignProvider`.
3. Every `CallButton` on that page — and, via the `id_src` cookie set by `middleware.ts` on first touch,
   every `CallButton` in the Navbar/Footer/Sticky Call Bar elsewhere on the site during that session — reads
   the campaign through `useCallAction()` and resolves what clicking it should do via
   `lib/campaign/cta-resolver.ts`:
   - If `campaign.trackingUrl` is set → the button becomes a redirect link.
   - Else if a DID (`campaign.didPhone`, falling back to the global default) is available → the button
     becomes a `tel:` link.
   - Else → the button renders a disabled, explained state (never a dead click).

## Creating a new campaign

Add a new object to the `campaigns` array in `config/campaign.config.ts`. Required fields are typed in
`types/campaign.d.ts` — TypeScript will flag anything missing. At minimum:

```ts
{
  campaignId: "cmp_unique_id",
  campaignName: "Human-readable name for your own reference",
  slug: "url-safe-slug",        // becomes /campaign/url-safe-slug
  status: "active",
  advertiserName: "...",
  vertical: "auto",              // one of the 4 supported verticals
  offerName: "...",
  geo: { scope: "nationwide" },  // or "state" / "city" with stateSlug/citySlug
  language: "en",
  holidaySchedule: [],
  cta: { primary: {...}, secondary: {...}, afterHoursLabel: "..." },
  didPhone: "(844) 555-0000",
  meta: { title: "...", description: "..." },
  hero: { title: "...", subtitle: "...", ctaLabel: "..." },
  faqs: [...],
  testimonials: [...],
  trustBadges: [...],
  schemaData: {...},
  openGraph: {...},
  twitterCard: {...},
  analytics: {...},
}
```

## Updating a DID

Change `didPhone` on the campaign object. Every CTA that resolves to this campaign (directly or via the
`id_src` cookie) picks up the new number immediately — no component touches a phone number literal.

## Switching to a Tracking URL

Set `trackingUrl` on the campaign object to your call-tracking vendor's redirect URL (e.g. a CallRail
tracking number swap URL, or an Invoca session URL). Once set, it takes precedence over `didPhone`
automatically — every CTA becomes a redirect instead of a `tel:` link, with zero code changes.

## Changing Hero Copy

Edit `hero.title`, `hero.subtitle`, and `hero.ctaLabel` on the campaign object. These render on the
campaign landing page's hero section directly from config.

## Changing Meta Tags

Edit `meta.title` / `meta.description` for the page `<title>`/meta description, and `openGraph` /
`twitterCard` for social preview cards — all three are independent so you can tune each surface separately.

## Activating / Deactivating a Campaign

Set `status` to `"active"` to make the campaign live (its route resolves, and it's included in
`generateStaticParams`). Set it to `"paused"`, `"draft"`, or `"ended"` to take it offline — the
`/campaign/[slug]` route returns a 404 for non-active campaigns, and `resolveActiveCampaign()` /
`getActiveCampaigns()` skip it everywhere else automatically.

## Business Hours & Holidays per Campaign

- `hoursOverride` — an array in the same shape as `config/business-hours.config.ts`'s weekly schedule;
  omit to inherit the site-wide hours.
- `holidaySchedule` — an array of `{ date, label, open, close }` entries (use `open: null, close: null` for
  a full-day closure). When "closed" or outside hours, the primary CTA swaps to `cta.afterHoursLabel`
  (typically "Request a Callback", wired to `components/forms/call-back-form.tsx`).

## Geo Targeting

Set `geo.scope` to `"nationwide"`, `"state"` (with `stateSlug` matching an entry in
`config/states.config.ts`), or `"city"` (with `stateSlug` + `citySlug`). `lib/campaign/geo-resolver.ts`
resolves this into display-ready copy and the matching state's Department of Insurance link automatically.

## Analytics per Campaign

Set any of `analytics.ga4MeasurementId`, `gtmContainerId`, `googleAdsConversionId` +
`googleAdsConversionLabel`, `metaPixelId`, `microsoftClarityId`, or `callTrackingProviderId` on the
campaign. `lib/analytics/providers.ts`'s `resolveAnalyticsIds()` merges these over the global defaults in
`config/analytics.config.ts`, so a campaign only needs to specify the IDs that differ from the site default.

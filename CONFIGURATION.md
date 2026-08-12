# Configuration Guide

Every file below lives in `config/` and is imported via the barrel export `config/index.ts` where
convenient. Editing these files is the primary way to operate the site — component code should not need to
change for any of the changes described here.

## Brand — `config/brand.config.ts`

`brandName`, `brandLegalName`, `brandTagline`, `brandLogo` (light/dark/icon paths), `brandEmail`,
`brandPhone` (the global fallback DID), `brandAddress`, `socialLinks`, and `licensing` (NPN number, licensed
states). Changing `brandName` here updates the logo alt text, footer legal copy, page titles, and
`Organization` JSON-LD site-wide — no other file needs to change.

## Services — `config/services.config.ts`

The 4 supported verticals (`auto`, `health`, `home`, `final-expense`). Each entry drives its vertical hub
page, quote flow default, blog category cross-linking, and all copy on the service page template
(`components/services/service-page-template.tsx`). Do not add a 5th vertical without also updating
`types/service.ts`'s `ServiceSlug` union and `types/lead.d.ts`.

## Navigation — `config/navigation.config.ts`

`primaryNav`, `insuranceMenu` (derived from `services.config.ts`), and `footerColumns` are all array-driven
— add/remove a link by editing the array, not the Navbar/Footer components.

## SEO — `config/seo.config.ts`

Site-wide defaults: `siteUrl`, title template, default description, default OG image, Twitter handle,
locale. Page-specific overrides are passed into `buildMetadata()` (see `lib/seo/metadata.ts`) at the route
level.

## Tracking / DID — `config/tracking.config.ts`

The legacy/global DID pool (`defaultDID`, `campaignDIDs`, `sourceDIDs`, `serviceDIDs`) used by
`lib/tracking/did-resolver.ts` for non-campaign traffic. Campaign-specific DIDs and tracking URLs now live
directly on each campaign object in `campaign.config.ts` and take precedence — see `CAMPAIGN_GUIDE.md`.

## Business Hours — `config/business-hours.config.ts`

Weekly open/close schedule plus IANA timezone, used by `lib/hours/business-hours-resolver.ts` for the
"open now" indicator and after-hours CTA swap. Campaigns can override this per-campaign via
`CampaignConfig.hoursOverride`.

## FAQ — `config/faq.config.ts`

Flat, topic-tagged array (`general`, `auto`, `health`, `home`, `final-expense`). Pages filter by topic via
`getFaqsByTopic()`, so one FAQ can appear on multiple pages without duplication.

## Testimonials / Reviews — `config/testimonials.config.ts`, `config/reviews.config.ts`

Testimonials are service-tagged for filtering on service pages. `reviews.config.ts`'s `aggregateRating`
feeds the `AggregateRating` JSON-LD on the Organization schema — keep this honest and update it from real
review data before launch.

## Campaigns — `config/campaign.config.ts`

See `CAMPAIGN_GUIDE.md` — this is the most frequently edited file in day-to-day operation.

## States — `config/states.config.ts`

Only states with genuinely unique content (a DOI link, served cities, and/or state-specific legal notes)
should be added here — this list directly controls which `/insurance/[vertical]/[state]` and
`/insurance/[vertical]/[state]/[city]` pages get statically generated, and thin entries risk duplicate/thin
content SEO penalties.

## Features — `config/features.config.ts`

Currently one toggle: `mobileCallCta` (`"bar"` or `"button"`) — controls whether the mobile Sticky Call Bar
or the Floating Call Button renders. Only one should be enabled at a time.

## Consent — `config/consent.config.ts`

Defines the three consent categories (`necessary`, `analytics`, `marketing`) shown in the cookie banner.

## Analytics — `config/analytics.config.ts`

Global (non-campaign) analytics IDs, sourced from environment variables. See `CAMPAIGN_GUIDE.md` for how
campaign-level IDs override these.

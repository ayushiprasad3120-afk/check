import type { ServiceSlug } from "./service";

export type CampaignStatus = "active" | "paused" | "draft" | "ended";
export type GeoScope = "nationwide" | "state" | "city";
export type CampaignLanguage = "en" | "es";

export interface CampaignHours {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  open: string | null;
  close: string | null;
}

export interface HolidayOverride {
  /** ISO date, e.g. "2026-12-25" */
  date: string;
  label: string;
  /** null/null = closed all day on this date */
  open: string | null;
  close: string | null;
}

export interface CampaignCTA {
  label: string;
  style: "primary" | "secondary" | "emerald" | "ghost" | "outlineLight";
}

export interface CampaignFaqItem {
  question: string;
  answer: string;
}

export interface CampaignTestimonial {
  name: string;
  location: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface CampaignTrustBadge {
  label: string;
  icon: "shield" | "badge-check" | "star" | "lock";
}

export interface CampaignSchemaData {
  /** Additional schema.org fields merged into the base Organization/LocalBusiness JSON-LD */
  priceRange?: string;
  areaServed?: string;
}

export interface CampaignOpenGraph {
  title: string;
  description: string;
  image: string;
}

export interface CampaignTwitterCard {
  title: string;
  description: string;
  image: string;
}

export interface CampaignAnalyticsIds {
  ga4MeasurementId?: string;
  gtmContainerId?: string;
  googleAdsConversionId?: string;
  googleAdsConversionLabel?: string;
  metaPixelId?: string;
  microsoftClarityId?: string;
  callTrackingProviderId?: string;
}

/**
 * The full per-campaign configuration record. One object here fully
 * determines everything a `/campaign/[slug]` route renders — phone
 * number, CTAs, hero copy, meta tags, structured data, FAQs,
 * testimonials, trust badges, and analytics wiring. Switching which
 * campaign is "active" for a given traffic source is a config change
 * only; no component is ever edited to run a new campaign.
 */
export interface CampaignConfig {
  campaignId: string;
  campaignName: string;
  slug: string;
  status: CampaignStatus;
  advertiserName: string;
  vertical: ServiceSlug;
  offerName: string;

  geo: {
    scope: GeoScope;
    stateSlug?: string;
    citySlug?: string;
  };

  language: CampaignLanguage;

  /** Overrides the global business-hours config for this campaign only. Omit to inherit global hours. */
  hoursOverride?: CampaignHours[];
  holidaySchedule: HolidayOverride[];

  cta: {
    primary: CampaignCTA;
    secondary: CampaignCTA;
    afterHoursLabel: string;
  };

  /** Call routing: if trackingUrl is set, every CTA redirects there instead of dialing didPhone. */
  didPhone: string;
  trackingUrl?: string;

  meta: {
    title: string;
    description: string;
  };

  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
  };

  faqs: CampaignFaqItem[];
  testimonials: CampaignTestimonial[];
  trustBadges: CampaignTrustBadge[];
  schemaData: CampaignSchemaData;
  openGraph: CampaignOpenGraph;
  twitterCard: CampaignTwitterCard;
  analytics: CampaignAnalyticsIds;
}

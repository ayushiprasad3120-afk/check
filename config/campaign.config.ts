import type { CampaignConfig } from "@/types/campaign";

/**
 * CAMPAIGN CONTROL PLANE
 * ----------------------
 * This is the ONLY file that needs to change to run, update, or switch
 * an advertiser campaign. Every `/campaign/[slug]` route, every phone
 * number on that route, every meta tag, every FAQ/testimonial/trust
 * badge, and every analytics ID it fires is derived from the matching
 * object below via getCampaignBySlug() / resolveActiveCampaign().
 *
 * To launch a new campaign: add a new object to this array.
 * To pause one: flip `status` to "paused" — resolveActiveCampaign()
 * will skip it and fall back to organic/default site behavior.
 * Nothing outside this file (and campaign.d.ts, which defines the
 * shape) should ever need to change.
 */
export const campaigns: CampaignConfig[] = [
  {
    campaignId: "cmp_auto_tx_001",
    campaignName: "Google Ads — Auto Insurance — Texas",
    slug: "google-ads-auto-tx",
    status: "active",
    advertiserName: "InsureDirect",
    vertical: "auto",
    offerName: "Compare Texas Auto Coverage",

    geo: { scope: "state", stateSlug: "texas" },
    language: "en",

    holidaySchedule: [
      { date: "2026-12-25", label: "Christmas Day", open: null, close: null },
      { date: "2026-01-01", label: "New Year's Day", open: null, close: null },
      { date: "2026-11-26", label: "Thanksgiving", open: "10:00", close: "14:00" },
    ],

    cta: {
      primary: { label: "Compare Coverage Now", style: "emerald" },
      secondary: { label: "Call a Licensed Agent", style: "outlineLight" },
      afterHoursLabel: "Request a Callback",
    },

    didPhone: "(844) 555-0191",
    trackingUrl: undefined,

    meta: {
      title: "Compare Auto Insurance Coverage in Texas | InsureDirect",
      description:
        "See auto insurance coverage options built around Texas requirements and connect with a licensed agent in minutes.",
    },

    hero: {
      title: "Compare Auto Insurance Coverage in Texas",
      subtitle: "Talk to a licensed agent about coverage options built around Texas requirements.",
      ctaLabel: "Compare Coverage Now",
    },

    faqs: [
      {
        question: "What auto insurance is required in Texas?",
        answer:
          "Texas requires drivers to carry minimum liability coverage. A licensed agent can walk you through current state minimums and what additional coverage might make sense for your situation.",
      },
      {
        question: "How fast can I compare options?",
        answer:
          "Most people share basic information in a few minutes, then a licensed Texas agent follows up to walk through specific coverage options.",
      },
    ],

    testimonials: [
      {
        name: "Devon R.",
        location: "Austin, TX",
        quote:
          "I compared a few coverage options in about ten minutes and had a licensed agent on the phone the same afternoon.",
        rating: 5,
      },
    ],

    trustBadges: [
      { label: "Licensed in Texas", icon: "shield" },
      { label: "No-pressure comparisons", icon: "badge-check" },
    ],

    schemaData: { priceRange: "$$", areaServed: "Texas" },

    openGraph: {
      title: "Compare Auto Insurance Coverage in Texas",
      description: "Talk to a licensed agent about coverage options built around Texas requirements.",
      image: "/images/og-campaign-auto-tx.jpg",
    },

    twitterCard: {
      title: "Compare Auto Insurance Coverage in Texas",
      description: "Talk to a licensed agent about coverage options built around Texas requirements.",
      image: "/images/og-campaign-auto-tx.jpg",
    },

    analytics: {
      ga4MeasurementId: "G-XXXXXXX001",
      gtmContainerId: "GTM-XXXX001",
      googleAdsConversionId: "AW-XXXXXXXXX",
      googleAdsConversionLabel: "AbCdEfGhIj001",
      metaPixelId: undefined,
      microsoftClarityId: undefined,
      callTrackingProviderId: "ct_provider_001",
    },
  },

  {
    campaignId: "cmp_health_nat_001",
    campaignName: "Google Ads — ACA Health — Nationwide",
    slug: "google-ads-health-national",
    status: "active",
    advertiserName: "InsureDirect",
    vertical: "health",
    offerName: "Understand ACA Coverage Options",

    geo: { scope: "nationwide" },
    language: "en",

    holidaySchedule: [
      { date: "2026-12-25", label: "Christmas Day", open: null, close: null },
      { date: "2026-01-01", label: "New Year's Day", open: null, close: null },
    ],

    cta: {
      primary: { label: "Compare Health Plans", style: "emerald" },
      secondary: { label: "Call a Licensed Agent", style: "outlineLight" },
      afterHoursLabel: "Request a Callback",
    },

    // Example of the tracking-URL branch: when set, every CTA redirects
    // here instead of dialing didPhone — see lib/campaign/cta-resolver.ts.
    didPhone: "(844) 555-0192",
    trackingUrl: undefined,

    meta: {
      title: "Understand Your ACA Health Coverage Options | InsureDirect",
      description:
        "See how metal tiers and premium tax credits could affect your monthly cost, and connect with a licensed health insurance agent.",
    },

    hero: {
      title: "Understand Your ACA Health Coverage Options",
      subtitle: "See how metal tiers and premium tax credits could affect your monthly cost.",
      ctaLabel: "Compare Health Plans",
    },

    faqs: [
      {
        question: "Am I eligible for a premium tax credit?",
        answer:
          "Eligibility depends on household income and size. A licensed agent can help you understand whether you may qualify based on your specific situation.",
      },
    ],

    testimonials: [
      {
        name: "Samuel A.",
        location: "Newark, NJ",
        quote: "The explanation of metal tiers made the decision easy to understand.",
        rating: 4,
      },
    ],

    trustBadges: [
      { label: "Not government-affiliated", icon: "badge-check" },
      { label: "Licensed agents nationwide", icon: "shield" },
    ],

    schemaData: { priceRange: "$$", areaServed: "United States" },

    openGraph: {
      title: "Understand Your ACA Health Coverage Options",
      description: "See how metal tiers and premium tax credits could affect your monthly cost.",
      image: "/images/og-campaign-health-national.jpg",
    },

    twitterCard: {
      title: "Understand Your ACA Health Coverage Options",
      description: "See how metal tiers and premium tax credits could affect your monthly cost.",
      image: "/images/og-campaign-health-national.jpg",
    },

    analytics: {
      ga4MeasurementId: "G-XXXXXXX002",
      gtmContainerId: "GTM-XXXX002",
      googleAdsConversionId: "AW-XXXXXXXXX",
      googleAdsConversionLabel: "AbCdEfGhIj002",
      metaPixelId: "1234567890002",
      microsoftClarityId: "clarity002",
      callTrackingProviderId: "ct_provider_002",
    },
  },
];

export function getCampaignBySlug(slug: string): CampaignConfig | undefined {
  return campaigns.find((c) => c.slug === slug);
}

export function getActiveCampaigns(): CampaignConfig[] {
  return campaigns.filter((c) => c.status === "active");
}

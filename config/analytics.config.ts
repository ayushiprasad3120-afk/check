/**
 * Global (non-campaign) analytics IDs. Campaign-specific IDs live on
 * each CampaignConfig (see types/campaign.d.ts `analytics`) and take
 * precedence over these when a campaign is active — see
 * lib/analytics/providers.ts `resolveAnalyticsIds()`.
 */
export const analyticsConfig = {
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  gtmContainerId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  microsoftClarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "",
  /** Which vendor lib/tracking/did-resolver.ts should ultimately call once a real integration is added. */
  callTrackingProvider: "none" as "none" | "callrail" | "twilio" | "invoca",
};

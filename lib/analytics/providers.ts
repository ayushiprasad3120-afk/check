import { analyticsConfig } from "@/config/analytics.config";
import type { CampaignAnalyticsIds } from "@/types/campaign";

/**
 * Merges global analytics IDs with a campaign's overrides (campaign
 * values win when present). This is the single place that decides
 * which GA4/GTM/Google Ads/Meta Pixel/Clarity IDs are "active" for the
 * current page — consumed by components/consent/analytics-scripts.tsx,
 * which is the only place that actually injects vendor <script> tags,
 * and only after consent has been granted for the relevant category.
 */
export function resolveAnalyticsIds(campaignIds?: CampaignAnalyticsIds) {
  return {
    ga4MeasurementId: campaignIds?.ga4MeasurementId || analyticsConfig.ga4MeasurementId || undefined,
    gtmContainerId: campaignIds?.gtmContainerId || analyticsConfig.gtmContainerId || undefined,
    googleAdsConversionId:
      campaignIds?.googleAdsConversionId || analyticsConfig.googleAdsConversionId || undefined,
    googleAdsConversionLabel: campaignIds?.googleAdsConversionLabel || undefined,
    metaPixelId: campaignIds?.metaPixelId || analyticsConfig.metaPixelId || undefined,
    microsoftClarityId: campaignIds?.microsoftClarityId || analyticsConfig.microsoftClarityId || undefined,
    callTrackingProviderId: campaignIds?.callTrackingProviderId,
  };
}

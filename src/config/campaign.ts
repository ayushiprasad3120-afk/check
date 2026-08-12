/**
 * ============================================================================
 * CAMPAIGN CONFIGURATION
 * ============================================================================
 * This is the SINGLE SOURCE OF TRUTH for the phone number, advertiser name,
 * privacy contact, and pay-per-call tracking parameters used across the site.
 *
 * Every component that displays a phone number or the advertiser name reads
 * from this file. Do NOT hard-code phone numbers, emails, or the advertiser
 * name anywhere else in the codebase.
 *
 * REPLACE THE PLACEHOLDER VALUES BELOW BEFORE LAUNCH.
 * ============================================================================
 */

/** Display-formatted phone number shown on buttons and text. */
export const CALL_NUMBER = "+1-XXX-XXX-XXXX";

/** tel: link value — digits only, no formatting, no spaces. */
export const CALL_NUMBER_TEL = "tel:+1XXXXXXXXXX";

/**
 * If a dedicated call-tracking number (DNI - Dynamic Number Insertion) is
 * used for this campaign, set it here. Falls back to CALL_NUMBER when empty.
 */
export const CALL_TRACKING_NUMBER = "";

/** The legal/marketing name shown throughout the site. */
export const ADVERTISER_NAME = "InsureDirect";

/** Placeholder — replace with the reviewed privacy contact email before launch. */
export const PRIVACY_EMAIL = "privacy@insuredirect.example";

/** Placeholder — replace with the reviewed general contact email before launch. */
export const CONTACT_EMAIL = "support@insuredirect.example";

/** Whether to show a "Call NUMBER from your phone" confirmation on desktop. */
export const ENABLE_CALL_CONFIRMATION = false;

/** Copyright year shown in the footer. */
export const COPYRIGHT_YEAR = 2026;

/**
 * Pay-per-call / affiliate tracking configuration.
 * These values are populated at runtime from URL parameters (see lib/tracking.ts)
 * and are NOT secrets — no API keys or credentials belong here.
 */
export interface CampaignConfig {
  callNumber: string;
  campaignId: string;
  source: string;
  subId: string;
  clickId: string;
}

export const CAMPAIGN_CONFIG: CampaignConfig = {
  callNumber: CALL_TRACKING_NUMBER || CALL_NUMBER,
  campaignId: "AUTO-2026",
  source: "",
  subId: "",
  clickId: "",
};

/** URL query parameters captured for attribution and passed along with lead submissions. */
export const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "subid",
  "clickid",
  "campaign_id",
] as const;

/**
 * Backend/API endpoint for lead submission. Left empty by default — wire this
 * up to a WordPress REST API route, webhook, or CRM endpoint at deploy time.
 * See README.md for integration instructions.
 */
export const LEAD_SUBMIT_ENDPOINT = import.meta.env.VITE_LEAD_SUBMIT_ENDPOINT || "";

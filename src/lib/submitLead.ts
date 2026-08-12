import { LEAD_SUBMIT_ENDPOINT, CAMPAIGN_CONFIG } from "../config/campaign";
import { getStoredTrackingParams } from "./tracking";
import type { QuoteFormData } from "./validation";

export type SubmitLeadResult =
  | { status: "success"; leadId?: string }
  | { status: "error"; message: string };

/**
 * Abstraction over lead submission so the transport (WordPress REST API,
 * webhook, CRM, lead-buyer endpoint, call-tracking platform) can be swapped
 * in later without touching the form component.
 *
 * When LEAD_SUBMIT_ENDPOINT is not configured, this simulates a network
 * round-trip so the UI states (loading/success/error) can be exercised in
 * development.
 */
export async function submitLead(formData: QuoteFormData): Promise<SubmitLeadResult> {
  const payload = {
    ...formData,
    tracking: getStoredTrackingParams(),
    campaignId: CAMPAIGN_CONFIG.campaignId,
    submittedAt: new Date().toISOString(),
  };

  if (!LEAD_SUBMIT_ENDPOINT) {
    // No backend configured yet — simulate latency and succeed so the
    // frontend flow can be reviewed end to end before integration.
    await new Promise((resolve) => setTimeout(resolve, 900));
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("[submitLead] No LEAD_SUBMIT_ENDPOINT configured. Payload:", payload);
    }
    return { status: "success" };
  }

  try {
    const response = await fetch(LEAD_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "We couldn't submit your information right now. Please try again or call us.",
      };
    }

    const data = await response.json().catch(() => ({}));
    return { status: "success", leadId: data?.leadId };
  } catch {
    return {
      status: "error",
      message: "A connection error occurred. Please check your connection and try again.",
    };
  }
}

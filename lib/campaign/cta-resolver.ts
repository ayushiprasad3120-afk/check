import { resolveDID } from "@/lib/tracking/did-resolver";
import { toTelHref } from "@/lib/utils/format";
import type { CampaignConfig } from "@/types/campaign";
import type { DIDResolutionParams } from "@/types/tracking";

export type CallActionType = "redirect" | "tel" | "disabled";

export interface CallAction {
  type: CallActionType;
  href: string | null;
  display: string;
}

/**
 * Single source of truth for what a "Call Now" / primary CTA click
 * actually does, per the Part 3 spec:
 *
 *   Tracking URL available on the active campaign?  -> redirect there
 *   Otherwise, DID (campaign or global) available?   -> tel: link
 *   Otherwise                                         -> disabled
 *
 * This is the ONLY place that branching logic lives — components
 * (CallButton — the only call CTA component now) just render whatever this returns.
 */
export function resolveCallAction(params: {
  campaign?: CampaignConfig | null;
  didParams?: DIDResolutionParams;
}): CallAction {
  const { campaign, didParams } = params;

  if (campaign?.trackingUrl) {
    return { type: "redirect", href: campaign.trackingUrl, display: "Connect Now" };
  }

  const phone = campaign?.didPhone ?? resolveDID(didParams);

  if (phone) {
    return { type: "tel", href: toTelHref(phone), display: phone };
  }

  return { type: "disabled", href: null, display: "Unavailable" };
}

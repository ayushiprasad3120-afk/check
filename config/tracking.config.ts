import type { TrackingConfig } from "@/types/tracking";
import { brand } from "./brand.config";

/**
 * DID / call-tracking pool, per the architecture defined in Part 1.
 * Resolution precedence (see lib/tracking/did-resolver.ts):
 *   campaignDIDs -> sourceDIDs -> serviceDIDs -> defaultDID
 *
 * Values below are placeholders wired to brand.brandPhone until a real
 * call-tracking vendor (e.g. CallRail/Twilio/Invoca) is connected —
 * swapping the vendor only requires editing did-resolver.ts, not this file
 * or any component that renders a phone number.
 */
export const tracking: TrackingConfig = {
  defaultDID: brand.brandPhone,

  campaignDIDs: {
    "google-ads-auto-tx": "(844) 555-0191",
    "google-ads-health-national": "(844) 555-0192",
  },

  sourceDIDs: {
    "google-ads": "(844) 555-0190",
    organic: brand.brandPhone,
    bing: "(844) 555-0193",
  },

  serviceDIDs: {
    auto: undefined,
    health: undefined,
    home: undefined,
    "final-expense": undefined,
  },
};

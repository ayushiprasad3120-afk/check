import { features } from "@/config/features.config";
import { StickyCallBar } from "./sticky-call-bar";
import { FloatingCallButton } from "./floating-call-button";

/** Renders exactly one mobile call CTA per config/features.config.ts. */
export function MobileCallCta() {
  return features.mobileCallCta === "bar" ? <StickyCallBar /> : <FloatingCallButton />;
}

"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { useCallAction } from "@/hooks/use-call-action";
import { trackEvent } from "@/lib/tracking/analytics";

/**
 * Alternate mobile call CTA to StickyCallBar — toggled via
 * config/features.config.ts (`mobileCallCta`). Only one should render at
 * a time; see mobile-call-cta.tsx for the switch.
 *
 * Resolves through the same useCallAction()/resolveCallAction() logic
 * as the shared CallButton component (redirect / tel / disabled) rather
 * than a bespoke DID lookup — kept as its own component only because a
 * circular icon-only floating button doesn't fit CallButton's shape.
 */
export function FloatingCallButton() {
  const action = useCallAction();

  if (action.type === "disabled") {
    return null; // no dead floating button — StickyCallBar's disabled state already covers this
  }

  const isRedirect = action.type === "redirect";

  return (
    <a
      href={action.href ?? "#"}
      target={isRedirect ? "_blank" : undefined}
      rel={isRedirect ? "noopener noreferrer" : undefined}
      onClick={() =>
        trackEvent({
          name: "call_click",
          source: "floating-call-button",
          phone: action.type === "tel" ? action.display : "redirect",
        })
      }
      aria-label={isRedirect ? "Connect now" : `Call ${action.display}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-lifted lg:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {isRedirect ? (
        <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Phone className="h-6 w-6" aria-hidden="true" />
      )}
    </a>
  );
}

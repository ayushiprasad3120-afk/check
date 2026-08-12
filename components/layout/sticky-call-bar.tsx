"use client";

import { Phone, ArrowUpRight } from "lucide-react";
import { useCallAction } from "@/hooks/use-call-action";
import { trackEvent } from "@/lib/tracking/analytics";
import { businessHours } from "@/config/business-hours.config";

function isOpenNow(): boolean {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: businessHours.timezone,
  }) as "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
  const todayHours = businessHours.hours.find((h) => h.day === day);
  if (!todayHours?.open || !todayHours.close) return false;

  const currentTime = now.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    timeZone: businessHours.timezone,
  });

  return currentTime >= todayHours.open && currentTime <= todayHours.close;
}

/**
 * Mobile-only, persistent bottom bar for phone-first, older, and
 * on-the-go users. Its height is reserved at the layout level (see
 * root layout's bottom padding) so it never causes layout shift on mount.
 *
 * Resolves through the same useCallAction()/resolveCallAction() logic
 * as the shared CallButton component — so it correctly redirects to a
 * campaign's tracking URL, dials the right DID, or shows a disabled
 * state, exactly like every other call CTA on the site. It renders its
 * own markup (rather than <CallButton> directly) only because its
 * pill-with-status-dot layout doesn't fit CallButton's button shape.
 */
export function StickyCallBar() {
  const action = useCallAction();
  const open = isOpenNow();

  if (action.type === "disabled") {
    return (
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 px-4 py-3 text-center text-xs text-ink-muted backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        Phone support is temporarily unavailable — use the quote form instead.
      </div>
    );
  }

  const isRedirect = action.type === "redirect";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <span
            className={`h-2 w-2 rounded-full ${open ? "bg-success" : "bg-ink-faint"}`}
            aria-hidden="true"
          />
          {open ? "Licensed agents available now" : "Call anytime — leave a message"}
        </div>
        <a
          href={action.href ?? "#"}
          target={isRedirect ? "_blank" : undefined}
          rel={isRedirect ? "noopener noreferrer" : undefined}
          onClick={() =>
            trackEvent({
              name: "call_click",
              source: "sticky-call-bar",
              phone: action.type === "tel" ? action.display : "redirect",
            })
          }
          className="flex min-h-[44px] max-w-[220px] flex-1 items-center justify-center gap-2 rounded-full bg-navy-950 px-5 text-sm font-semibold text-white"
        >
          {isRedirect ? (
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Phone className="h-4 w-4" aria-hidden="true" />
          )}
          {action.display}
        </a>
      </div>
    </div>
  );
}

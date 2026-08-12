"use client";

import { Phone, PhoneOff, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallAction } from "@/hooks/use-call-action";
import { trackEvent } from "@/lib/tracking/analytics";
import type { CallSource } from "@/types/tracking";

interface CallButtonProps {
  source: CallSource;
  service?: string;
  campaignSlug?: string;
  variant?: "primary" | "secondary" | "emerald" | "ghost" | "outlineLight";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Force a static label instead of the resolved phone number (e.g. for redirect-type CTAs) */
  label?: string;
}

/**
 * THE single reusable call CTA for the entire site. Every surface that
 * needs a "Call Now" style action — Navbar, Hero, Sticky Call Bar,
 * Floating Button, Contact page, FAQ, service pages, CTA banners,
 * campaign pages — renders this component and nothing else.
 *
 * Behavior is fully automatic:
 *   1. Active campaign has a trackingUrl?  -> renders as a redirect link
 *   2. Otherwise a DID is available (campaign or global)? -> renders tel:
 *   3. Otherwise -> renders a disabled, explained state (never a dead click)
 *
 * No caller ever decides which branch to take — that logic lives only
 * in lib/campaign/cta-resolver.ts.
 */
export function CallButton({
  source,
  service,
  campaignSlug,
  variant = "primary",
  size = "md",
  className,
  label,
}: CallButtonProps) {
  const action = useCallAction({ campaignSlug, service });

  if (action.type === "disabled") {
    return (
      <Button
        variant="secondary"
        size={size}
        icon={<PhoneOff className="h-4 w-4" aria-hidden="true" />}
        iconPosition="left"
        className={className}
        disabled
        aria-disabled="true"
        title="Call is temporarily unavailable — try the quote form instead"
      >
        Call Unavailable
      </Button>
    );
  }

  const isRedirect = action.type === "redirect";
  const href = action.href ?? "#";

  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      target={isRedirect ? "_blank" : undefined}
      rel={isRedirect ? "noopener noreferrer" : undefined}
      icon={
        isRedirect ? (
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Phone className="h-4 w-4" aria-hidden="true" />
        )
      }
      iconPosition="left"
      className={className}
      onClick={() =>
        trackEvent({
          name: "call_click",
          source,
          phone: action.type === "tel" ? action.display : "redirect",
        })
      }
    >
      {label ?? action.display}
    </Button>
  );
}

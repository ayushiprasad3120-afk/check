"use client";

import { useCallAction } from "@/hooks/use-call-action";
import { trackEvent } from "@/lib/tracking/analytics";

/**
 * The footer's fine-print phone number (next to the legal/licensing
 * copy) previously read `brand.brandPhone` directly — a static number
 * that never reflected an active campaign's DID or tracking URL. That
 * was the one remaining phone-number surface on the site bypassing the
 * shared resolution logic. Extracted into its own tiny client
 * component (rather than making the whole Footer a Client Component)
 * so Footer stays a Server Component for everything else it renders.
 */
export function FooterPhoneLink({ className }: { className?: string }) {
  const action = useCallAction();
  const isRedirect = action.type === "redirect";

  if (action.type === "disabled") {
    return <span className={className}>Phone temporarily unavailable</span>;
  }

  return (
    <a
      href={action.href ?? "#"}
      target={isRedirect ? "_blank" : undefined}
      rel={isRedirect ? "noopener noreferrer" : undefined}
      onClick={() =>
        trackEvent({
          name: "call_click",
          source: "footer",
          phone: action.type === "tel" ? action.display : "redirect",
        })
      }
      className={className}
    >
      {action.display}
    </a>
  );
}

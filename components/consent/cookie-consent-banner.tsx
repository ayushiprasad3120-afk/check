"use client";

import { useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useConsent } from "@/lib/consent/consent-context";
import { consentCategories } from "@/config/consent.config";

/**
 * Architecture-level cookie consent banner: three categories
 * (necessary/analytics/marketing), granular per-category toggles, and
 * accept-all/reject-non-essential shortcuts. AnalyticsScripts (see
 * components/consent/analytics-scripts.tsx) only injects vendor tags
 * once the relevant category is granted — this banner is the gate.
 */
export function CookieConsentBanner() {
  const { hasChosen, consent, acceptAll, rejectNonEssential, updateCategory } = useConsent();
  const [expanded, setExpanded] = useState(false);

  if (hasChosen) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface p-5 shadow-lifted sm:p-6"
    >
      <div className="container flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-5 w-5 shrink-0 text-navy-950" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-muted">
            We use cookies for necessary site functionality, analytics, and marketing measurement. You can
            accept all, reject non-essential cookies, or choose your preferences below.
          </p>
        </div>

        {expanded && (
          <div className="grid gap-3 sm:grid-cols-3">
            {consentCategories.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-border p-4">
                <Checkbox
                  label={<span className="font-medium text-navy-950">{cat.label}</span>}
                  checked={consent[cat.id]}
                  disabled={cat.required}
                  onChange={(e) => updateCategory(cat.id, e.target.checked)}
                />
                <p className="mt-2 text-xs text-ink-muted">{cat.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary" size="sm" onClick={acceptAll}>
            Accept All
          </Button>
          <Button variant="secondary" size="sm" onClick={rejectNonEssential}>
            Reject Non-Essential
          </Button>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-medium text-navy-950 underline underline-offset-2"
          >
            {expanded ? "Hide preferences" : "Manage preferences"}
          </button>
        </div>
      </div>
    </div>
  );
}

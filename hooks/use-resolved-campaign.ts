"use client";

import { useEffect, useState } from "react";
import { useActiveCampaign } from "@/lib/campaign/campaign-context";
import { getCampaignBySlug } from "@/config/campaign.config";
import type { CampaignConfig } from "@/types/campaign";

/**
 * Single source of truth for "which campaign applies right now,"
 * shared by every hook/component that needs the full CampaignConfig
 * object (not just a resolved phone number) — currently
 * `useCallAction` and the mobile call CTAs (StickyCallBar /
 * FloatingCallButton). Extracted here so the context-first,
 * cookie-fallback resolution logic exists in exactly one place.
 *
 * Resolution order:
 *   1. React context, set by `/campaign/[slug]/layout.tsx` — no
 *      flash, available on first render for anything inside that route.
 *   2. The `id_src` cookie's `campaign` field, set by middleware.ts on
 *      first touch — this is what lets Navbar/Footer/StickyCallBar
 *      (which render outside the campaign route's subtree) still
 *      reflect the campaign a visitor actually clicked through from.
 *   3. `null` — organic/default site behavior.
 */
export function useResolvedCampaign(explicitSlug?: string): CampaignConfig | null {
  const contextCampaign = useActiveCampaign();
  const [cookieCampaign, setCookieCampaign] = useState<CampaignConfig | null>(null);

  useEffect(() => {
    if (contextCampaign) return;

    const match = document.cookie.match(/(?:^|; )id_src=([^;]*)/);
    let slug: string | undefined = explicitSlug;

    if (!slug && match) {
      const encoded = match[1];
      if (encoded) {
        try {
          const parsed = JSON.parse(decodeURIComponent(encoded));
          slug = parsed.campaign ?? undefined;
        } catch {
          // malformed cookie — ignore, fall through to null
        }
      }
    }

    const found = slug ? getCampaignBySlug(slug) : undefined;
    setCookieCampaign(found?.status === "active" ? found : null);
  }, [contextCampaign, explicitSlug]);

  return contextCampaign ?? cookieCampaign;
}

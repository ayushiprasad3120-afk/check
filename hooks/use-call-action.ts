"use client";

import { useEffect, useState } from "react";
import { resolveCallAction, type CallAction } from "@/lib/campaign/cta-resolver";
import { useResolvedCampaign } from "@/hooks/use-resolved-campaign";
import { tracking } from "@/config/tracking.config";
import { toTelHref } from "@/lib/utils/format";

interface UseCallActionOptions {
  campaignSlug?: string;
  service?: string;
}

/**
 * Client-side single source of truth for what a call CTA should do.
 * Campaign resolution itself lives in `useResolvedCampaign` (shared
 * with StickyCallBar/FloatingCallButton so the "which campaign
 * applies" logic exists in exactly one place); this hook layers the
 * source/service params on top and produces the final tel/redirect/
 * disabled action via `resolveCallAction`.
 */
export function useCallAction(options: UseCallActionOptions = {}): CallAction {
  const campaign = useResolvedCampaign(options.campaignSlug);
  const [action, setAction] = useState<CallAction>({
    type: "tel",
    href: toTelHref(tracking.defaultDID),
    display: tracking.defaultDID,
  });

  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )id_src=([^;]*)/);
    let source: string | undefined;

    if (match) {
      const encoded = match[1];
      if (encoded) {
        try {
          source = JSON.parse(decodeURIComponent(encoded)).source ?? undefined;
        } catch {
          // malformed cookie — ignore
        }
      }
    }

    setAction(
      resolveCallAction({
        campaign,
        didParams: { campaignSlug: options.campaignSlug, source, service: options.service },
      })
    );
  }, [campaign, options.campaignSlug, options.service]);

  return action;
}

"use client";

import { createContext, useContext } from "react";
import type { CampaignConfig } from "@/types/campaign";

/**
 * Makes the active campaign (if any) available to layout-level
 * components — Navbar, Footer, StickyCallBar, FloatingCallButton —
 * without prop-drilling it through every layout file. Set once at the
 * root of `/campaign/[slug]/layout.tsx`; every other route provides
 * `null`, so components fall back to global/organic behavior automatically.
 */
const CampaignContext = createContext<CampaignConfig | null>(null);

export function CampaignProvider({
  campaign,
  children,
}: {
  campaign: CampaignConfig | null;
  children: React.ReactNode;
}) {
  return <CampaignContext.Provider value={campaign}>{children}</CampaignContext.Provider>;
}

export function useActiveCampaign(): CampaignConfig | null {
  return useContext(CampaignContext);
}

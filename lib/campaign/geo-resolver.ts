import { getStateBySlug } from "@/config/states.config";
import type { CampaignConfig } from "@/types/campaign";

export interface ResolvedGeo {
  scope: CampaignConfig["geo"]["scope"];
  label: string; // "Nationwide" | "Texas" | "Houston, Texas"
  stateName?: string;
  cityName?: string;
  doiUrl?: string;
}

/**
 * Resolves a campaign's geo target into display-ready values (used in
 * hero copy, meta descriptions, and trust badges) plus, where
 * available, the matching state's Department of Insurance link for
 * compliance/trust content. Nationwide, state, and city campaigns all
 * flow through the same function — no per-scope branching in components.
 */
export function resolveCampaignGeo(campaign: CampaignConfig): ResolvedGeo {
  const { scope, stateSlug, citySlug } = campaign.geo;

  if (scope === "nationwide") {
    return { scope, label: "Nationwide" };
  }

  const state = stateSlug ? getStateBySlug(stateSlug) : undefined;

  if (scope === "state") {
    return {
      scope,
      label: state?.name ?? "Your State",
      stateName: state?.name,
      doiUrl: state?.doiUrl,
    };
  }

  // scope === "city"
  const cityName = citySlug
    ? citySlug
        .split("-")
        .map((w) => {
          const firstChar = w[0];
          return firstChar ? firstChar.toUpperCase() + w.slice(1) : w;
        })
        .join(" ")
    : undefined;

  return {
    scope,
    label: cityName && state ? `${cityName}, ${state.name}` : state?.name ?? "Your Area",
    stateName: state?.name,
    cityName,
    doiUrl: state?.doiUrl,
  };
}

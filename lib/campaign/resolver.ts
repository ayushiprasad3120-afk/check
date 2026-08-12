import { campaigns, getCampaignBySlug } from "@/config/campaign.config";
import type { CampaignConfig } from "@/types/campaign";

/**
 * Resolves which campaign is "active" for the current request context.
 * Precedence: explicit slug (from the /campaign/[slug] route) -> the
 * `id_src` cookie's campaign value (set by middleware.ts on first
 * touch) -> null (organic/default site experience).
 *
 * A campaign is only ever considered "active" if its status is
 * "active" — paused/draft/ended campaigns fall through to organic
 * defaults automatically, with no code changes required to pause one.
 */
export function resolveActiveCampaign(params: {
  slug?: string | null;
  cookieCampaignId?: string | null;
}): CampaignConfig | null {
  const { slug, cookieCampaignId } = params;

  if (slug) {
    const bySlug = getCampaignBySlug(slug);
    if (bySlug && bySlug.status === "active") return bySlug;
    return null;
  }

  if (cookieCampaignId) {
    const byCookie = campaigns.find(
      (c) => c.slug === cookieCampaignId || c.campaignId === cookieCampaignId
    );
    if (byCookie && byCookie.status === "active") return byCookie;
  }

  return null;
}

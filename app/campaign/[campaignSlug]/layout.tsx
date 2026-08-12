import { notFound } from "next/navigation";
import { getCampaignBySlug } from "@/config/campaign.config";
import { CampaignProvider } from "@/lib/campaign/campaign-context";

/**
 * Sets the active campaign in context for everything rendered beneath
 * this route — Navbar, Footer, StickyCallBar/FloatingCallButton, and
 * every CallButton on the page all automatically pick up the
 * campaign's DID / tracking URL / analytics IDs from here, with zero
 * per-component wiring. A minimal layout (no mega-menu, single CTA)
 * protects Google Ads message-match and Quality Score.
 */
export default async function CampaignLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ campaignSlug: string }>;
}) {
  const { campaignSlug } = await params;
  const campaign = getCampaignBySlug(campaignSlug);
  if (!campaign || campaign.status !== "active") notFound();

  return <CampaignProvider campaign={campaign}>{children}</CampaignProvider>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck, BadgeCheck, Star, Lock } from "lucide-react";
import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/forms/quote-form";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { SectionContainer } from "@/components/shared/section-container";
import { CoverageArc } from "@/components/shared/coverage-arc";
import { JsonLd } from "@/components/shared/json-ld";
import { organizationJsonLd, faqJsonLd } from "@/lib/seo/json-ld";
import { getCampaignBySlug, campaigns } from "@/config/campaign.config";
import { resolveCampaignGeo } from "@/lib/campaign/geo-resolver";
import { getHoursStatus } from "@/lib/hours/business-hours-resolver";
import type { CampaignTrustBadge } from "@/types/campaign";

const trustIcons: Record<CampaignTrustBadge["icon"], typeof ShieldCheck> = {
  shield: ShieldCheck,
  "badge-check": BadgeCheck,
  star: Star,
  lock: Lock,
};

export function generateStaticParams() {
  return campaigns.filter((c) => c.status === "active").map((c) => ({ campaignSlug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ campaignSlug: string }> }): Promise<Metadata> {
  const p = await params;
  const campaign = getCampaignBySlug(p.campaignSlug);
  if (!campaign) return {};

  return {
    title: campaign.meta.title,
    description: campaign.meta.description,
    // Campaign pages are intentionally excluded from indexing (see
    // app/robots.ts) to protect Google Ads message-match and avoid
    // duplicate content against the equivalent organic vertical page.
    robots: { index: false, follow: false },
    openGraph: {
      title: campaign.openGraph.title,
      description: campaign.openGraph.description,
      images: [{ url: campaign.openGraph.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: campaign.twitterCard.title,
      description: campaign.twitterCard.description,
      images: [campaign.twitterCard.image],
    },
  };
}

export default async function CampaignPage({ params }: { params: Promise<{ campaignSlug: string }> }) {
  const p = await params;
  const campaign = getCampaignBySlug(p.campaignSlug);
  if (!campaign || campaign.status !== "active") notFound();

  const geo = resolveCampaignGeo(campaign);
  const hours = getHoursStatus(campaign);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd(campaign.faqs)} />

      {/* Minimal, focused layout — no mega-menu, single message-matched CTA */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <CoverageArc variant="hero" className="right-[-160px] top-[-120px] h-[560px] w-[560px] text-white" />
        <div className="container relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-xl">
            <div className="mb-5 flex flex-wrap gap-2">
              {campaign.trustBadges.map((badge) => {
                const Icon = trustIcons[badge.icon];
                return (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    <Icon className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" />
                    {badge.label}
                  </span>
                );
              })}
            </div>

            <h1 className="text-display-lg balance text-white">{campaign.hero.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{campaign.hero.subtitle}</p>
            <p className="mt-2 text-sm text-emerald-300">Serving: {geo.label}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#compare-form" variant="emerald" size="lg">
                {campaign.hero.ctaLabel}
              </Button>
              <CallButton
                source="campaign-page"
                campaignSlug={campaign.slug}
                variant="outlineLight"
                size="lg"
                label={hours.isOpen ? undefined : campaign.cta.afterHoursLabel}
              />
            </div>

            <p className="mt-4 text-xs text-white/65">{hours.label}</p>
          </div>

          <div id="compare-form" className="scroll-mt-24">
            <QuoteForm defaultService={campaign.vertical} source={`campaign-${campaign.slug}`} />
          </div>
        </div>
      </section>

      <FaqSection
        items={campaign.faqs}
        eyebrow="FAQ"
        title="Common questions"
        description={`Specific to ${geo.label}.`}
      />

      <SectionContainer className="bg-canvas">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-widest text-ink-faint">Advertiser</p>
          <p className="mt-2 font-display text-lg text-navy-950">{campaign.advertiserName}</p>
          <p className="mt-4 text-xs leading-relaxed text-ink-faint">
            This is an advertisement. {campaign.advertiserName} is not an insurance company and does not
            guarantee coverage, pricing, or approval. Availability varies by state and carrier.
          </p>
        </div>
      </SectionContainer>
    </>
  );
}

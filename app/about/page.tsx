import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { Globe2, ShieldCheck, TrendingUp, Eye } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about VisionovaHQ's mission, vision, and commitment to transparent, high-performance advertising worldwide.",
  path: "/about",
});

const pillars = [
  { icon: Eye, title: "Mission", desc: "To connect advertisers and publishers through traffic that performs — verified, transparent, and built to scale sustainably." },
  { icon: TrendingUp, title: "Vision", desc: "A performance advertising ecosystem where quality is the default, not a premium add-on." },
  { icon: Globe2, title: "Global Reach", desc: "A verified network spanning worldwide markets, connecting demand and supply across every major region." },
  { icon: ShieldCheck, title: "Transparency", desc: "Every metric, every decision, every payout — visible and explainable, always." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VisionovaHQ"
        title="Performance advertising, rebuilt around trust."
        description="VisionovaHQ was founded on a simple premise: performance marketing works best when advertisers and publishers can trust the numbers behind it."
      />

      <section className="py-20 md:py-28">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-charcoal dark:text-cream leading-tight">
              Built by performance marketers, for performance marketers.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5 text-charcoal/70 dark:text-cream/70 leading-relaxed">
              <p>
                VisionovaHQ began with a frustration shared across the industry: too many networks optimized for volume at the expense of quality, leaving advertisers to filter out fraud and publishers to chase unreliable payouts.
              </p>
              <p>
                We built a different kind of network — one where every traffic source is vetted before it ever reaches an advertiser, where optimization is proactive rather than reactive, and where publishers are treated as long-term partners, not line items.
              </p>
              <p>
                Today, VisionovaHQ operates across global markets and major verticals, powered by proprietary fraud detection and a team of dedicated performance specialists who measure success the same way our partners do: in real, sustainable growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-beige/60 dark:bg-charcoal/40">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Four principles that shape every decision."
            align="center"
            className="mx-auto mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="rounded-2xl card-surface p-8 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine">
                    <p.icon size={19} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-charcoal dark:text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

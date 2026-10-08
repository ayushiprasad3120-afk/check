import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { trafficSources, trafficPillars } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Traffic Sources",
  description:
    "Explore VisionovaHQ's verified global traffic inventory across 18 channels, backed by rigorous quality control and fraud prevention.",
  path: "/traffic-sources",
});

export default function TrafficSourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Traffic Sources"
        title="A traffic network built on verification, not volume."
        description="Eighteen channels. One quality bar. Every source in our inventory is vetted before activation and monitored continuously after."
      />

      <section className="py-8 md:py-16">
        <div className="container-editorial grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trafficSources.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.08}>
              <div className="group rounded-2xl card-surface p-7 h-full hover:shadow-soft transition-shadow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                  <t.icon size={19} />
                </div>
                <h3 className="mt-6 font-display text-xl text-charcoal dark:text-cream">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-noise pointer-events-none" />
        <div className="container-editorial relative">
          <SectionHeading
            eyebrow="Our Standard"
            title="Quality control, fraud prevention, and optimization — built in, not bolted on."
            align="center"
            className="mx-auto mb-16 [&_h2]:text-cream [&_p]:text-cream/65"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trafficPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <div className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand/15 text-sand">
                    <p.icon size={19} />
                  </div>
                  <h3 className="mt-6 font-display text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.desc}</p>
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

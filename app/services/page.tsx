import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore VisionovaHQ's full suite of performance marketing services — CPA, CPL, CPS, Pay Per Call, app installs, affiliate management, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every performance model. One optimization standard."
        description="Whatever your pricing model or campaign goal, our team builds and optimizes around measurable outcomes."
      />

      <section className="py-8 md:py-16 pb-28">
        <div className="container-editorial grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.12}>
              <div className="group rounded-2xl card-surface p-8 md:p-10 h-full flex flex-col hover:shadow-soft transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                    <s.icon size={21} />
                  </div>
                  <span className="font-display text-3xl text-charcoal/10 dark:text-cream/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-2xl text-charcoal dark:text-cream">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}

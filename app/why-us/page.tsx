import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { comparisonRows } from "@/lib/data";
import { Check, X } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Why VisionovaHQ",
  description:
    "See how VisionovaHQ compares to typical performance advertising networks on transparency, support, technology, and payments.",
  path: "/why-us",
});

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why VisionovaHQ"
        title="Compare us to the industry standard."
        description="Most networks compete on reach. We compete on transparency, support, and results — and we think the comparison speaks for itself."
      />

      <section className="pb-28">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto rounded-3xl border border-charcoal/10 dark:border-cream/10 overflow-hidden">
            <div className="grid grid-cols-3 bg-beige/70 dark:bg-cream/[0.04] text-xs md:text-sm uppercase tracking-wide">
              <div className="p-5 text-charcoal/50 dark:text-cream/50">Criteria</div>
              <div className="p-5 text-wine font-medium text-center">VisionovaHQ</div>
              <div className="p-5 text-charcoal/50 dark:text-cream/50 text-center">Typical Networks</div>
            </div>
            {comparisonRows.map((row, i) => (
              <Reveal key={row.label} delay={i * 0.05}>
                <div className="grid grid-cols-3 border-t border-charcoal/10 dark:border-cream/10 items-center">
                  <div className="p-5 text-sm font-medium text-charcoal dark:text-cream">{row.label}</div>
                  <div className="p-5 flex items-start justify-center gap-2 text-center">
                    <Check size={15} className="text-wine shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-charcoal/75 dark:text-cream/75">{row.us}</span>
                  </div>
                  <div className="p-5 flex items-start justify-center gap-2 text-center">
                    <X size={15} className="text-charcoal/25 dark:text-cream/25 shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-charcoal/40 dark:text-cream/40">{row.them}</span>
                  </div>
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

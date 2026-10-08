import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { verticals } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Verticals",
  description:
    "VisionovaHQ runs performance campaigns across insurance, finance, travel, ecommerce, VPN, software, health, gaming, and more.",
  path: "/verticals",
});

export default function VerticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Verticals"
        title="Vertical expertise, not generic traffic."
        description="Every vertical has different compliance requirements, buyer psychology, and quality signals. Our team specializes across each one."
      />

      <section className="py-8 md:py-16 pb-28">
        <div className="container-editorial grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {verticals.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.08}>
              <div className="group flex flex-col items-center text-center gap-4 rounded-2xl card-surface p-8 h-full hover:shadow-soft transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                  <v.icon size={22} />
                </div>
                <p className="font-display text-lg text-charcoal dark:text-cream">{v.title}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <div className="flex flex-col items-center justify-center text-center gap-2 rounded-2xl border border-dashed border-charcoal/20 dark:border-cream/20 p-8 h-full">
              <p className="font-display text-lg text-charcoal/60 dark:text-cream/60">And More</p>
              <p className="text-xs text-charcoal/45 dark:text-cream/45">New verticals onboarded regularly</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

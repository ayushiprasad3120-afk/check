"use client";

import { verticals } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function VerticalsMarquee() {
  const loop = [...verticals, ...verticals];
  return (
    <section className="py-24 md:py-32 bg-beige/60 dark:bg-charcoal/40 overflow-hidden">
      <div className="container-editorial mb-14">
        <SectionHeading
          eyebrow="Verticals"
          title="Deep expertise across every high-performing vertical."
          align="center"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-beige dark:from-charcoal to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-beige dark:from-charcoal to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {loop.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-4 shrink-0 rounded-full card-surface px-6 py-3.5"
            >
              <v.icon size={16} className="text-wine" />
              <span className="text-sm font-medium text-charcoal dark:text-cream whitespace-nowrap">{v.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

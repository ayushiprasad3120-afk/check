"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Check, X } from "lucide-react";
import { comparisonRows } from "@/lib/data";

export function WhyUsPreview() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-editorial relative">
        <SectionHeading
          eyebrow="Why VisionovaHQ"
          title="Built different, on purpose."
          description="We compete on transparency and results, not just reach."
          align="center"
          className="mx-auto mb-16 [&_h2]:text-cream [&_p]:text-cream/65"
        />

        <div className="max-w-3xl mx-auto rounded-3xl border border-cream/10 overflow-hidden">
          <div className="grid grid-cols-3 bg-cream/[0.04] text-xs md:text-sm uppercase tracking-wide">
            <div className="p-4 md:p-5 text-cream/50">Criteria</div>
            <div className="p-4 md:p-5 text-sand font-medium text-center">VisionovaHQ</div>
            <div className="p-4 md:p-5 text-cream/50 text-center">Typical Networks</div>
          </div>
          {comparisonRows.map((row, i) => (
            <Reveal key={row.label} delay={i * 0.05}>
              <div className="grid grid-cols-3 border-t border-cream/10 items-center">
                <div className="p-4 md:p-5 text-sm font-medium">{row.label}</div>
                <div className="p-4 md:p-5 flex items-center justify-center gap-2 text-center">
                  <Check size={15} className="text-sand shrink-0" />
                  <span className="text-xs md:text-sm text-cream/85 hidden sm:inline">{row.us}</span>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center gap-2 text-center">
                  <X size={15} className="text-cream/30 shrink-0" />
                  <span className="text-xs md:text-sm text-cream/40 hidden sm:inline">{row.them}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/why-us" variant="secondary" className="!border-cream/25 !text-cream hover:!border-sand hover:!text-sand">
            See the full comparison
          </Button>
        </div>
      </div>
    </section>
  );
}

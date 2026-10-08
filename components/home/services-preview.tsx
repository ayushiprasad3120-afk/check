"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Do"
            title="Performance marketing, engineered end to end."
            description="From acquisition to optimization, every service is built around one outcome: measurable performance."
          />
          <Reveal delay={0.2}>
            <Button href="/services" variant="secondary" className="shrink-0">View all services</Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full rounded-2xl card-surface p-7 shadow-sm hover:shadow-soft transition-shadow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine group-hover:bg-wine group-hover:text-cream transition-colors">
                  <s.icon size={19} />
                </div>
                <h3 className="mt-6 font-display text-xl text-charcoal dark:text-cream">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

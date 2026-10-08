"use client";

import { motion } from "framer-motion";
import { trafficSources } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function TrafficPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Traffic Sources"
          title="Eighteen traffic channels. One quality standard."
          description="Every source in our network is vetted, monitored, and optimized under the same rigorous standard — no exceptions."
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trafficSources.slice(0, 12).map((t, i) => (
            <Reveal key={t.title} delay={(i % 6) * 0.06}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="flex flex-col items-center text-center gap-3 rounded-2xl card-surface p-5 h-full"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <t.icon size={16} />
                </div>
                <p className="text-xs md:text-[13px] font-medium text-charcoal dark:text-cream leading-snug">{t.title}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/traffic-sources" variant="secondary">Explore all traffic sources</Button>
        </div>
      </div>
    </section>
  );
}

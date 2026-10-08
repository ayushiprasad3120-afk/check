"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 120, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige via-cream to-cream dark:from-charcoal dark:via-soot dark:to-soot" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-wine/10 blur-[120px] -z-10" />
      <div className="absolute top-40 -left-40 h-[420px] w-[420px] rounded-full bg-sand/30 blur-[110px] -z-10" />

      <motion.div
        className="absolute top-32 left-[8%] h-16 w-16 rounded-2xl border border-wine/20 bg-white/40 dark:bg-white/5 backdrop-blur-md animate-float hidden md:block"
        style={{ animationDelay: "0.5s" }}
      />
      <motion.div
        className="absolute bottom-24 right-[12%] h-24 w-24 rounded-full border border-wine/20 bg-white/30 dark:bg-white/5 backdrop-blur-md animate-float hidden md:block"
        style={{ animationDelay: "1.2s" }}
      />
      <motion.div
        className="absolute top-[45%] right-[6%] h-10 w-10 rounded-xl bg-wine/15 animate-float hidden lg:block"
        style={{ animationDelay: "2s" }}
      />

      <div className="container-editorial relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Global Performance Advertising Network</p>
            </Reveal>

            <TextReveal
              as="h1"
              text="Connecting advertisers with high-quality traffic worldwide."
              className="font-display text-[2.6rem] leading-[1.06] sm:text-6xl md:text-[4.2rem] md:leading-[1.04] font-medium text-balance text-charcoal dark:text-cream"
            />

            <Reveal delay={0.4}>
              <p className="mt-7 max-w-lg text-base md:text-lg leading-relaxed text-charcoal/70 dark:text-cream/70">
                VisionovaHQ pairs verified, fraud-filtered traffic with performance-driven campaigns across global markets — built for advertisers and publishers who expect more than volume.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/advertisers" variant="primary">Become an Advertiser</Button>
                <Button href="/publishers" variant="secondary">Become a Publisher</Button>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-14 flex items-center gap-8 text-charcoal/50 dark:text-cream/50">
                <p className="text-xs uppercase tracking-[0.2em]">Trusted across</p>
                <div className="flex gap-6 text-sm font-display italic">
                  <span>Finance</span>
                  <span>Ecommerce</span>
                  <span>Travel</span>
                  <span className="hidden sm:inline">Health</span>
                </div>
              </div>
            </Reveal>
          </div>

          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-xl2 border border-white/40 dark:border-white/10 card-surface shadow-soft p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-charcoal dark:text-cream">Live Performance</p>
                <span className="flex h-2.5 w-2.5 rounded-full bg-wine animate-pulse" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: "Conversion Performance", tag: "Strong", width: 82 },
                  { label: "Traffic Quality Score", tag: "Verified", width: 96 },
                  { label: "Fraud Filtering", tag: "Active", width: 99 },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-charcoal/60 dark:text-cream/60 mb-1.5">
                      <span>{row.label}</span>
                      <span>{row.tag}</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-charcoal/10 dark:bg-cream/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${row.width}%` }}
                        transition={{ duration: 1.3, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-wine"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "GEOs", v: "Worldwide" },
                  { k: "Verticals", v: "Multiple" },
                  { k: "Uptime", v: "Reliable" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-charcoal/[0.03] dark:bg-cream/[0.05] p-3 text-center">
                    <p className="font-display text-lg text-wine">{s.v}</p>
                    <p className="text-[11px] text-charcoal/50 dark:text-cream/50 mt-0.5">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -bottom-6 -left-8 rounded-2xl bg-wine text-cream px-5 py-3.5 shadow-glow hidden sm:block"
            >
              <p className="text-xs opacity-80">Tracking</p>
              <p className="font-display text-xl">Real-Time</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal/40 dark:text-cream/40 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}

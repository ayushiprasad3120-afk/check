"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-charcoal/10 dark:divide-cream/10 rounded-2xl card-surface overflow-hidden">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.q} delay={Math.min(i, 6) * 0.04}>
            <div>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base md:text-lg text-charcoal dark:text-cream">{item.q}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-wine/10 text-wine"
                >
                  <Plus size={15} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 md:px-8 pb-6 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

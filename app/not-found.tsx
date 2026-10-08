"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige via-cream to-cream dark:from-charcoal dark:via-soot dark:to-soot" />
      <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-wine/10 blur-[110px] -z-10" />
      <div className="container-editorial text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-[7rem] md:text-[10rem] leading-none text-wine/20"
        >
          404
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-3xl md:text-4xl text-charcoal dark:text-cream"
        >
          This page took a wrong turn.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-charcoal/65 dark:text-cream/65 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex justify-center gap-4"
        >
          <Button href="/">Back to Home</Button>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 text-sm font-medium text-charcoal/70 dark:text-cream/70 hover:text-wine transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

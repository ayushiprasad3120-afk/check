"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/traffic-sources", label: "Traffic Sources" },
  { href: "/verticals", label: "Verticals" },
  { href: "/why-us", label: "Why VisionovaHQ" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "container-editorial flex items-center justify-between rounded-full transition-all duration-500 px-5 md:px-6",
          scrolled || open ? "glass shadow-soft py-2.5" : "py-1"
        )}
      >
        <Link href="/" className="font-display text-lg md:text-xl tracking-wide text-charcoal dark:text-cream">
          Visionova<span className="text-wine">HQ</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors relative py-1",
                pathname === link.href
                  ? "text-wine"
                  : "text-charcoal/75 dark:text-cream/75 hover:text-wine dark:hover:text-cream"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/advertisers"
            className="rounded-full bg-wine text-cream text-sm font-medium px-5 py-2.5 hover:bg-burgundy transition-colors"
          >
            Become an Advertiser
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 dark:border-cream/20"
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden mt-3 mx-4"
          >
            <div className="glass rounded-3xl shadow-soft p-6 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-lg font-display text-charcoal dark:text-cream hairline first:border-t-0"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/advertisers"
                className="mt-4 rounded-full bg-wine text-cream text-center text-sm font-medium px-5 py-3 hover:bg-burgundy transition-colors"
              >
                Become an Advertiser
              </Link>
              <Link
                href="/publishers"
                className="mt-2 rounded-full border border-charcoal/20 dark:border-cream/20 text-center text-sm font-medium px-5 py-3 hover:border-wine hover:text-wine transition-colors"
              >
                Become a Publisher
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

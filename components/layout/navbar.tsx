"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { primaryNav, insuranceMenu } from "@/config/navigation.config";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/tracking/analytics";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insuranceOpen, setInsuranceOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection();

  // Hide the header on scroll-down and reveal on scroll-up (a common
  // pattern on premium fintech sites) — but never while a menu is open,
  // so a user mid-interaction never has the header vanish under them.
  // globals.css already zeroes transition durations under
  // prefers-reduced-motion, so this degrades to an instant show/hide
  // rather than an animated one for those users.
  const hideHeader = scrollDirection === "down" && !mobileOpen && !insuranceOpen;

  // Close the Insurance dropdown on Escape (keyboard users) and on a
  // click outside it (mouse/touch users) — hover-open alone leaves no
  // way to dismiss it without a pointer.
  useEffect(() => {
    if (!insuranceOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInsuranceOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInsuranceOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [insuranceOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur-md transition-transform duration-300",
        hideHeader ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.label === "Insurance" ? (
              <div
                key={item.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setInsuranceOpen(true)}
                onMouseLeave={() => setInsuranceOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={insuranceOpen}
                  aria-haspopup="true"
                  onClick={() => setInsuranceOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-medium text-navy-950 hover:bg-navy-50"
                >
                  {item.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", insuranceOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {insuranceOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-2xl border border-border bg-surface p-2 shadow-lifted">
                    {insuranceMenu.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setInsuranceOpen(false)}
                        className="block rounded-xl px-4 py-3 hover:bg-navy-50"
                      >
                        <span className="block text-sm font-semibold text-navy-950">{link.label}</span>
                        <span className="block text-xs text-ink-muted">{link.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => trackEvent({ name: "nav_click", label: item.label, href: item.href })}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-navy-950 hover:bg-navy-50"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CallButton source="navbar" variant="secondary" size="sm" />
          <Button href="/quote" variant="primary" size="sm">
            Get a Free Quote
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy-950 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-surface px-6 pb-8 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-navy-950 hover:bg-navy-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <CallButton source="navbar" variant="secondary" className="justify-center" />
            <Button href="/quote" variant="primary" className="justify-center">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

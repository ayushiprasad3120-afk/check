import { useState } from "react";
import { Link } from "react-router-dom";
import CallButton from "./CallButton";
import { ADVERTISER_NAME } from "../config/campaign";

const NAV_LINKS = [
  { label: "Auto Insurance", href: "#coverage-hero" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Coverage", href: "#coverage" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-cream)]/95 backdrop-blur border-b border-[var(--color-navy-deep)]/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl font-extrabold text-[var(--color-navy-deep)] tracking-tight"
          >
            {ADVERTISER_NAME}
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-text-dark)] hover:text-[var(--color-blue-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CallButton variant="secondary" className="!py-2.5 !px-5 !text-sm" />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <CallButton variant="secondary" label="Call" className="!py-2 !px-4 !text-sm" />
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-[var(--color-navy-deep)] hover:bg-[var(--color-beige-warm)]"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="lg:hidden pb-5 flex flex-col gap-1 border-t border-[var(--color-navy-deep)]/10 pt-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 py-3 rounded-lg text-base font-semibold text-[var(--color-text-dark)] hover:bg-[var(--color-beige-warm)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

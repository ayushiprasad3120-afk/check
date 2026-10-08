"use client";

import Link from "next/link";
import { useState } from "react";
import { Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/traffic-sources", label: "Traffic Sources" },
  { href: "/verticals", label: "Verticals" },
  { href: "/why-us", label: "Why VisionovaHQ" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { href: "/advertisers", label: "For Advertisers" },
  { href: "/publishers", label: "For Publishers" },
  { href: "/services", label: "CPA & CPL Marketing" },
  { href: "/services", label: "Pay Per Call" },
  { href: "/services", label: "Affiliate Management" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="relative bg-charcoal text-cream overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="container-editorial relative py-20 md:py-28">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-14">
            <div>
              <Link href="/" className="font-display text-2xl tracking-wide">
                Visionova<span className="text-sand">HQ</span>
              </Link>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
                Connecting advertisers with high-quality traffic worldwide, and publishers with exclusive, high-payout campaigns.
              </p>
              <div className="mt-7 flex gap-3">
                {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social link"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 hover:border-sand hover:text-sand transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cream/45 mb-5">Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-cream/70 hover:text-sand transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cream/45 mb-5">Services</p>
              <ul className="space-y-3">
                {serviceLinks.map((l, i) => (
                  <li key={i}>
                    <Link href={l.href} className="text-sm text-cream/70 hover:text-sand transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cream/45 mb-5">Newsletter</p>
              <p className="text-sm text-cream/60 mb-4 leading-relaxed">
                Performance insights and network updates, delivered occasionally.
              </p>
              {submitted ? (
                <p className="text-sm text-sand">Thanks — you&apos;re on the list.</p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubmitted(true);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full rounded-full bg-cream/10 border border-cream/15 px-4 py-2.5 text-sm placeholder:text-cream/40 focus:outline-none focus:border-sand"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand text-charcoal hover:bg-cream transition-colors"
                  >
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} VisionovaHQ. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/45">
            <Link href="/privacy" className="hover:text-sand transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-sand transition-colors">Terms of Service</Link>
            <a href="mailto:info@visionovahq.com" className="hover:text-sand transition-colors">
              info@visionovahq.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

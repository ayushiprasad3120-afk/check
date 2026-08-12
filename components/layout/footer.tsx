import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { footerColumns } from "@/config/navigation.config";
import { brand } from "@/config/brand.config";
import { trackEvent } from "@/lib/tracking/analytics";
import { FooterPhoneLink } from "@/components/layout/footer-phone-link";

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {brand.brandTagline} {brand.brandName} helps you understand your insurance
              options and connects you with licensed professionals — never the carrier
              itself.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {brand.brandAddress.street}, {brand.brandAddress.city},{" "}
                  {brand.brandAddress.state} {brand.brandAddress.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${brand.brandEmail}`} className="hover:text-white">
                  {brand.brandEmail}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {Object.entries(brand.socialLinks).map(([key, url]) => {
                const Icon = socialIcons[key as keyof typeof socialIcons];
                if (!url || !Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    onClick={() => trackEvent({ name: "outbound_link", href: url })}
                    aria-label={`${brand.brandName} on ${key}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs leading-relaxed text-white/60">
            {brand.brandLegalName} is not an insurance company. We provide general
            educational information about insurance products and connect consumers with
            licensed insurance agents. Product availability, coverage, and pricing vary
            by state and are determined solely by the issuing carrier. NPN #
            {brand.licensing.npnNumber}. Not affiliated with or endorsed by any
            government agency, including the ACA Health Insurance Marketplace.
          </p>
          <p className="mt-4 text-xs text-white/60">
            © {year} {brand.brandLegalName}. All rights reserved. ·{" "}
            <FooterPhoneLink className="hover:text-white/70" />
          </p>
        </div>
      </div>
    </footer>
  );
}

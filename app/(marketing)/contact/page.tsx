import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";
import { CallButton } from "@/components/shared/call-button";
import { brand } from "@/config/brand.config";
import { businessHours } from "@/config/business-hours.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/contact",
  title: "Contact InsureDirect",
  description: "Reach InsureDirect by phone, email, or contact form.",
});

export default function ContactPage() {
  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="text-display-sm balance">Get in touch</h1>
          <p className="mt-3 text-ink-muted">
            Have a question before you compare coverage? Reach us by phone or send a message below.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Call us</p>
                <div className="mt-2">
                  <CallButton source="service-page" variant="secondary" size="sm" />
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Email</p>
                <a href={`mailto:${brand.brandEmail}`} className="text-sm text-ink-muted hover:text-navy-950">
                  {brand.brandEmail}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-emerald-700" aria-hidden="true" />
              <div>
                <p className="font-semibold text-navy-950">Address</p>
                <p className="text-sm text-ink-muted">
                  {brand.brandAddress.street}, {brand.brandAddress.city}, {brand.brandAddress.state}{" "}
                  {brand.brandAddress.zip}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-faint">Hours ({businessHours.timezone})</p>
            <ul className="space-y-1 text-sm text-ink-muted">
              {businessHours.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span>{h.day}</span>
                  <span>{h.open && h.close ? `${h.open} – ${h.close}` : "Closed"}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </SectionContainer>
  );
}

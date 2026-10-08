import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the VisionovaHQ team — advertisers, publishers, and partners welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk performance."
        description="Whether you're an advertiser, publisher, or future partner, our team responds within one business day."
      />

      <section className="pb-28">
        <div className="container-editorial grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
          <Reveal className="space-y-5">
            <div className="rounded-2xl card-surface p-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wine/10 text-wine">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/50 dark:text-cream/50">Email</p>
                <a href="mailto:info@visionovahq.com" className="mt-1 block font-display text-lg text-charcoal dark:text-cream hover:text-wine transition-colors">
                  info@visionovahq.com
                </a>
              </div>
            </div>
            <div className="rounded-2xl card-surface p-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wine/10 text-wine">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/50 dark:text-cream/50">Response Time</p>
                <p className="mt-1 font-display text-lg text-charcoal dark:text-cream">Within 1 business day</p>
              </div>
            </div>
            <div className="rounded-2xl card-surface p-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wine/10 text-wine">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-charcoal/50 dark:text-cream/50">Global Operations</p>
                <p className="mt-1 font-display text-lg text-charcoal dark:text-cream">Worldwide Traffic Coverage</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-56 relative card-surface flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(122,33,56,0.12),transparent_60%)]" />
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal/40 dark:text-cream/40">Interactive Map</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

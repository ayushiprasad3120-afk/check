import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PublisherForm } from "@/components/forms/publisher-form";
import { buildMetadata } from "@/lib/seo";
import { publisherBenefits } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "For Publishers",
  description:
    "Monetize your traffic with VisionovaHQ — exclusive campaigns, competitive payouts, weekly payments, and dedicated publisher managers.",
  path: "/publishers",
});

export default function PublishersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Publishers"
        title="Your traffic, matched to campaigns that pay."
        description="Get access to exclusive offers, competitive payouts, and a team invested in helping you scale."
      />

      <section className="py-8 md:py-16">
        <div className="container-editorial grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {publisherBenefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 4) * 0.08}>
              <div className="rounded-2xl card-surface p-7 h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine/10 text-wine">
                  <b.icon size={19} />
                </div>
                <h3 className="mt-6 font-display text-lg text-charcoal dark:text-cream">{b.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65 dark:text-cream/65">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Apply Now"
            title="Tell us about your traffic."
            description="Complete the form below and a publisher manager will follow up within one business day."
            align="center"
            className="mx-auto mb-14"
          />
          <div className="max-w-3xl mx-auto">
            <PublisherForm />
          </div>
        </div>
      </section>
    </>
  );
}

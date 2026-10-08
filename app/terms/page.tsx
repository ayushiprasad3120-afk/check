import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Read the VisionovaHQ Terms of Service governing use of our advertiser and publisher network.",
  path: "/terms",
});

const sections = [
  { title: "Acceptance of Terms", body: "By accessing or using VisionovaHQ's website or services, you agree to be bound by these Terms of Service and our Privacy Policy." },
  { title: "Eligibility", body: "Our services are intended for businesses and individuals operating in compliance with applicable advertising, consumer protection, and data privacy laws." },
  { title: "Advertiser & Publisher Obligations", body: "Advertisers and publishers agree to provide accurate information, comply with campaign guidelines, and refrain from fraudulent or deceptive practices." },
  { title: "Payments", body: "Payment terms, including payout schedules and thresholds, are outlined in individual partner agreements and are subject to verification of valid traffic and conversions." },
  { title: "Fraud & Compliance", body: "VisionovaHQ reserves the right to withhold payment, suspend, or terminate accounts found to be engaging in fraudulent, non-compliant, or harmful activity." },
  { title: "Intellectual Property", body: "All content, branding, and technology on this website remain the property of VisionovaHQ unless otherwise stated." },
  { title: "Limitation of Liability", body: "VisionovaHQ shall not be liable for indirect, incidental, or consequential damages arising from use of our services, to the fullest extent permitted by law." },
  { title: "Termination", body: "Either party may terminate their partnership in accordance with the terms specified in their individual agreement." },
  { title: "Governing Law", body: "These Terms are governed by applicable law in the jurisdiction in which VisionovaHQ operates, without regard to conflict of law principles." },
  { title: "Contact", body: "Questions about these Terms can be directed to info@visionovahq.com." },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Last updated: January 2026" />
      <section className="pb-28">
        <div className="container-editorial max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i, 6) * 0.05}>
              <div>
                <h2 className="font-display text-2xl text-charcoal dark:text-cream mb-3">{s.title}</h2>
                <p className="text-sm md:text-base leading-relaxed text-charcoal/70 dark:text-cream/70">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

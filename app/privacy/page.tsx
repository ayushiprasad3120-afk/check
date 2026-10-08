import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Read the VisionovaHQ Privacy Policy to understand how we collect, use, and protect your information.",
  path: "/privacy",
});

const sections = [
  { title: "Information We Collect", body: "We collect information you provide directly, such as contact details submitted through our advertiser and publisher forms, as well as technical data including IP address, device type, and browsing behavior collected via cookies and similar technologies." },
  { title: "How We Use Information", body: "Information is used to operate and improve our network, evaluate advertiser and publisher applications, prevent fraud, communicate with partners, and comply with legal obligations." },
  { title: "Cookies", body: "We use cookies to remember preferences, analyze traffic, and support fraud detection. You can control cookie preferences through our cookie banner or your browser settings." },
  { title: "Data Sharing", body: "We do not sell personal information. Data may be shared with service providers who support our operations, subject to confidentiality obligations, or when required by law." },
  { title: "Data Security", body: "We employ industry-standard technical and organizational measures to protect information against unauthorized access, alteration, or disclosure." },
  { title: "Your Rights", body: "Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. Contact info@visionovahq.com to exercise these rights." },
  { title: "International Transfers", body: "As a global network, information may be processed in countries other than your own, always with appropriate safeguards in place." },
  { title: "Changes to This Policy", body: "We may update this policy periodically. Material changes will be communicated through the website." },
  { title: "Contact Us", body: "Questions about this Privacy Policy can be directed to info@visionovahq.com." },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: January 2026" />
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

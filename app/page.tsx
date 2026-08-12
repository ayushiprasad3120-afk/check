import type { Metadata } from "next";
import { Hero } from "@/components/marketing/hero";
import { ServiceCardGrid } from "@/components/marketing/service-card-grid";
import { TrustSection } from "@/components/marketing/trust-section";
import { PartnerLogos } from "@/components/marketing/partner-logos";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Testimonials } from "@/components/marketing/testimonials";
import { EducationalSection } from "@/components/marketing/educational-section";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { getFaqsByTopic } from "@/config/faq.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Compare Insurance Coverage & Connect with Licensed Agents",
  description:
    "InsureDirect helps you understand auto, health, home, and final expense insurance coverage and connects you with licensed agents to compare your options.",
});

export default function HomePage() {
  const generalFaqs = getFaqsByTopic("general");

  return (
    <>
      <Hero />
      <PartnerLogos />
      <ServiceCardGrid />
      <TrustSection />
      <HowItWorks />
      <Testimonials />
      <EducationalSection
        title="Insurance doesn't have to be confusing."
        paragraphs={[
          "Every insurance policy is really answering the same question: if something goes wrong, who pays, and how much? The details differ by coverage type, but the underlying idea — transferring risk in exchange for a premium — stays the same.",
          "The hardest part usually isn't understanding insurance in general, it's understanding your specific options: which coverage is required, which is optional, and which trade-offs actually matter for your situation.",
          "That's what InsureDirect is built around — plain-language explanations first, followed by a conversation with a licensed agent only when you're ready for one.",
        ]}
      />
      <FaqSection items={generalFaqs} description="Straightforward answers before you talk to anyone." />
      <CTASection
        title="Ready to compare your coverage options?"
        description="It takes a few minutes to get started, and there's no obligation to buy anything."
        source="cta-section"
      />
    </>
  );
}

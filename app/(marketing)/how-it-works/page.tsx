import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { getFaqsByTopic } from "@/config/faq.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/how-it-works",
  title: "How InsureDirect Works",
  description: "See exactly how comparing coverage and connecting with a licensed agent works, step by step.",
});

export default function HowItWorksPage() {
  return (
    <>
      <SectionContainer className="pb-0">
        <Breadcrumbs items={[{ name: "How It Works", path: "/how-it-works" }]} />
      </SectionContainer>
      <HowItWorks />
      <FaqSection items={getFaqsByTopic("general")} />
      <CTASection
        title="Ready to get started?"
        description="It takes a couple of minutes to share the basics — there's no obligation to buy anything."
        source="cta-section"
      />
    </>
  );
}

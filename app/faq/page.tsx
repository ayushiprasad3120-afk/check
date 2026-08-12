import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { faqs } from "@/config/faq.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/faq",
  title: "Frequently Asked Questions",
  description: "Answers to common questions about how InsureDirect works and how your information is used.",
});

export default function FaqPage() {
  return (
    <>
      <SectionContainer className="pb-0">
        <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      </SectionContainer>
      <FaqSection items={faqs} title="Frequently asked questions" />
    </>
  );
}

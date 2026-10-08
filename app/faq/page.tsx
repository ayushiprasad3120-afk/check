import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { CtaSection } from "@/components/home/cta-section";
import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description: "Answers to common questions about VisionovaHQ's advertiser and publisher programs, traffic sources, and payments.",
  path: "/faq",
});

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        description="Everything you need to know about partnering with VisionovaHQ as an advertiser or publisher."
      />
      <section className="pb-28">
        <div className="container-editorial">
          <FaqAccordion />
        </div>
      </section>
      <CtaSection />
    </>
  );
}

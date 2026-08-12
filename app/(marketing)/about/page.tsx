import type { Metadata } from "next";
import { Target, Eye, HandHeart, GraduationCap } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { TrustSection } from "@/components/marketing/trust-section";
import { CTASection } from "@/components/marketing/cta-section";
import { brand } from "@/config/brand.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/about",
  title: "About InsureDirect",
  description: "Learn about InsureDirect's mission to make insurance shopping clearer and less pressured.",
});

export default function AboutPage() {
  return (
    <>
      <SectionContainer>
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow="About us" title={`Why ${brand.brandName} exists`} align="center" className="mb-6" />
          <p className="text-[0.95rem] leading-relaxed text-ink-muted">
            Most people shopping for insurance are handed a wall of jargon and a phone call before they've had
            a chance to understand what they're actually comparing. {brand.brandName} exists to reverse that
            order — explain the coverage first, then connect you with a licensed agent only when you're ready.
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
            We are not an insurance carrier. We don't issue policies, and we don't get to promise you a price.
            What we can do is make the shopping process less confusing and connect you with licensed
            professionals who can answer the specific questions that matter for your situation.
          </p>
        </div>
      </SectionContainer>

      <FeatureGrid
        eyebrow="What we stand for"
        title="Mission, vision, and how we help"
        description="Four commitments that shape every page on this site, not just this one."
        columns={4}
        features={[
          {
            icon: Target,
            title: "Our mission",
            description:
              "Make comparing insurance coverage as clear as comparing any other major purchase — no jargon walls, no pressure before understanding.",
          },
          {
            icon: Eye,
            title: "Our vision",
            description:
              "A shopping experience where every visitor understands what they're comparing before a licensed agent ever calls.",
          },
          {
            icon: GraduationCap,
            title: "Insurance education first",
            description:
              "Every service page leads with plain-language coverage explanations — the agent conversation comes second, by choice, not by accident.",
          },
          {
            icon: HandHeart,
            title: "Consumer-first, always",
            description:
              "We never promise lowest prices, guaranteed approval, or guaranteed savings — only accurate information and a real connection to licensed help.",
          },
        ]}
      />

      <TrustSection />
      <CTASection
        title="See how it works for yourself"
        description="Compare a few coverage options in a couple of minutes — no pressure, no obligation."
        source="cta-section"
      />
    </>
  );
}

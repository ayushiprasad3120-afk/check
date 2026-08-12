import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/services/service-card";
import { services } from "@/config/services.config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/insurance",
  title: "Insurance Coverage We Help You Compare",
  description: "Browse auto, ACA health, home, and final expense insurance coverage guides and connect with licensed agents.",
});

export default function InsuranceHubPage() {
  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Insurance", path: "/insurance" }]} />
      <SectionHeading
        eyebrow="Browse by category"
        title="Insurance coverage we help you compare"
        description="We focus on four categories so we can go deep rather than wide."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </SectionContainer>
  );
}

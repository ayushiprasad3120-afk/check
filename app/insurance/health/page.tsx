import type { Metadata } from "next";
import { getServiceBySlug } from "@/config/services.config";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const service = getServiceBySlug("health")!;

export const metadata: Metadata = buildMetadata({
  path: "/insurance/health",
  title: service.metaTitle,
  description: service.metaDescription,
});

export default function HealthInsurancePage() {
  return <ServicePageTemplate service={service} />;
}

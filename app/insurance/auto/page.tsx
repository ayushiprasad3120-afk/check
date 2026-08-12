import type { Metadata } from "next";
import { getServiceBySlug } from "@/config/services.config";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const service = getServiceBySlug("auto")!;

export const metadata: Metadata = buildMetadata({
  path: "/insurance/auto",
  title: service.metaTitle,
  description: service.metaDescription,
});

export default function AutoInsurancePage() {
  return <ServicePageTemplate service={service} />;
}

import type { Metadata } from "next";
import { getServiceBySlug } from "@/config/services.config";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const service = getServiceBySlug("home")!;

export const metadata: Metadata = buildMetadata({
  path: "/insurance/home",
  title: service.metaTitle,
  description: service.metaDescription,
});

export default function HomeInsurancePage() {
  return <ServicePageTemplate service={service} />;
}

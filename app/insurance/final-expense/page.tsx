import type { Metadata } from "next";
import { getServiceBySlug } from "@/config/services.config";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { buildMetadata } from "@/lib/seo/metadata";

const service = getServiceBySlug("final-expense")!;

export const metadata: Metadata = buildMetadata({
  path: "/insurance/final-expense",
  title: service.metaTitle,
  description: service.metaDescription,
});

export default function FinalExpenseInsurancePage() {
  return <ServicePageTemplate service={service} />;
}

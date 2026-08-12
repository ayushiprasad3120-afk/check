import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalDoc } from "@/lib/legal/mdx";
import { LegalPageLayout } from "@/components/shared/legal-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "terms-of-service";

export function generateMetadata(): Metadata {
  const doc = getLegalDoc(SLUG);
  return buildMetadata({
    path: "/legal/terms-of-service",
    title: doc?.title ?? "Legal",
    description: doc ? `${doc.title} for InsureDirect.` : undefined,
  });
}

export default function LegalPage() {
  const doc = getLegalDoc(SLUG);
  if (!doc) notFound();
  return <LegalPageLayout title={doc.title} lastUpdated={doc.lastUpdated} content={doc.content} path="/legal/terms-of-service" />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteForm } from "@/components/forms/quote-form";
import { services, getServiceBySlug } from "@/config/services.config";
import { buildMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const p = await params;
  const service = getServiceBySlug(p.service);
  return buildMetadata({
    path: `/quote/${p.service}`,
    title: service ? `Compare ${service.name} Options` : "Compare Insurance Coverage Options",
    description: service?.metaDescription,
  });
}

export default async function ServiceQuotePage({ params }: { params: Promise<{ service: string }> }) {
  const p = await params;
  const service = getServiceBySlug(p.service);
  if (!service) notFound();

  return (
    <SectionContainer>
      <Breadcrumbs
        items={[
          { name: "Insurance", path: "/insurance" },
          { name: service.name, path: `/insurance/${service.slug}` },
          { name: "Get a Quote", path: `/quote/${service.slug}` },
        ]}
      />
      <div className="mx-auto max-w-xl">
        <h1 className="text-display-sm balance text-center">Compare {service.name.toLowerCase()} options</h1>
        <p className="mt-3 text-center text-ink-muted">{service.heroDescription}</p>
        <div className="mt-10">
          <QuoteForm defaultService={service.slug} source={`quote-${service.slug}`} />
        </div>
      </div>
    </SectionContainer>
  );
}

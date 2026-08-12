import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import type { ServiceConfig } from "@/types/service";
import type { StateConfig } from "@/config/states.config";

export function CityPageTemplate({
  service,
  state,
  city,
}: {
  service: ServiceConfig;
  state: StateConfig;
  city: string;
}) {
  const Icon = service.icon;
  const citySlug = city.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Insurance", path: "/insurance" },
          { name: service.name, path: `/insurance/${service.slug}` },
          { name: state.name, path: `/insurance/${service.slug}/${state.slug}` },
          { name: city, path: `/insurance/${service.slug}/${state.slug}/${citySlug}` },
        ])}
      />

      <section className="bg-navy-950 text-white">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { name: "Insurance", path: "/insurance" },
              { name: service.name, path: `/insurance/${service.slug}` },
              { name: state.name, path: `/insurance/${service.slug}/${state.slug}` },
              { name: city, path: `/insurance/${service.slug}/${state.slug}/${citySlug}` },
            ]}
          />
        </div>
        <div className="container pb-16 pt-6 sm:pb-24">
          <div className="max-w-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="text-display-md balance text-white">
              {service.name} in {city}, {state.abbreviation}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Compare {service.shortName.toLowerCase()} coverage options for {city} residents and connect with a
              licensed agent familiar with {state.name} requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/quote/${service.slug}`} variant="emerald" size="lg">
                Compare {city} Options
              </Button>
              <CallButton source="service-page" service={service.slug} variant="outlineLight" size="lg" />
            </div>
          </div>
        </div>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Overview" title={`${service.name} for ${city} residents`} />
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted">{service.overview}</p>
      </SectionContainer>

      <FaqSection items={service.faqs} eyebrow="FAQ" title={`${service.name} questions in ${city}`} />

      <CTASection
        title={`Compare ${service.shortName.toLowerCase()} coverage in ${city}`}
        description="Get connected with a licensed agent — no pressure, no obligation."
        service={service.slug}
        source="service-page"
      />
    </>
  );
}

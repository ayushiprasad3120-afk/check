import { ExternalLink } from "lucide-react";
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

/**
 * One template drives every vertical x state combination. Uniqueness
 * requirement for thin-content avoidance (Part 1, Section 7) is
 * satisfied by requiring `state.legalNotes` or `state.servedCities`
 * before a state is added to states.config.ts in the first place —
 * this template just renders whatever unique data exists.
 */
export function StatePageTemplate({ service, state }: { service: ServiceConfig; state: StateConfig }) {
  const Icon = service.icon;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Insurance", path: "/insurance" },
          { name: service.name, path: `/insurance/${service.slug}` },
          { name: state.name, path: `/insurance/${service.slug}/${state.slug}` },
        ])}
      />

      <section className="bg-navy-950 text-white">
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { name: "Insurance", path: "/insurance" },
              { name: service.name, path: `/insurance/${service.slug}` },
              { name: state.name, path: `/insurance/${service.slug}/${state.slug}` },
            ]}
          />
        </div>
        <div className="container pb-16 pt-6 sm:pb-24">
          <div className="max-w-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="text-display-md balance text-white">
              {service.name} in {state.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              {service.heroDescription} Below is information specific to {state.name}, including a link to the
              state Department of Insurance for official requirements.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/quote/${service.slug}`} variant="emerald" size="lg">
                Compare {state.name} Options
              </Button>
              <CallButton source="service-page" service={service.slug} variant="outlineLight" size="lg" />
            </div>
            <a
              href={state.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-emerald-300 hover:text-emerald-200"
            >
              {state.name} Department of Insurance
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SectionContainer>
        <SectionHeading eyebrow="Overview" title={`How ${service.shortName.toLowerCase()} insurance works in ${state.name}`} />
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-muted">{service.overview}</p>
        {state.legalNotes && (
          <div className="mt-6 max-w-2xl rounded-2xl border border-border bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">{state.name}-specific note</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{state.legalNotes}</p>
          </div>
        )}
      </SectionContainer>

      {state.servedCities.length > 0 && (
        <SectionContainer className="bg-canvas">
          <SectionHeading eyebrow="Cities we serve" title={`${service.name} by city in ${state.name}`} />
          <div className="flex flex-wrap gap-3">
            {state.servedCities.map((city) => (
              <Button
                key={city}
                href={`/insurance/${service.slug}/${state.slug}/${city.toLowerCase().replace(/\s+/g, "-")}`}
                variant="secondary"
                size="sm"
              >
                {city}
              </Button>
            ))}
          </div>
        </SectionContainer>
      )}

      <FaqSection items={service.faqs} eyebrow="FAQ" title={`${service.name} questions in ${state.name}`} />

      <CTASection
        title={`Ready to compare ${service.shortName.toLowerCase()} coverage in ${state.name}?`}
        description="Get connected with a licensed agent in your state — no pressure, no obligation."
        service={service.slug}
        source="service-page"
      />
    </>
  );
}

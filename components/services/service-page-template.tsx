import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { CallButton } from "@/components/shared/call-button";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/marketing/faq-accordion";
import { CTASection } from "@/components/marketing/cta-section";
import { Testimonials } from "@/components/marketing/testimonials";
import { RelatedArticles } from "@/components/blog/related-articles";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo/json-ld";
import { getArticlesByCategory } from "@/lib/blog/mdx";
import type { ServiceConfig } from "@/types/service";

export function ServicePageTemplate({ service }: { service: ServiceConfig }) {
  const relatedArticles = getArticlesByCategory(service.relatedBlogCategory).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="container py-4">
          <Breadcrumbs items={[{ name: "Insurance", path: "/insurance" }, { name: service.name, path: `/insurance/${service.slug}` }]} />
        </div>
        <div className="container pb-16 pt-6 sm:pb-24">
          <div className="max-w-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h1 className="text-display-md balance text-white">{service.name}</h1>
            <p className="mt-3 text-lg text-emerald-300">{service.tagline}</p>
            <p className="mt-5 text-base leading-relaxed text-white/70">{service.heroDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote" variant="emerald" size="lg">
                Compare Coverage Options
              </Button>
              <CallButton source="service-page" service={service.slug} variant="outlineLight" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <SectionContainer>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={`How ${service.shortName.toLowerCase()} insurance works`} className="mb-6" />
            <p className="text-[0.95rem] leading-relaxed text-ink-muted">{service.overview}</p>
          </div>
          <div>
            <h3 className="mb-4 font-display text-lg text-navy-950">What you'll get help with</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="text-[0.95rem] leading-relaxed text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* How it works */}
      <SectionContainer className="bg-canvas">
        <SectionHeading eyebrow="How it works" title="Three simple steps" align="center" />
        <div className="grid gap-6 sm:grid-cols-3">
          {service.howItWorks.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-border bg-surface p-7">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-emerald-700">
                {index + 1}. {step.title}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Coverage options */}
      <SectionContainer>
        <SectionHeading eyebrow="Coverage options" title="What's typically included" />
        <div className="grid gap-5 sm:grid-cols-2">
          {service.coverageOptions.map((option) => (
            <div key={option.name} className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
              <h3 className="font-display text-base text-navy-950">{option.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{option.description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Eligibility */}
      <SectionContainer className="bg-canvas">
        <SectionHeading eyebrow="Eligibility" title="General eligibility information" description="Coverage availability and pricing vary by carrier, state, and your individual circumstances." />
        <ul className="mx-auto max-w-2xl space-y-3">
          {service.eligibilityNotes.map((note) => (
            <li key={note} className="rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed text-ink-muted">
              {note}
            </li>
          ))}
        </ul>
      </SectionContainer>

      <Testimonials filterService={service.slug} />

      <FaqSection items={service.faqs} eyebrow="FAQ" title={`${service.name} questions, answered`} />

      <RelatedArticlesWrapper articles={relatedArticles} />

      <CTASection
        title={`Ready to compare ${service.shortName.toLowerCase()} coverage?`}
        description="Get connected with a licensed agent who can walk you through your options — no pressure, no obligation."
        service={service.slug}
        source="service-page"
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Insurance", path: "/insurance" },
          { name: service.name, path: `/insurance/${service.slug}` },
        ])}
      />
    </>
  );
}

function RelatedArticlesWrapper({ articles }: { articles: ReturnType<typeof getArticlesByCategory> }) {
  if (articles.length === 0) return null;
  return (
    <SectionContainer>
      <RelatedArticles articles={articles} />
    </SectionContainer>
  );
}

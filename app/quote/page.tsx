import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { QuoteForm } from "@/components/forms/quote-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/quote",
  title: "Compare Insurance Coverage Options",
  description: "Share a few details and get connected with a licensed insurance agent — no obligation to buy.",
});

export default function QuotePage() {
  return (
    <SectionContainer>
      <Breadcrumbs items={[{ name: "Get a Quote", path: "/quote" }]} />
      <div className="mx-auto max-w-xl">
        <h1 className="text-display-sm balance text-center">Compare your coverage options</h1>
        <p className="mt-3 text-center text-ink-muted">
          Takes about two minutes. A licensed agent follows up — there's no obligation to purchase anything.
        </p>
        <div className="mt-10">
          <QuoteForm source="quote-page" />
        </div>
      </div>
    </SectionContainer>
  );
}

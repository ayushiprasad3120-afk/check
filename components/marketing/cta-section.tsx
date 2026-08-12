import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/shared/call-button";
import { SectionContainer } from "@/components/shared/section-container";

interface CTASectionProps {
  title: string;
  description: string;
  quoteHref?: string;
  service?: string;
  source?: "cta-section" | "service-page";
}

export function CTASection({
  title,
  description,
  quoteHref = "/quote",
  service,
  source = "cta-section",
}: CTASectionProps) {
  return (
    <SectionContainer as="div" className="bg-canvas">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 to-navy-700 px-8 py-14 text-center sm:px-16">
        <h2 className="text-display-sm balance mx-auto max-w-2xl text-white">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={quoteHref} variant="emerald" size="lg">
            Compare Coverage Options
          </Button>
          <CallButton source={source} service={service} variant="outlineLight" size="lg" />
        </div>
      </div>
    </SectionContainer>
  );
}

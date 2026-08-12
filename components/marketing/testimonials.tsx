import { testimonials } from "@/config/testimonials.config";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedInView } from "@/components/shared/animated-in-view";
import { ReviewCard } from "@/components/marketing/review-card";

export function Testimonials({ filterService }: { filterService?: string }) {
  const items = filterService
    ? testimonials.filter((t) => t.service === filterService)
    : testimonials;

  if (items.length === 0) return null;

  return (
    <SectionContainer className="bg-canvas">
      <SectionHeading
        eyebrow="What people are saying"
        title="Real feedback from people who compared coverage with us."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t, index) => (
          <AnimatedInView key={t.id} delay={index * 0.06}>
            <ReviewCard testimonial={t} />
          </AnimatedInView>
        ))}
      </div>
    </SectionContainer>
  );
}

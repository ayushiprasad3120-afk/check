import { services } from "@/config/services.config";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedInView } from "@/components/shared/animated-in-view";
import { ServiceCard } from "@/components/services/service-card";

export function ServiceCardGrid() {
  return (
    <SectionContainer className="bg-canvas">
      <SectionHeading
        eyebrow="Coverage we help you compare"
        title="Four types of insurance. One clear starting point."
        description="We focus on the coverage most people are actually shopping for — explained without jargon, and without pressure."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <AnimatedInView key={service.slug} delay={index * 0.06}>
            <ServiceCard service={service} />
          </AnimatedInView>
        ))}
      </div>
    </SectionContainer>
  );
}

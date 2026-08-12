import { CoverageArc } from "@/components/shared/coverage-arc";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedInView } from "@/components/shared/animated-in-view";

const steps = [
  {
    step: "Compare",
    title: "Tell us what you're looking for",
    description:
      "Share a few basics about your situation — vehicle, household, home, or coverage goals — so we can point you toward relevant options.",
  },
  {
    step: "Connect",
    title: "Talk to a licensed agent",
    description:
      "We connect you with a licensed insurance professional in your state who can answer specific questions about coverage and pricing.",
  },
  {
    step: "Choose",
    title: "Pick the coverage that fits",
    description:
      "Review your options at your own pace and choose a policy that matches your budget and the protection you actually need.",
  },
];

export function HowItWorks() {
  return (
    <SectionContainer className="bg-navy-950 text-white">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps. No pressure at any of them."
        align="center"
        className="[&_h2]:text-white [&_p]:text-white/70"
      />
      <div className="relative grid gap-8 sm:grid-cols-3">
        <CoverageArc
          variant="divider"
          className="absolute left-0 top-10 hidden text-white sm:block"
        />
        {steps.map((item, index) => (
          <AnimatedInView key={item.step} delay={index * 0.1}>
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-emerald-300">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-xl text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.description}</p>
            </div>
          </AnimatedInView>
        ))}
      </div>
    </SectionContainer>
  );
}

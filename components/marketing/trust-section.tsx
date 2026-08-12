import { ShieldCheck, Eye, Scale, BadgeCheck } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedInView } from "@/components/shared/animated-in-view";

const trustPoints = [
  {
    icon: Eye,
    title: "Transparent, not salesy",
    description:
      "We explain how coverage works and what affects your cost before any conversation with an agent — no pressure tactics, no bait-and-switch quotes.",
  },
  {
    icon: Scale,
    title: "Compare, don't guess",
    description:
      "See coverage types side by side in plain language so you know what questions to ask before you commit to a policy.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed partners only",
    description:
      "Every agent you're connected with is licensed in your state. We are not an insurance carrier and never issue policies ourselves.",
  },
  {
    icon: ShieldCheck,
    title: "Your data, protected",
    description:
      "We only share your information with the licensed agents helping you — reviewed in full in our Privacy Policy.",
  },
];

export function TrustSection() {
  return (
    <SectionContainer>
      <SectionHeading
        eyebrow="Why people use InsureDirect"
        title="Built to inform you, not just convert you."
        description="Most insurance sites are optimized to get you on the phone as fast as possible. We'd rather you understand what you're comparing first."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <AnimatedInView key={point.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base text-navy-950">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.description}</p>
              </div>
            </AnimatedInView>
          );
        })}
      </div>
    </SectionContainer>
  );
}

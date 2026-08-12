import type { LucideIcon } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedInView } from "@/components/shared/animated-in-view";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ eyebrow, title, description, features, columns = 3 }: FeatureGridProps) {
  const colClass = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";

  return (
    <SectionContainer>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className={`grid gap-6 ${colClass}`}>
        {features.map((f, index) => {
          const Icon = f.icon;
          return (
            <AnimatedInView key={f.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 shadow-soft">
                <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-4 font-display text-base text-navy-950">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.description}</p>
              </div>
            </AnimatedInView>
          );
        })}
      </div>
    </SectionContainer>
  );
}

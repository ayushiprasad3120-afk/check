import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { TextReveal } from "./text-reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <TextReveal
        as="h2"
        text={title}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] text-balance text-charcoal dark:text-cream"
      />
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-5 text-base md:text-lg text-charcoal/70 dark:text-cream/70 leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-beige via-cream to-cream dark:from-charcoal dark:via-soot dark:to-soot" />
      <div className="absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-wine/10 blur-[110px] -z-10" />
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
        </Reveal>
        <TextReveal
          as="h1"
          text={title}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.06] text-balance max-w-3xl text-charcoal dark:text-cream"
        />
        {description && (
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-charcoal/70 dark:text-cream/70">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

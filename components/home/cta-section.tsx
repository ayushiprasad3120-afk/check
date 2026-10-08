import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <div className="relative rounded-xl2 overflow-hidden bg-wine px-8 py-16 md:px-20 md:py-24 text-center">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-burgundy/60 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-soot/40 blur-[100px]" />
          <div className="relative">
            <TextReveal
              as="h2"
              text="Ready to scale performance that actually performs?"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-cream max-w-2xl mx-auto text-balance"
            />
            <Reveal delay={0.3}>
              <p className="mt-6 text-cream/70 max-w-lg mx-auto">
                Join advertisers and publishers who chose transparency over volume.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/advertisers" variant="secondary" className="!bg-cream !text-wine !border-cream hover:!bg-sand">
                  Become an Advertiser
                </Button>
                <Button href="/publishers" variant="secondary" className="!border-cream/40 !text-cream hover:!border-cream">
                  Become a Publisher
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

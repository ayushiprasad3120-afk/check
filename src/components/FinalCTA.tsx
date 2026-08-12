import CallButton from "./CallButton";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-[var(--color-blue-primary)] to-[var(--color-navy-deep)]">
      <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
          Ready to Explore Your Auto Insurance Options?
        </h2>
        <p className="mt-3 text-white/75 max-w-xl mx-auto">
          Get started online or speak with an insurance professional to discuss coverage options
          that may fit your needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center rounded-full bg-white text-[var(--color-navy-deep)] font-display font-semibold px-8 py-3.5 hover:bg-[var(--color-beige-warm)] transition-colors"
          >
            Get Started
          </a>
          <CallButton variant="primary" className="!bg-transparent !border-2 !border-white hover:!bg-white/10" />
        </div>
      </div>
    </section>
  );
}

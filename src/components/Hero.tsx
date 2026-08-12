import CallButton from "./CallButton";
import CarIllustration from "./CarIllustration";

export default function Hero() {
  return (
    <section
      id="coverage-hero"
      className="relative overflow-hidden bg-gradient-to-b from-[var(--color-beige-warm)] to-[var(--color-cream)]"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-wide uppercase text-[var(--color-blue-primary)] shadow-sm mb-5">
              Serving U.S. Drivers
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] text-[var(--color-navy-deep)]">
              Find Auto Insurance Options That Fit Your Needs
            </h1>
            <p className="mt-5 text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
              Tell us a little about yourself and your vehicle. We&rsquo;ll help connect you with
              auto insurance options that may fit your needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy-deep)] text-white font-display font-semibold px-7 py-3.5 hover:bg-[var(--color-blue-primary)] transition-colors shadow-lg shadow-blue-900/10"
              >
                Get Started
              </a>
              <CallButton variant="secondary" />
            </div>

            <p className="mt-6 text-xs text-[var(--color-text-muted)] max-w-md">
              Coverage availability, limits, deductibles, eligibility, and premiums vary by
              state, insurer, driver, vehicle, and individual circumstances.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[var(--color-blue-sky)]/20 to-[var(--color-beige-warm)] rounded-[2.5rem] blur-2xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-950/10 bg-white p-3">
              <CarIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

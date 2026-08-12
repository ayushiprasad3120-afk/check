const COVERAGE_TYPES = [
  {
    title: "Liability Coverage",
    body: "Helps cover certain costs when you are legally responsible for injuries or property damage to others.",
  },
  {
    title: "Collision Coverage",
    body: "May help pay for covered damage to your vehicle resulting from a collision, subject to policy terms and deductible.",
  },
  {
    title: "Comprehensive Coverage",
    body: "May help cover certain non-collision losses such as theft, vandalism, fire, or weather-related damage, subject to policy terms and deductible.",
  },
  {
    title: "Uninsured / Underinsured Motorist Coverage",
    body: "May help protect you when an at-fault driver has insufficient or no insurance, depending on your state and policy.",
  },
  {
    title: "Medical Payments / Personal Injury Protection",
    body: "Availability and requirements for medical payments or personal injury protection coverage vary by state.",
  },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            Understanding Auto Insurance Coverage
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)]">
            A quick, plain-language look at common types of auto insurance coverage. This is
            educational information — not an actual quote or binding insurance offer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COVERAGE_TYPES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[var(--color-navy-deep)]/10 bg-[var(--color-cream)] p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-lg font-bold text-[var(--color-navy-deep)] mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)] max-w-2xl border-l-4 border-[var(--color-blue-sky)] pl-4">
          Coverage availability, limits, deductibles, eligibility, and premiums vary by state,
          insurer, driver, vehicle, and individual circumstances.
        </p>
      </div>
    </section>
  );
}

import { ADVERTISER_NAME } from "../config/campaign";

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Yourself",
    body: "Complete a short form with basic information about you and your vehicle.",
  },
  {
    number: "02",
    title: "Get Connected",
    body: "We help connect you with an insurance professional or participating provider.",
  },
  {
    number: "03",
    title: "Explore Your Options",
    body: "Discuss available coverage options and pricing based on your situation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[var(--color-cream)] to-[var(--color-beige-warm)]/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {STEPS.map((s) => (
            <div key={s.number} className="relative">
              <span className="font-display text-5xl font-extrabold text-[var(--color-blue-sky)]/50">
                {s.number}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-[var(--color-navy-deep)]">
                {s.title}
              </h3>
              <p className="mt-2 text-[var(--color-text-muted)] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-[var(--color-text-muted)] max-w-2xl mx-auto text-center">
          {ADVERTISER_NAME} is a marketing and lead-generation service and does not itself
          underwrite insurance policies unless expressly stated.
        </p>
      </div>
    </section>
  );
}

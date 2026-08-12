import QuoteForm from "./QuoteForm";

export default function QuoteFormSection() {
  return (
    <section id="quote-form" className="bg-[var(--color-cream)]">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
            Explore Your Auto Insurance Options
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)] max-w-xl mx-auto">
            Answer a few quick questions to get connected with an insurance professional.
          </p>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

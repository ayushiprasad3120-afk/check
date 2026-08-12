const CARDS = [
  {
    title: "Simple Process",
    body: "A streamlined way to begin exploring auto insurance options.",
    icon: (
      <path d="M4 12h16M4 6h16M4 18h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    ),
  },
  {
    title: "Personalized Assistance",
    body: "Get connected with professionals who can discuss coverage options.",
    icon: (
      <path
        d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-7 8-7s8 3 8 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Secure Experience",
    body: "We use industry-standard safeguards to help protect the information you share with us.",
    icon: (
      <path
        d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Built for U.S. Drivers",
    body: "Designed specifically for consumers shopping for personal auto insurance in the United States.",
    icon: (
      <path
        d="M4 11l1.5-4.5A2 2 0 017.4 5h9.2a2 2 0 011.9 1.5L20 11m-16 0h16m-16 0v6a1 1 0 001 1h1a1 1 0 001-1v-1h10v1a1 1 0 001 1h1a1 1 0 001-1v-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] text-center mb-12">
          Why Start With InsureDirect?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((c) => (
            <div key={c.title} className="text-center rounded-2xl border border-[var(--color-navy-deep)]/10 p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-beige-warm)] text-[var(--color-blue-primary)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {c.icon}
                </svg>
              </div>
              <h3 className="font-display font-bold text-[var(--color-navy-deep)]">{c.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

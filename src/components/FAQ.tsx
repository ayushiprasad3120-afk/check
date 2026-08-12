import { useState } from "react";
import { ADVERTISER_NAME } from "../config/campaign";

const FAQS = [
  {
    q: "Is InsureDirect an insurance company?",
    a: `${ADVERTISER_NAME} is designed as an insurance connection and lead-generation service. Unless otherwise stated, it does not itself underwrite or issue insurance policies.`,
  },
  {
    q: "Will I get an instant quote?",
    a: "Not necessarily. Depending on your information and participating providers, you may be connected with an insurance professional who can discuss available options.",
  },
  {
    q: "Does auto insurance cost the same in every state?",
    a: "No. Auto insurance requirements, coverage options, eligibility criteria, and premiums vary by state and individual circumstances.",
  },
  {
    q: "Does submitting the form guarantee coverage?",
    a: "No. Submission does not guarantee eligibility, coverage, approval, or a particular premium.",
  },
  {
    q: "Can I call instead?",
    a: "Yes. Use the Call Now button to speak with the available insurance representative or participating service.",
  },
  {
    q: "Does completing the form affect my credit?",
    a: "Whether a quote process involves a credit-based insurance score or other consumer information depends on the insurer, state, and applicable underwriting process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--color-beige-warm)]/40">
      <div className="mx-auto max-w-3xl px-5 lg:px-8 py-16 lg:py-20">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)] text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q} className="rounded-2xl bg-white border border-[var(--color-navy-deep)]/10 overflow-hidden">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-display font-semibold text-[var(--color-navy-deep)] hover:bg-[var(--color-beige-warm)]/40 transition-colors"
                  >
                    <span>{item.q}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-4 text-[var(--color-text-muted)] leading-relaxed text-sm"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

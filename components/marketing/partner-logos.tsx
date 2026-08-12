import { SectionContainer } from "@/components/shared/section-container";

const partners = ["Carrier Network A", "Carrier Network B", "Carrier Network C", "Carrier Network D", "Carrier Network E"];

/**
 * Generic wordmark placeholders — swap for real, disclosed carrier/partner
 * logos only once actual partnerships are confirmed, to avoid implying
 * unearned affiliations.
 */
export function PartnerLogos() {
  return (
    <SectionContainer className="py-10 sm:py-14">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-ink-faint">
        Connecting you with licensed agents across carrier networks including
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {partners.map((name) => (
          <span key={name} className="font-display text-sm text-ink-muted">
            {name}
          </span>
        ))}
      </div>
    </SectionContainer>
  );
}

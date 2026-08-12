import { CALL_NUMBER_TEL, handleCallClick } from "../lib/phone";

export default function MobileStickyCall() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-[var(--color-navy-deep)] border-t border-white/10 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
      <a
        href={CALL_NUMBER_TEL}
        onClick={handleCallClick}
        className="flex items-center justify-center gap-2 py-3.5 px-4 font-display font-semibold text-white text-sm"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
            fill="currentColor"
          />
        </svg>
        Call Now — Speak With an Insurance Specialist
      </a>
    </div>
  );
}

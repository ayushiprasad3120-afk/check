import { CALL_NUMBER, CALL_NUMBER_TEL, handleCallClick } from "../lib/phone";

interface CallButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "sticky";
  className?: string;
  showNumber?: boolean;
}

const VARIANT_CLASSES: Record<NonNullable<CallButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-blue-primary)] text-white hover:bg-[var(--color-navy-deep)] shadow-lg shadow-blue-900/10",
  secondary:
    "bg-white text-[var(--color-navy-deep)] border-2 border-[var(--color-navy-deep)] hover:bg-[var(--color-beige-warm)]",
  ghost:
    "bg-transparent text-[var(--color-navy-deep)] hover:bg-[var(--color-beige-warm)] border border-[var(--color-navy-deep)]/20",
  sticky: "bg-[var(--color-blue-primary)] text-white",
};

export default function CallButton({
  label = "Call Now",
  variant = "primary",
  className = "",
  showNumber = false,
}: CallButtonProps) {
  return (
    <a
      href={CALL_NUMBER_TEL}
      onClick={handleCallClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display font-semibold text-base transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className}`}
      aria-label={`${label}, ${CALL_NUMBER}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.9 21 3 13.1 3 3.3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
          fill="currentColor"
        />
      </svg>
      <span>
        {label}
        {showNumber ? ` — ${CALL_NUMBER}` : ""}
      </span>
    </a>
  );
}

import { cn } from "@/lib/utils/cn";

/**
 * Signature visual device: a thin guiding arc, evoking a compass bearing
 * toward the right coverage. Used once, prominently, behind the hero
 * headline, and echoed quietly as a section-divider rule — restrained
 * rather than repeated as decoration on every card.
 */
export function CoverageArc({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "divider";
}) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 200 24"
        className={cn("h-6 w-full", className)}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 Q 100 -4 200 20"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.35"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 600 600"
      className={cn("pointer-events-none absolute", className)}
      aria-hidden="true"
    >
      <circle
        cx="300"
        cy="300"
        r="260"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M60 300 A 240 240 0 0 1 460 130"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeDasharray="4 7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="460" cy="130" r="4" fill="currentColor" fillOpacity="0.7" />
    </svg>
  );
}

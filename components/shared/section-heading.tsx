import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-display-md balance">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}

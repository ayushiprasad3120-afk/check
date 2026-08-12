import * as React from "react";
import { cn } from "@/lib/utils/cn";

const variants = {
  navy: "bg-navy-50 text-navy-900",
  emerald: "bg-emerald-50 text-emerald-700",
  royal: "bg-royal-50 text-royal-700",
  outline: "border border-border-strong text-ink-muted",
} as const;

export function Badge({
  variant = "navy",
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

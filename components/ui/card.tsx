import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  children,
  as: Comp = "div",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { as?: React.ElementType }) {
  return (
    <Comp
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow duration-200",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-display text-lg text-navy-950", className)} {...props} />;
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-[0.95rem] leading-relaxed text-ink-muted", className)} {...props} />;
}

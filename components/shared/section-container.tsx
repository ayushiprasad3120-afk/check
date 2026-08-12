import * as React from "react";
import { cn } from "@/lib/utils/cn";

export function SectionContainer({
  className,
  as: Comp = "section",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  return (
    <Comp className={cn("py-16 sm:py-24", className)} {...props}>
      <div className="container">{children}</div>
    </Comp>
  );
}

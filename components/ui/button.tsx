import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-offset-4";

  const variants = {
    primary:
      "bg-wine text-cream hover:bg-burgundy shadow-soft hover:shadow-glow hover:-translate-y-0.5",
    secondary:
      "border border-charcoal/20 dark:border-cream/20 text-charcoal dark:text-cream hover:border-wine hover:text-wine dark:hover:text-cream dark:hover:bg-white/5",
    ghost: "text-charcoal dark:text-cream hover:text-wine",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}

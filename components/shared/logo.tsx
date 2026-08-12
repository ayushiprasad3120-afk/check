import Link from "next/link";
import { brand } from "@/config/brand.config";
import { cn } from "@/lib/utils/cn";

export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${brand.brandName} — Home`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2 L28 7.5 V15 C28 22.5 22.8 27.8 16 30 C9.2 27.8 4 22.5 4 15 V7.5 Z"
          fill={variant === "light" ? "white" : "#0B1E3C"}
        />
        <path
          d="M11 16 L14.2 19.2 L21.5 11.5"
          stroke={variant === "light" ? "#0B1E3C" : "#0E9F6E"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        className={cn(
          "font-display text-lg font-semibold tracking-tight",
          variant === "light" ? "text-white" : "text-navy-950"
        )}
      >
        {brand.brandName}
      </span>
    </Link>
  );
}

"use client";

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.14em] text-charcoal/55 dark:text-cream/55 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-xl border border-charcoal/15 dark:border-cream/15 bg-white/60 dark:bg-white/[0.04] px-4 py-3 text-sm text-charcoal dark:text-cream placeholder:text-charcoal/35 dark:placeholder:text-cream/35 focus:outline-none focus:border-wine transition-colors";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, required, ...props }, ref) => {
    const inputId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-navy-950">
          {label}
          {required && <span className="text-royal-500" aria-hidden="true"> *</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : hint ? hintId : undefined}
          className={cn(
            "w-full rounded-xl border border-border-strong bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-ink-faint transition-colors",
            "focus:border-royal-500 focus:outline-none",
            error && "border-red-400 focus:border-red-500",
            className
          )}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-xs text-ink-muted">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

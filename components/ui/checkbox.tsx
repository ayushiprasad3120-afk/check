import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const fieldId = id ?? "checkbox-consent";
    const errorId = `${fieldId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start gap-3">
          <input
            ref={ref}
            id={fieldId}
            type="checkbox"
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "mt-0.5 h-4 w-4 shrink-0 rounded border-border-strong text-emerald-700 focus:ring-2 focus:ring-royal-500 focus:ring-offset-1",
              className
            )}
            {...props}
          />
          <label htmlFor={fieldId} className="text-xs leading-relaxed text-ink-muted">
            {label}
          </label>
        </div>
        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

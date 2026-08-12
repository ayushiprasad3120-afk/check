import * as React from "react";
import { cn } from "@/lib/utils/cn";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, required, className, ...props }, ref) => {
    const fieldId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${fieldId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={fieldId} className="text-sm font-medium text-navy-950">
          {label}
          {required && <span className="text-royal-500" aria-hidden="true"> *</span>}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          required={required}
          rows={5}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full resize-y rounded-xl border border-border-strong bg-white px-4 py-3 text-[0.95rem] text-navy-950 placeholder:text-ink-faint transition-colors",
            "focus:border-royal-500 focus:outline-none",
            error && "border-red-400 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

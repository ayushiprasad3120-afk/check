import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, placeholder, id, required, className, ...props }, ref) => {
    const selectId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={selectId} className="text-sm font-medium text-navy-950">
          {label}
          {required && <span className="text-royal-500" aria-hidden="true"> *</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            defaultValue=""
            className={cn(
              "w-full appearance-none rounded-xl border border-border-strong bg-white px-4 py-3 pr-10 text-[0.95rem] text-navy-950 transition-colors",
              "focus:border-royal-500 focus:outline-none",
              error && "border-red-400 focus:border-red-500",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
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
Select.displayName = "Select";

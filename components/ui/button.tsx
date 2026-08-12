import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const variantStyles = {
  primary:
    "bg-navy-950 text-white hover:bg-navy-900 shadow-soft hover:shadow-card",
  secondary:
    "bg-white text-navy-950 border border-border-strong hover:border-navy-950",
  emerald:
    "bg-emerald text-white hover:bg-emerald-700 shadow-soft hover:shadow-card",
  ghost: "bg-transparent text-navy-950 hover:bg-navy-50",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[0.95rem]",
  lg: "px-7 py-4 text-base",
} as const;

type ButtonVariant = keyof typeof variantStyles;
type ButtonSize = keyof typeof sizeStyles;

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantStyles[variant], sizeStyles[size], className);
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}

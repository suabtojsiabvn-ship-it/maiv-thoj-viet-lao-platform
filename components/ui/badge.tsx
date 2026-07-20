import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "bg-slate-800 text-slate-200",

  outline:
    "border border-slate-700 bg-transparent text-slate-300",

  cyan:
    "border border-cyan-500/20 bg-cyan-500/10 text-cyan-300",

  gold:
    "border border-primary/30 bg-primary/10 text-gold-soft",

  success:
    "border border-emerald-500/20 bg-emerald-500/10 text-emerald-300",

  warning:
    "border border-amber-500/20 bg-amber-500/10 text-amber-300",

  destructive:
    "border border-red-500/20 bg-red-500/10 text-red-300",
} as const;

const badgeSizes = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
} as const;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof badgeVariants;
  size?: keyof typeof badgeSizes;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium transition-colors",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

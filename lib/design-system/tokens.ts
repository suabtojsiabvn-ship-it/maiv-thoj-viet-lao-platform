export const sectionSpacing = {
  sm: "py-16",
  md: "py-20",
  lg: "py-24",
} as const;

export const radius = {
  xs: "rounded-lg",
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
  full: "rounded-full",
} as const;

export const shadow = {
  sm: "shadow-sm",
  md: "shadow-lg",
  lg: "shadow-xl",
} as const;

export const transition = {
  default: "transition-all duration-300",
} as const;

export const border = {
  default: "border-white/10",
  accent: "border-cyan-500/20",
} as const;

export const text = {
  primary: "text-slate-900",
  secondary: "text-slate-600",
  muted: "text-slate-500",
  inverse: "text-white",
} as const;

export const background = {
  dark: "bg-slate-950",
  light: "bg-slate-50",
  accent: "bg-cyan-500/5",
} as const;
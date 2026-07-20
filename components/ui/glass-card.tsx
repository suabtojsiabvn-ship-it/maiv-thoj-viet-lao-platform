import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends ComponentProps<"div"> {
  tone?: "dark" | "light";
}

export function GlassCard({
  className,
  children,
  tone = "dark",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-1",
        tone === "light"
          ? "border-primary/15 bg-white/70 shadow-black/5 hover:border-primary/40 hover:bg-white"
          : "border-primary/15 bg-card/70 shadow-black/20 hover:border-primary/40 hover:bg-secondary/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

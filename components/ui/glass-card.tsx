import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = ComponentProps<"div">;

export function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
import * as React from "react";

import { GlassCard } from "./glass-card";
import { cn } from "@/lib/utils";

interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <GlassCard
      className={cn(
        `
        group
        h-full
        p-8
        `,
        className
      )}
      {...props}
    >
      <div
        className="
        mb-6
        inline-flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-cyan-500/10
        text-cyan-400
        transition-transform
        duration-500
        group-hover:scale-110
        "
      >
        {icon}
      </div>

      <h3
        className="
        text-xl
        font-semibold
        text-white
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-4
        leading-7
        text-slate-400
        "
      >
        {description}
      </p>
    </GlassCard>
  );
}
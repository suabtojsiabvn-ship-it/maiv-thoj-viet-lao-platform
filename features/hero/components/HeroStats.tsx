"use client";

import type { HeroStat } from "../types/hero.types";

interface HeroStatsProps {
  stats: HeroStat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3">
      {stats.map((stat, index) => (
        <div
          key={stat.key}
          className={[
            "h-full rounded-2xl border border-primary/15 bg-background/65 px-3 py-3.5 text-center backdrop-blur sm:px-4",
            index === stats.length - 1 ? "col-span-2" : "",
          ].join(" ")}
        >
          <div className="text-xl font-bold text-primary sm:text-2xl">
            {stat.value}
          </div>

          <p className="mt-1 text-[0.7rem] leading-4 text-muted-foreground sm:text-xs">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { FadeUp, MotionItem, MotionList } from "@/components/motion";

import type { HeroStat } from "../types/hero.types";

interface HeroStatsProps {
  stats: HeroStat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <FadeUp delay={0.5}>
      <MotionList className="mt-10 grid w-full max-w-3xl grid-cols-3 gap-2 sm:gap-6 md:mt-12 md:gap-8">
        {stats.map((stat) => (
          <MotionItem key={stat.key}>
            <div className="rounded-2xl border border-primary/10 bg-card/40 px-2 py-4 sm:px-4">
              <div className="text-2xl font-bold text-primary sm:text-3xl">
                {stat.value}
              </div>

              <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          </MotionItem>
        ))}
      </MotionList>
    </FadeUp>
  );
}

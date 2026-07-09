"use client";

import { FadeUp, MotionItem, MotionList } from "@/components/motion";

import type { HeroStat } from "../types/hero.types";

interface HeroStatsProps {
  stats: HeroStat[];
}

export function HeroStats({ stats }: HeroStatsProps) {
  return (
    <FadeUp delay={0.5}>
      <MotionList className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-8">
        {stats.map((stat) => (
          <MotionItem key={stat.key}>
            <div>
              <div className="text-3xl font-bold text-cyan-400">
                {stat.value}
              </div>

              <p className="mt-2 text-sm text-slate-400">
                {stat.label}
              </p>
            </div>
          </MotionItem>
        ))}
      </MotionList>
    </FadeUp>
  );
}
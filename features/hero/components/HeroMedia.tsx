"use client";

import Image from "next/image";

import { FadeUp } from "@/components/motion";
import { brand } from "@/content/branding";

import { HeroStats } from "./HeroStats";

import type { HeroStat } from "../types/hero.types";

interface HeroMediaProps {
  badge: string;
  stats: HeroStat[];
}

export function HeroMedia({ badge, stats }: HeroMediaProps) {
  return (
    <FadeUp delay={0.2}>
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-primary/25 bg-card/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-7 lg:max-w-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-emerald/10" />
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary/20" />
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/15" />

        <div className="relative flex min-h-[21rem] flex-col justify-between sm:min-h-[24rem]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {brand.name}
              </p>
              <div className="mt-3 h-px w-20 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <span className="max-w-[58%] rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-right text-[0.65rem] font-semibold leading-4 text-gold-soft">
              {badge}
            </span>
          </div>

          <div className="relative mx-auto my-7 h-36 w-36 sm:h-44 sm:w-44">
            <div className="absolute inset-2 rounded-full bg-primary/15 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-primary/35 bg-background/70 p-3 shadow-2xl shadow-primary/10">
              <Image
                src="/images/logo.png"
                alt=""
                fill
                priority
                sizes="(min-width: 640px) 176px, 144px"
                className="object-contain p-2"
              />
            </div>
          </div>

          <HeroStats stats={stats} />
        </div>
      </div>
    </FadeUp>
  );
}

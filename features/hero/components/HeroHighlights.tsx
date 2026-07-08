"use client";

import type { LucideIcon } from "lucide-react";

import { MotionItem, MotionList } from "@/components/motion";

interface HeroHighlight {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface HeroHighlightsProps {
  highlights: HeroHighlight[];
}

export function HeroHighlights({
  highlights,
}: HeroHighlightsProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-6">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Why patients feel safe
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          A complete team for your journey
        </h2>
      </div>

      <MotionList className="grid gap-4">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <MotionItem key={item.key}>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 transition hover:border-cyan-400/40 hover:bg-slate-900/80">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionItem>
          );
        })}
      </MotionList>
    </div>
  );
}
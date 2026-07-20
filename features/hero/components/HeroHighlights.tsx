"use client";

import { MotionItem, MotionList } from "@/components/motion";
import type {
  HeroHighlights as HeroHighlightsViewModel,
} from "../types/hero.types";

export function HeroHighlights({
  sectionLabel,
  heading,
  items,
}: HeroHighlightsViewModel) {
  return (
    <div className="mt-12 w-full rounded-[1.75rem] border border-primary/20 bg-card/75 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-5 md:mt-14 md:rounded-[2rem] md:p-6">
      <div className="mb-5 md:mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm sm:tracking-[0.25em]">
          {sectionLabel}
        </p>

        <h2 className="mt-3 font-heading text-2xl font-bold text-foreground md:text-3xl">
          {heading}
        </h2>
      </div>

      <MotionList className="grid gap-3 md:grid-cols-2 md:gap-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <MotionItem key={item.key}>
              <div className="h-full rounded-2xl border border-primary/15 bg-background/65 p-4 text-left transition duration-300 hover:border-primary/40 hover:bg-secondary/80 sm:p-5">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
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

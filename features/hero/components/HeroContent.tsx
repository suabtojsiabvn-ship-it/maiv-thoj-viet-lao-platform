"use client";

import { FadeDown, FadeUp } from "@/components/motion";
import { Badge } from "@/components/ui";

import { heroContentConfig } from "../data/hero-content";

interface HeroContentProps {
  badge: string;
  title: {
    line1: string;
    line2: string;
  };
  subtitle: string;
}

export function HeroContent({ badge, title, subtitle }: HeroContentProps) {
  return (
    <div
      aria-labelledby={heroContentConfig.titleId}
      className="flex flex-col items-center lg:items-start"
    >
      <FadeDown>
        <Badge
          variant="gold"
          className="max-w-full px-4 py-1.5 text-center leading-5 lg:text-left"
        >
          {badge}
        </Badge>
      </FadeDown>

      <FadeUp delay={0.1}>
        <h1
          id={heroContentConfig.titleId}
          className="mt-6 max-w-3xl text-balance font-heading text-[clamp(2.35rem,8vw,4.75rem)] font-bold leading-[1.04] tracking-[-0.025em] md:mt-7 lg:text-left"
        >
          <span className="block text-primary">{title.line1}</span>

          <span className="mt-1 block text-foreground">{title.line2}</span>
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground md:mt-6 md:text-lg md:leading-8 lg:text-left">
          {subtitle}
        </p>
      </FadeUp>
    </div>
  );
}

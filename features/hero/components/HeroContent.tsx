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

export function HeroContent({
  badge,
  title,
  subtitle,
}: HeroContentProps) {
  return (
    <div aria-labelledby={heroContentConfig.titleId}>
      <FadeDown>
        <Badge variant="cyan">{badge}</Badge>
      </FadeDown>

      <FadeUp delay={0.1}>
        <h1
          id={heroContentConfig.titleId}
          className="mt-8 font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          {title.line1}
          <br />
          {title.line2}
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          {subtitle}
        </p>
      </FadeUp>
    </div>
  );
}
"use client";

import Link from "next/link";

import {
  FadeDown,
  FadeUp,
  HoverScale,
  MotionItem,
  MotionList,
} from "@/components/motion";

import { Badge, Button } from "@/components/ui";

import { heroContent } from "../data/hero-content";
import { heroHighlights } from "../data/hero-highlights";
import { heroStats } from "../data/hero-stats";

export function HeroContent() {
  return (
    <div
      className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      aria-labelledby="hero-title"
    >
      <FadeDown>
        <Badge variant="cyan">
          {heroContent.badge}
        </Badge>
      </FadeDown>

      <FadeUp delay={0.1}>
        <h1
          id="hero-title"
          className="mt-8 font-heading text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          {heroContent.title.line1}
          <br />
          {heroContent.title.line2}
        </h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          {heroContent.subtitle}
        </p>
      </FadeUp>

      <FadeUp delay={0.3}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          {heroContent.actions.map((action) => (
            <HoverScale key={action.label}>
              <Button
                asChild
                variant={
                  action.variant === "primary"
                    ? "default"
                    : "outline"
                }
                size="lg"
              >
                <Link href={action.href}>
                  {action.label}
                </Link>
              </Button>
            </HoverScale>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.4}>
        <MotionList className="mt-12 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heroHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <MotionItem key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-sm">
                  <Icon className="h-6 w-6 text-cyan-400" />

                  <h3 className="mt-4 text-base font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </MotionItem>
            );
          })}
        </MotionList>
      </FadeUp>

      <FadeUp delay={0.5}>
        <MotionList className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-8">
          {heroStats.map((stat) => (
            <MotionItem key={stat.label}>
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
    </div>
  );
}
"use client";

import Link from "next/link";

import { FadeUp, HoverScale } from "@/components/motion";
import { Button } from "@/components/ui";

import type { HeroAction } from "../types/hero.types";

interface HeroActionsProps {
  actions: HeroAction[];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <FadeUp delay={0.3}>
      <div className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4 md:mt-10">
        {actions.map((action) => (
          <div
            key={action.key}
            className="w-full sm:w-auto"
          >
            <HoverScale>
              <Button
                asChild
                variant={
                  action.variant === "primary" ? "default" : "outline"
                }
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href={action.href}>{action.label}</Link>
              </Button>
            </HoverScale>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}

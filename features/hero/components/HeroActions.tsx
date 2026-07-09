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
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        {actions.map((action) => (
          <HoverScale key={action.key}>
            <Button
              asChild
              variant={
                action.variant === "primary" ? "default" : "outline"
              }
              size="lg"
            >
              <Link href={action.href}>{action.label}</Link>
            </Button>
          </HoverScale>
        ))}
      </div>
    </FadeUp>
  );
}
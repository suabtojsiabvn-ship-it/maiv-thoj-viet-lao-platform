"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { FadeUp, HoverScale } from "@/components/motion";
import { Button } from "@/components/ui";

import type { HeroAction } from "../types/hero.types";

interface HeroActionsProps {
  actions: HeroAction[];
}

export function HeroActions({ actions }: HeroActionsProps) {
  return (
    <FadeUp delay={0.3}>
      <div className="mx-auto mt-7 flex w-full max-w-xl flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4 md:mt-8 lg:mx-0">
        {actions.map((action) => {
          const Icon = action.key === "primary" ? ArrowRight : MessageCircle;

          return (
            <div key={action.key} className="w-full sm:w-auto">
              <HoverScale>
                <Button
                  asChild
                  variant={action.variant === "primary" ? "default" : "outline"}
                  size="lg"
                  className="h-12 w-full rounded-full px-6 sm:w-auto"
                >
                  <Link href={action.href}>
                    <span>{action.label}</span>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </HoverScale>
            </div>
          );
        })}
      </div>
    </FadeUp>
  );
}

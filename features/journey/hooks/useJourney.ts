"use client";

import {
  useCurrentLocale,
  useDictionary,
} from "@/hooks/useDictionary";

import type { JourneyStep } from "../types/journey.types";

export function useJourney() {
  const locale = useCurrentLocale();
  const { journey } = useDictionary();

  const steps: JourneyStep[] = journey.steps;

  return {
    journey: {
      badge: journey.badge,
      heading: journey.heading,
      intro: journey.intro,
      steps,
      cta: {
        label: journey.cta.label,
        href: `/${locale}/booking`,
      },
    },
  };
}
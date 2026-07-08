"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { journeyStepsMeta } from "../data/journey-content";
import type {
  JourneyContentData,
  JourneyStep,
} from "../types/journey.types";

export function useJourney() {
  const { journey } = useDictionary();

  const steps: JourneyStep[] = journeyStepsMeta.map((meta) => ({
    id: meta.id,
    icon: meta.icon,
    title: journey.steps[meta.id].title,
    description: journey.steps[meta.id].description,
  }));

  const content: JourneyContentData = {
    badge: journey.badge,
    heading: journey.heading,
    intro: journey.intro,
    steps,
    cta: {
      label: journey.cta.label,
      href: "/booking",
    },
  };

  return {
    journey: content,
  };
}
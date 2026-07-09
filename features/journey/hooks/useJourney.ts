"use client";

import { useDictionary } from "@/hooks/useDictionary";

import type {
  JourneyIcon,
  JourneyStep,
  JourneyStepKey,
} from "../types/journey.types";

const STEP_META: ReadonlyArray<{
  id: JourneyStepKey;
  icon: JourneyIcon;
}> = [
  {
    id: "consultation",
    icon: "message-circle",
  },
  {
    id: "plan",
    icon: "clipboard-list",
  },
  {
    id: "travel",
    icon: "plane-takeoff",
  },
  {
    id: "pickup",
    icon: "car",
  },
  {
    id: "treatment",
    icon: "stethoscope",
  },
  {
    id: "recovery",
    icon: "heart-pulse",
  },
  {
    id: "return",
    icon: "house",
  },
];

export function useJourney() {
  const { journey } = useDictionary();

  const steps: JourneyStep[] = STEP_META.map((step) => ({
    id: step.id,
    icon: step.icon,
    title: journey.steps[step.id].title,
    description: journey.steps[step.id].description,
  }));

  return {
    journey: {
      badge: journey.badge,
      heading: journey.heading,
      intro: journey.intro,

      steps,

      cta: {
        label: journey.cta.label,
        href: "/booking",
      },
    },
  };
}
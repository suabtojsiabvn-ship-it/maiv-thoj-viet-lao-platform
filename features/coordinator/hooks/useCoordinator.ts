"use client";

import { people } from "@/content/business";
import { useDictionary } from "@/hooks/useDictionary";

import type {
  CoordinatorService,
  CoordinatorServiceId,
  CoordinatorViewModel,
  UseCoordinatorResult,
} from "../types/coordinator.types";

const coordinatorServiceIds = [
  "planning",
  "airportWelcome",
  "communication",
  "coordination",
  "memories",
] as const satisfies readonly CoordinatorServiceId[];

export function useCoordinator(): UseCoordinatorResult {
  const dictionary = useDictionary();
  const coordinatorDictionary = dictionary.coordinator;
  const coordinatorProfile = people.coordinator;

  const services: CoordinatorService[] = coordinatorServiceIds.map(
    (id) => ({
      id,
      ...coordinatorDictionary.services[id],
    }),
  );

  const coordinator: CoordinatorViewModel = {
    sectionLabel: coordinatorDictionary.sectionLabel,
    title: coordinatorDictionary.title,
    description: coordinatorDictionary.description,
    imageAlt: coordinatorDictionary.imageAlt,
    name: coordinatorProfile.name,
    role: coordinatorProfile.role,
    badge: coordinatorDictionary.badge,
    heading: coordinatorDictionary.heading,
    intro: coordinatorDictionary.intro,
    story: coordinatorDictionary.story,
    quote: coordinatorDictionary.quote,
    cta: {
      label: coordinatorDictionary.cta.label,
      href: "#booking",
    },
    imageCard: coordinatorDictionary.imageCard,
    services,
  };

  return {
    coordinator,
  };
}

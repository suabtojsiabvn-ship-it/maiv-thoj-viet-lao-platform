"use client";

import { people } from "@/content/business";
import { useDictionary } from "@/hooks/useDictionary";

export function useCoordinator() {
  const dictionary = useDictionary();
  const coordinatorDictionary = dictionary.coordinator;
  const coordinatorProfile = people.coordinator;

  return {
    coordinator: {
      ...coordinatorDictionary,
      name: coordinatorProfile.name,
      role: coordinatorProfile.role,
      description:
        coordinatorDictionary.description ||
        coordinatorProfile.description,
    },
  };
}
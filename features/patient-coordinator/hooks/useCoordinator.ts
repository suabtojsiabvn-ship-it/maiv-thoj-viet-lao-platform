"use client";

import { useDictionary } from "@/hooks/useDictionary";

export function useCoordinator() {
  const dictionary = useDictionary();

  return {
    coordinator: dictionary.coordinator,
  };
}
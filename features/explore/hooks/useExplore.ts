"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { exploreItems } from "../data/explore.data";
import type { ExploreViewModel } from "../types/explore.types";

export function useExplore(): ExploreViewModel {
  const { explore } = useDictionary();

  return {
    sectionLabel: explore.sectionLabel,
    title: explore.title,
    description: explore.description,
    items: exploreItems.map((item) => ({
      ...item,
      ...explore.items[item.key],
    })),
  };
}

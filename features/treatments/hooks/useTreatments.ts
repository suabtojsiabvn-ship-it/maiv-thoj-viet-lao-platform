"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { treatmentsMeta } from "../data/treatments.data";
import type { Treatment } from "../types/treatment.types";

export function useTreatments() {
  const { treatments } = useDictionary();

  const items: Treatment[] = treatmentsMeta.map((meta) => ({
    slug: meta.slug,
    image: meta.image,
    title: treatments.items[meta.slug].title,
    description: treatments.items[meta.slug].description,
  }));

  return {
    treatments,
    items,
  };
}
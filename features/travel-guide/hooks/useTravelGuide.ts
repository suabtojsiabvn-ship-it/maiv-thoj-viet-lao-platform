"use client";

import {
  getFeaturedTravelGuides,
  getTravelGuidesByLocale,
} from "@/content/travel-guide";
import { useDictionary } from "@/hooks/useDictionary";
import type { Locale } from "@/types/i18n";

export function useTravelGuide(locale: Locale, featuredOnly = true) {
  const dictionary = useDictionary();
  const page = dictionary.pages.travelGuide;
  const guides = featuredOnly
    ? getFeaturedTravelGuides(locale)
    : getTravelGuidesByLocale(locale);

  return {
    locale,
    page,
    guides,
  };
}
"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { heroActions } from "../data/hero-actions";
import { heroHighlights } from "../data/hero-highlights";
import { heroStats } from "../data/hero-stats";
import type { HeroViewModel } from "../types/hero.types";

export function useHero(): HeroViewModel {
  const dictionary = useDictionary();
  const heroDictionary = dictionary.hero;

  return {
    content: {
      badge: heroDictionary.badge,
      title: heroDictionary.title,
      subtitle: heroDictionary.subtitle,
      actions: heroActions.map((action) => ({
        ...action,
        label: heroDictionary.actions[action.key],
      })),
    },

    highlights: heroHighlights.map((highlight) => ({
      ...highlight,
      title: heroDictionary.highlights[highlight.key].title,
      description:
        heroDictionary.highlights[highlight.key].description,
    })),

    stats: heroStats.map((stat) => ({
      ...stat,
      label: heroDictionary.stats[stat.key],
    })),
  };
}
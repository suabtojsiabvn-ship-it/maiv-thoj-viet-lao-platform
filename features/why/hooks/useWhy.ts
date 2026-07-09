"use client";

import { whyMedia } from "@/content/media";
import { useDictionary } from "@/hooks/useDictionary";

import { whyCards } from "../data/why-cards";
import type { WhyViewModel } from "../types/why.types";

export function useWhy(): WhyViewModel {
  const dictionary = useDictionary();
  const why = dictionary.why;

  return {
    sectionLabel: why.sectionLabel,
    title: why.title,
    description: why.description,
    cards: whyCards.map((card) => ({
      ...card,
      title: why.cards[card.key].title,
      description: why.cards[card.key].description,
    })),
    image: {
      src: whyMedia.main,
      alt: why.imageAlt,
    },
  };
}
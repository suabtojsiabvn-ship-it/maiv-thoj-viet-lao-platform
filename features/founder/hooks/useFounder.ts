"use client";

import { people } from "@/content/business";
import { founderMedia } from "@/content/media";
import { useDictionary } from "@/hooks/useDictionary";

import type { FounderViewModel } from "../types/founder.types";

export function useFounder(): FounderViewModel {
  const dictionary = useDictionary();
  const founder = dictionary.founder;

  return {
    sectionLabel: founder.sectionLabel,
    title: founder.title,
    description: founder.description,
    story: founder.story,
    quote: founder.quote,
    cta: {
      label: founder.cta.label,
      href: "#booking",
    },
    image: {
      src: founderMedia.main,
      alt: founder.imageAlt,
    },
    stats: [
      {
        value: "454K+",
        label: founder.stats.facebook,
      },
      {
        value: "1.3M+",
        label: founder.stats.tiktok,
      },
      {
        value: people.founder.role,
        label: founder.stats.role,
      },
    ],
  };
}
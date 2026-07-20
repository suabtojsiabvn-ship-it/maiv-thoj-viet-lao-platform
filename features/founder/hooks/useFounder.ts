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
    quote: {
      text: founder.quote,
      author: people.founder.name,
    },
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
        value: people.founder.community.facebook,
        label: founder.stats.facebook,
      },
      {
        value: people.founder.community.tiktok,
        label: founder.stats.tiktok,
      },
      {
        value: founder.stats.role.value,
        label: founder.stats.role.label,
      },
    ],
  };
}

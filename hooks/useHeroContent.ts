"use client";

import {
  HeartHandshake,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

import { useDictionary } from "@/hooks/useDictionary";

export function useHeroContent() {
  const dictionary = useDictionary();
  const hero = dictionary.hero;

  return {
    badge: hero.badge,

    title: hero.title,

    subtitle: hero.subtitle,

    actions: [
      {
        label: hero.actions.primary,
        href: "/booking",
        variant: "primary" as const,
      },
      {
        label: hero.actions.secondary,
        href: "/contact",
        variant: "secondary" as const,
      },
    ],

    highlights: [
      {
        icon: HeartHandshake,
        title: hero.highlights.consultation.title,
        description: hero.highlights.consultation.description,
      },
      {
        icon: Plane,
        title: hero.highlights.airportPickup.title,
        description: hero.highlights.airportPickup.description,
      },
      {
        icon: Users,
        title: hero.highlights.multilingualSupport.title,
        description: hero.highlights.multilingualSupport.description,
      },
      {
        icon: ShieldCheck,
        title: hero.highlights.clinicalPartner.title,
        description: hero.highlights.clinicalPartner.description,
      },
    ],

    stats: [
      {
        value: "454K+",
        label: hero.stats.facebookCommunity,
      },
      {
        value: "1.3M+",
        label: hero.stats.tiktokCommunity,
      },
      {
        value: "5",
        label: hero.stats.languagesSupported,
      },
    ],
  };
}
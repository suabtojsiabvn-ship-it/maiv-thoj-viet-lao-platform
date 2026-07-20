"use client";

import { anNhienDental } from "@/content/partners/an-nhien-dental";
import { useDictionary } from "@/hooks/useDictionary";

import type {
  ClinicalHighlight,
  ClinicalHighlightId,
  ClinicalPartnerViewModel,
  UseClinicalPartnerResult,
} from "../types/clinical-partner.types";

const clinicalHighlightIds = [
  "personalizedPlanning",
  "experiencedTeam",
  "clinicalLeadership",
  "digitalDentistry",
] as const satisfies readonly ClinicalHighlightId[];

export function useClinicalPartner(): UseClinicalPartnerResult {
  const dictionary = useDictionary();
  const clinicalPartnerDictionary = dictionary.clinicalPartner;

  const highlights: ClinicalHighlight[] = clinicalHighlightIds.map(
    (id) => ({
      id,
      ...clinicalPartnerDictionary.highlights[id],
    }),
  );

  const clinicalPartner: ClinicalPartnerViewModel = {
    sectionLabel: clinicalPartnerDictionary.sectionLabel,
    title: clinicalPartnerDictionary.title,
    description: clinicalPartnerDictionary.description,
    imageAlt: clinicalPartnerDictionary.imageAlt,
    name: anNhienDental.name,
    badge: clinicalPartnerDictionary.badge,
    heading: clinicalPartnerDictionary.heading,
    intro: clinicalPartnerDictionary.intro,
    quote: clinicalPartnerDictionary.quote,
    cta: {
      label: clinicalPartnerDictionary.cta.label,
      href: "#booking",
    },
    highlights,
    technology: clinicalPartnerDictionary.technology,
    imageCard: clinicalPartnerDictionary.imageCard,
    technologies: clinicalPartnerDictionary.technologies,
  };

  return {
    clinicalPartner,
  };
}

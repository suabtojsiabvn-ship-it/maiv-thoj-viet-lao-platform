"use client";

import { useDictionary } from "@/hooks/useDictionary";

import { clinicalPartnerContent } from "../data/clinical-partner-content";

export function useClinicalPartner() {
  const dictionary = useDictionary();
  const clinicalPartner = dictionary.clinicalPartner;

  return {
    clinicalPartner: {
      ...clinicalPartner,
      highlights: clinicalPartner.highlights.map(
        (highlight, index) => ({
          ...highlight,
          icon:
            clinicalPartnerContent.highlights[index]?.icon ??
            "users",
        })
      ),
    },
  };
}
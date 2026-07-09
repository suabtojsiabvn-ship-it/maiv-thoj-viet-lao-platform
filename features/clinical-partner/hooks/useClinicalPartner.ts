"use client";

import { useDictionary } from "@/hooks/useDictionary";

export function useClinicalPartner() {
  const dictionary = useDictionary();

  return {
    clinicalPartner: dictionary.clinicalPartner,
  };
}
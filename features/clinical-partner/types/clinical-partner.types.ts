import type { LocaleClinicalHighlightKey } from "@/types/i18n";

export type ClinicalHighlightId = LocaleClinicalHighlightKey;

export interface ClinicalHighlight {
  id: ClinicalHighlightId;
  title: string;
  description: string;
}

export interface ClinicalTechnology {
  name: string;
  description: string;
}

export interface ClinicalPartnerViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;
  name: string;

  badge: string;
  heading: string;
  intro: string;
  quote: string;

  cta: {
    label: string;
    href: string;
  };

  highlights: ClinicalHighlight[];

  technology: {
    title: string;
  };

  imageCard: {
    badge: string;
    description: string;
  };

  technologies: ClinicalTechnology[];
}

export interface UseClinicalPartnerResult {
  clinicalPartner: ClinicalPartnerViewModel;
}

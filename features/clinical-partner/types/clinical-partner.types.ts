export interface ClinicalHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ClinicalTechnology {
  name: string;
  description: string;
}

export interface ClinicalPartnerContentData {
  badge: string;

  heading: string;

  intro: string;

  quote: string;

  cta: {
    label: string;
    href: string;
  };

  highlights: ClinicalHighlight[];

  technologies: ClinicalTechnology[];
}
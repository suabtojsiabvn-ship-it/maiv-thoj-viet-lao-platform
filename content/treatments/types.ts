import type { Locale } from "@/types/i18n";

export type TreatmentSlug =
  | "implant"
  | "crowns"
  | "veneers"
  | "smileMakeover";

export interface TreatmentSeo {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export interface TreatmentMedia {
  thumbnail: string;
  hero: string;
  og: string;
  gallery: readonly string[];
}

export interface TreatmentTextItem {
  title: string;
  description: string;
}

export interface TreatmentFaqItem {
  question: string;
  answer: string;
}

export interface TreatmentCta {
  label: string;
  href: string;
  description: string;
}

export interface TreatmentContent {
  locale: Locale;
  slug: TreatmentSlug;
  category: "dental";

  title: string;
  summary: string;

  hero: {
  badge: string;
  title: string;
  description: string;
  facts: readonly string[];
};

  overview: {
    heading: string;
    description: string[];
  };

  benefits: {
    heading: string;
    description: string;
    items: TreatmentTextItem[];
  };

  candidates: {
    heading: string;
    description: string;
    items: string[];
  };

  procedure: {
    heading: string;
    description: string;
    steps: TreatmentTextItem[];
  };

  materials: {
    heading: string;
    description: string;
    items: TreatmentTextItem[];
  };

  faq: {
    heading: string;
    items: TreatmentFaqItem[];
  };

  cta: TreatmentCta;

  relatedTreatments: TreatmentSlug[];

  media: TreatmentMedia;
  seo: TreatmentSeo;
}
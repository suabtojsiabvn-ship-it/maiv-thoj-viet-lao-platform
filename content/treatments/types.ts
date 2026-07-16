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

export interface TreatmentAction {
  label: string;
  href: string;
}

export type TreatmentContactType =
  | "whatsapp"
  | "phone"
  | "email";

export interface TreatmentContact {
  type: TreatmentContactType;
  label: string;
  value: string;
  href: string;
}

export interface TreatmentConversion {
  heading: string;
  description: string;

  primaryAction: TreatmentAction;
  secondaryAction?: TreatmentAction;

  trustItems: readonly string[];
  contacts: readonly TreatmentContact[];
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
    description: readonly string[];
  };

  benefits: {
    heading: string;
    description: string;
    items: readonly TreatmentTextItem[];
  };

  candidates: {
    heading: string;
    description: string;
    items: readonly string[];
  };

  procedure: {
    heading: string;
    description: string;
    steps: readonly TreatmentTextItem[];
  };

  materials: {
    heading: string;
    description: string;
    items: readonly TreatmentTextItem[];
  };

  faq: {
    heading: string;
    items: readonly TreatmentFaqItem[];
  };

  conversion: TreatmentConversion;

  relatedTreatments: readonly TreatmentSlug[];

  media: TreatmentMedia;
  seo: TreatmentSeo;
}
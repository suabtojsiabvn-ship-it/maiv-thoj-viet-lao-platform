export type BookingBenefitIcon =
  | "message-circle"
  | "clipboard-list"
  | "plane-takeoff"
  | "users";

export type BookingBenefitKey =
  | "consultation"
  | "plan"
  | "travel"
  | "coordinator";

export type BookingTreatmentKey =
  | "implant"
  | "smileMakeover"
  | "crowns"
  | "veneers"
  | "consultation";

export type BookingLanguageKey = "en" | "vi" | "lo" | "hmn" | "th";

export interface BookingBenefitMeta {
  id: BookingBenefitKey;
  icon: BookingBenefitIcon;
}

export interface BookingBenefit {
  id: BookingBenefitKey;
  title: string;
  description: string;
  icon: BookingBenefitIcon;
}

export interface BookingOption {
  label: string;
  value: string;
}

export interface BookingFields {
  fullName: string;
  fullNamePlaceholder: string;

  country: string;
  countryPlaceholder: string;

  preferredLanguage: string;

  whatsapp: string;
  whatsappPlaceholder: string;

  email: string;
  emailPlaceholder: string;

  treatment: string;
  selectTreatment: string;

  travelDate: string;

  message: string;
  messagePlaceholder: string;
}

export interface BookingValidationMessages {
  fullName: string;
  country: string;
  whatsapp: string;
  email: string;
  treatment: string;
  message: string;
}

export interface BookingContentData {
  seo: {
    title: string;
    description: string;
  };
  badge: string;
  heading: string;
  intro: string;
  benefits: BookingBenefit[];
  fields: BookingFields;
  treatments: BookingOption[];
  languages: BookingOption[];
  cta: {
    submit: string;
    submitting: string;
    privacy: string;
  };
  validation: BookingValidationMessages;
  feedback: {
    successTitle: string;
    successDescription: string;
    invalidResponse: string;
    requestFailed: string;
  };
}

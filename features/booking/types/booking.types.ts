export type BookingBenefitIcon =
  | "message-circle"
  | "clipboard-list"
  | "plane-takeoff"
  | "users";

export interface BookingBenefit {
  id: string;
  title: string;
  description: string;
  icon: BookingBenefitIcon;
}

export interface BookingOption {
  label: string;
  value: string;
}

export interface BookingContentData {
  badge: string;

  heading: string;

  intro: string;

  benefits: BookingBenefit[];

  treatments: BookingOption[];

  languages: BookingOption[];

  cta: {
    submit: string;
    privacy: string;
  };
}
export interface FounderValue {
  title: string;
  description: string;
}

export interface FounderContentData {
  badge: string;
  heading: string;
  intro: string;
  story: string[];
  quote: string;
  cta: {
    label: string;
    href: string;
  };
  values: FounderValue[];
}
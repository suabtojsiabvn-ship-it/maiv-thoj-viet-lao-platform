export type JourneyIcon =
  | "message-circle"
  | "clipboard-list"
  | "plane-takeoff"
  | "car"
  | "stethoscope"
  | "heart-pulse"
  | "house";

export interface JourneyStep {
  id: string;

  title: string;

  description: string;

  icon: JourneyIcon;
}

export interface JourneyContentData {
  badge: string;

  heading: string;

  intro: string;

  steps: JourneyStep[];

  cta: {
    label: string;
    href: string;
  };
}
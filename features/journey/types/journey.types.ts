export type JourneyIcon =
  | "message-circle"
  | "clipboard-list"
  | "plane-takeoff"
  | "car"
  | "stethoscope"
  | "heart-pulse"
  | "house";

export type JourneyStepKey =
  | "consultation"
  | "plan"
  | "travel"
  | "pickup"
  | "treatment"
  | "recovery"
  | "return";

export interface JourneyStepMeta {
  id: JourneyStepKey;
  icon: JourneyIcon;
}

export interface JourneyStep {
  id: JourneyStepKey;
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
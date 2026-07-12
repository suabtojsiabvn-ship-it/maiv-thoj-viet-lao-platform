export type CoordinatorServiceId =
  | "airport"
  | "transport"
  | "language"
  | "coordination"
  | "memories";

export interface CoordinatorService {
  id: CoordinatorServiceId;

  title: string;

  description: string;
}

export interface CoordinatorContentData {
  badge: string;

  heading: string;

  intro: string;

  story: string[];

  quote: string;

  cta: {
    label: string;
    href: string;
  };

  companion: {
    title: string;

    description: string;
  };

  services: CoordinatorService[];
}
export interface CoordinatorService {
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

  services: CoordinatorService[];
}
import type { LocaleCoordinatorServiceKey } from "@/types/i18n";

export type CoordinatorServiceId = LocaleCoordinatorServiceKey;

export interface CoordinatorService {
  id: CoordinatorServiceId;
  title: string;
  description: string;
}

export interface CoordinatorViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  imageAlt: string;

  name: string;
  role: string;

  badge: string;
  heading: string;
  intro: string;
  story: string[];
  quote: string;

  cta: {
    label: string;
    href: string;
  };

  imageCard: {
    role: string;
    description: string;
  };

  services: CoordinatorService[];
}

export interface UseCoordinatorResult {
  coordinator: CoordinatorViewModel;
}

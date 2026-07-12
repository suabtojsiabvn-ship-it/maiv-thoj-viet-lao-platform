import type { LucideIcon } from "lucide-react";

export interface WhyCardConfig {
  key: "guidance" | "language" | "coordination" | "care";
  icon: LucideIcon;
}

export interface WhyCard extends WhyCardConfig {
  title: string;
  description: string;
}

export interface WhyViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  cards: WhyCard[];
  image: {
    src: string;
    alt: string;
  };
}

import type { LucideIcon } from "lucide-react";

export type ExploreItemKey = "destinations" | "travelGuide";

export interface ExploreItemMeta {
  key: ExploreItemKey;
  href: "/destinations" | "/travel-guide";
  icon: LucideIcon;
}

export interface ExploreItem extends ExploreItemMeta {
  title: string;
  description: string;
  cta: string;
}

export interface ExploreViewModel {
  sectionLabel: string;
  title: string;
  description: string;
  items: ExploreItem[];
}

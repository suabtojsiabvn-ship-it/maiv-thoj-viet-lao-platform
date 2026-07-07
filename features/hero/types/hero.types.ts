import type { LucideIcon } from "lucide-react";

export type HeroActionKey = "primary" | "secondary";

export type HeroHighlightKey =
  | "consultation"
  | "airportPickup"
  | "multilingualSupport"
  | "clinicalPartner";

export type HeroStatKey =
  | "facebookCommunity"
  | "tiktokCommunity"
  | "languagesSupported";

export interface HeroActionConfig {
  key: HeroActionKey;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroAction extends HeroActionConfig {
  label: string;
}

export interface HeroTitle {
  line1: string;
  line2: string;
}

export interface HeroContentConfig {
  titleId: string;
}

export interface HeroContent {
  badge: string;
  title: HeroTitle;
  subtitle: string;
  actions: HeroAction[];
}

export interface HeroHighlightConfig {
  key: HeroHighlightKey;
  icon: LucideIcon;
}

export interface HeroHighlight extends HeroHighlightConfig {
  title: string;
  description: string;
}

export interface HeroStatConfig {
  key: HeroStatKey;
  value: string;
}

export interface HeroStat extends HeroStatConfig {
  label: string;
}

export interface HeroViewModel {
  content: HeroContent;
  highlights: HeroHighlight[];
  stats: HeroStat[];
}
import type { LucideIcon } from "lucide-react";

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface HeroTitle {
  line1: string;
  line2: string;
}

export interface HeroContent {
  badge: string;
  title: HeroTitle;
  subtitle: string;
  actions: HeroAction[];
}

export interface HeroHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
}
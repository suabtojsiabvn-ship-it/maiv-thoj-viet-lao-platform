import type { LucideIcon } from "lucide-react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
  languages: string[];
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
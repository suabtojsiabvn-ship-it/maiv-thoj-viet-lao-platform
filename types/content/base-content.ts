import type { Locale } from "@/types/i18n";

export interface ContentSeo {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
}

export interface ContentMedia {
  coverImage: string;
  gallery?: string[];
}

export interface BaseContent {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  summary: string;
  seo: ContentSeo;
  media: ContentMedia;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  featured?: boolean;
  tags?: string[];
}
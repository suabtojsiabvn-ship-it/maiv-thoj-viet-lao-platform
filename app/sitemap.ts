import type { MetadataRoute } from "next";

import { getDestinationStaticParams } from "@/content/destinations";
import { SUPPORTED_LOCALES } from "@/content/seo";
import { patientStories } from "@/content/stories";
import { getTravelGuideStaticParams } from "@/content/travel-guide";
import { getTreatmentStaticParams } from "@/content/treatments";
import { defaultLocale } from "@/types/i18n";
import { baseUrl } from "@/lib/metadata";

const STATIC_ROUTES = [
  "about",
  "booking",
  "contact",
  "destinations",
  "faq",
  "journey",
  "treatments",
  "travel-guide",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = [];

  SUPPORTED_LOCALES.forEach((locale) => {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      changeFrequency: "weekly",
      priority: locale === defaultLocale ? 1 : 0.95,
    });

    STATIC_ROUTES.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/${route}`,
        changeFrequency:
          route === "booking" || route === "contact" ? "monthly" : "weekly",
        priority: route === "booking" || route === "treatments" ? 0.9 : 0.8,
      });
    });
  });

  getTreatmentStaticParams().forEach(({ locale, slug }) => {
    sitemap.push({
      url: `${baseUrl}/${locale}/treatments/${slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  });

  patientStories
    .filter((story) => story.published)
    .forEach((story) => {
      sitemap.push({
        url: `${baseUrl}/${story.locale}/stories/${story.slug}`,
        ...(story.updatedAt ? { lastModified: new Date(story.updatedAt) } : {}),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

  getTravelGuideStaticParams().forEach(({ locale, slug }) => {
    sitemap.push({
      url: `${baseUrl}/${locale}/travel-guide/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  getDestinationStaticParams().forEach(({ locale, slug }) => {
    sitemap.push({
      url: `${baseUrl}/${locale}/destinations/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemap;
}

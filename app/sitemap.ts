import type { MetadataRoute } from "next";

import {
  getDestinationSlugs,
} from "@/content/destinations";
import {
  SUPPORTED_LOCALES,
} from "@/content/seo";
import {
  patientStories,
} from "@/content/stories";
import {
  getTravelGuideSlugs,
} from "@/content/travel-guide";
import {
  getTreatmentStaticParams,
} from "@/content/treatments";
import {
  baseUrl,
} from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  SUPPORTED_LOCALES.forEach((locale) => {
    sitemap.push({
      url: `${baseUrl}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    });
  });

  getTreatmentStaticParams().forEach(
    ({ locale, slug }) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/treatments/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.9,
      });
    },
  );

  patientStories
    .filter((story) => story.published)
    .forEach((story) => {
      sitemap.push({
        url: `${baseUrl}/${story.locale}/stories/${story.slug}`,
        lastModified: story.updatedAt
          ? new Date(story.updatedAt)
          : now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

  getTravelGuideSlugs().forEach(
    ({ locale, slug }) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/travel-guide/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    },
  );

  getDestinationSlugs().forEach(
    ({ locale, slug }) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/destinations/${slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    },
  );

  return sitemap;
}
import { hmongFamilyCalifornia } from "./hmong-family-california";
import { implantSydney } from "./implant-sydney";
import { hmongLavaPlus } from "./hmong-lava-plus";

export { patientStoriesSection } from "./section";

export const patientStories = [
  hmongFamilyCalifornia,
  implantSydney,
  hmongLavaPlus,
];

export function getPatientStoriesByLocale(locale: string) {
  return patientStories.filter(
    (story) => story.locale === locale && story.published,
  );
}

export function getPatientStoryBySlug(locale: string, slug: string) {
  return patientStories.find(
    (story) =>
      story.locale === locale &&
      story.slug === slug &&
      story.published,
  );
}

export * from "./hmong-family-california";
export * from "./implant-sydney";
export * from "./hmong-lava-plus";
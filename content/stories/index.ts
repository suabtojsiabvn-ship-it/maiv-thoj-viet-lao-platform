import { hmongFamilyCalifornia } from "./hmong-family-california";
import { hmongLavaPlus } from "./hmong-lava-plus";
import { implantSydney } from "./implant-sydney";

export { patientStoriesSection } from "./section";

export const patientStories = [
  hmongFamilyCalifornia,
  implantSydney,
  hmongLavaPlus,
];

export function getPatientStoriesByLocale(locale: string) {
  return patientStories.filter(
    (story) =>
      story.locale === locale &&
      story.published,
  );
}

export function getPatientStoryBySlug(
  locale: string,
  slug: string,
) {
  return patientStories.find(
    (story) =>
      story.locale === locale &&
      story.slug === slug &&
      story.published,
  );
}

export function getPatientStoryStaticParams() {
  return patientStories
    .filter((story) => story.published)
    .map((story) => ({
      locale: story.locale,
      slug: story.slug,
    }));
}

export * from "./hmong-family-california";
export * from "./hmong-lava-plus";
export * from "./implant-sydney";
"use client";

import {
  patientStories,
  patientStoriesSection,
} from "@/content/stories";

import type { PatientStory } from "../types/patient-story.types";

export function usePatientStories() {
  const stories: PatientStory[] = patientStories
    .filter((story) => story.published)
    .map((story) => ({
      id: story.id,
      patient: story.patient.displayName,
      country: story.patient.country,
      treatment: story.treatment.name,
      material: story.treatment.material ?? "",
      completedIn: story.treatment.duration ?? "",
      rating: story.testimonial.rating ?? 5,
      thumbnail: story.media.coverImage,
      videoUrl: story.testimonial.videoUrl ?? "#",
      youtubeId: story.testimonial.youtubeId,
      doctor: story.treatment.doctor,
      language: story.patient.language,
      featured: story.featured,
      slug: story.slug,
      seoTitle: story.seo.title,
      seoDescription: story.seo.description,
      quote: story.testimonial.quote,
    }));

  return {
    section: patientStoriesSection,
    stories,
  };
}
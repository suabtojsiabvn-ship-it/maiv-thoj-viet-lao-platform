import type { BaseContent } from "./base-content";

export interface StoryPatient {
  displayName: string;
  country: string;
  language?: string;
}

export interface StoryTreatment {
  name: string;
  material?: string;
  doctor?: string;
  duration?: string;
}

export interface StoryTestimonial {
  quote: string;
  body?: string[];
  rating?: number;
  videoUrl?: string;
  youtubeId?: string;
}

export interface PatientStoryContent extends BaseContent {
  patient: StoryPatient;
  treatment: StoryTreatment;
  testimonial: StoryTestimonial;
  beforeAfterCaseId?: string;
}
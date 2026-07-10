import type { PatientStoryContent } from "@/types/content";

export const implantSydney: PatientStoryContent = {
  id: "story-2",
  slug: "implant-sydney",
  locale: "en",
  title: "Dental Implant Journey",
  summary: "An Australian patient travels to Vietnam for dental implant care.",
  seo: {
    title: "Dental Implant Journey | Australian Patient",
    description:
      "Complete implant journey in Vietnam with airport pickup and English support.",
  },
  media: {
    coverImage: "/images/patient-stories/story-2.webp",
  },
  createdAt: "2026-01-01",
  updatedAt: "2026-01-01",
  published: true,
  featured: false,
  tags: ["implant", "australia", "english"],
  patient: {
    displayName: "Patient • Sydney",
    country: "Australia",
    language: "English",
  },
  treatment: {
    name: "Dental Implant",
    material: "Straumann Roxolid",
    doctor: "Dr. Toan Nguyen",
    duration: "6 Days",
  },
  testimonial: {
    quote:
      "A Su met me at the airport, explained everything and stayed with me throughout the journey. It felt much easier than I expected.",
    rating: 5,
    videoUrl: "#",
    youtubeId: "",
  },
};
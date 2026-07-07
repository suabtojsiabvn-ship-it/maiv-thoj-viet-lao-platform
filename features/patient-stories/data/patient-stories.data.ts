import type { PatientStory } from "../types/patient-story.types";

export const patientStories: PatientStory[] = [
  {
    id: "story-1",

    patient: "Patient from California",

    country: "🇺🇸 USA",

    treatment: "Smile Makeover",

    material: "Cercon Crowns",

    completedIn: "5 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-1.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "English",

    featured: true,

    slug: "smile-makeover-california",

    seoTitle:
      "Smile Makeover for Patient from California",

    seoDescription:
      "Real smile makeover journey from a patient in California.",

    quote:
      "I finally have the confidence to smile again.",
  },

  {
    id: "story-2",

    patient: "Patient from Australia",

    country: "🇦🇺 Australia",

    treatment: "Dental Implant",

    material: "Straumann Implant",

    completedIn: "6 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-2.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "English",

    featured: false,

    slug: "implant-australia",

    seoTitle:
      "Dental Implant Journey from Australia",

    seoDescription:
      "Implant treatment experience in Vietnam.",

    quote:
      "Everything was easier than I expected.",
  },

  {
    id: "story-3",

    patient: "Hmong Patient",

    country: "🇺🇸 USA",

    treatment: "Premium Ceramic Crowns",

    material: "Lava Plus",

    completedIn: "4 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-3.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "Hmong",

    featured: false,

    slug: "hmong-ceramic-crowns",

    seoTitle:
      "Ceramic Crowns for Hmong Patient",

    seoDescription:
      "Premium ceramic crowns with Hmong support.",

    quote:
      "Speaking Hmong made me feel completely at home.",
  },
];
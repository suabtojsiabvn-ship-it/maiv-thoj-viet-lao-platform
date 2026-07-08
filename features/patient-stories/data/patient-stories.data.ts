import type { PatientStory } from "../types/patient-story.types";

export const patientStories: PatientStory[] = [
  {
    id: "story-1",

    patient: "H'Mong Family • California",

    country: "🇺🇸 USA",

    treatment: "Full Smile Makeover",

    material: "Cercon HT",

    completedIn: "5 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-1.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "H'Mong",

    featured: true,

    slug: "hmong-family-california",

    seoTitle:
      "Smile Makeover Journey | H'Mong Family from California",

    seoDescription:
      "Real smile makeover journey with Maiv Thoj, A Su and Dr. Toan Nguyen.",

    quote:
      "From the first conversation with Maiv Thoj until the day I returned home, I never felt alone. Everything was prepared for me.",
  },

  {
    id: "story-2",

    patient: "Patient • Sydney",

    country: "🇦🇺 Australia",

    treatment: "Dental Implant",

    material: "Straumann Roxolid",

    completedIn: "6 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-2.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "English",

    featured: false,

    slug: "implant-sydney",

    seoTitle:
      "Dental Implant Journey | Australian Patient",

    seoDescription:
      "Complete implant journey in Vietnam with airport pickup and English support.",

    quote:
      "A Su met me at the airport, explained everything and stayed with me throughout the journey. It felt much easier than I expected.",
  },

  {
    id: "story-3",

    patient: "H'Mong Community • USA",

    country: "🇺🇸 USA",

    treatment: "Premium Ceramic Crowns",

    material: "Lava Plus",

    completedIn: "4 Days",

    rating: 5,

    thumbnail: "/images/patient-stories/story-3.webp",

    videoUrl: "#",

    youtubeId: "",

    doctor: "Dr. Toan Nguyen",

    language: "H'Mong",

    featured: false,

    slug: "hmong-lava-plus",

    seoTitle:
      "Premium Ceramic Crowns | H'Mong Patient",

    seoDescription:
      "Premium ceramic crown treatment with full H'Mong support in Vietnam.",

    quote:
      "Being able to speak H'Mong with Maiv Thoj and A Su made me feel comfortable from the very beginning.",
  },
];
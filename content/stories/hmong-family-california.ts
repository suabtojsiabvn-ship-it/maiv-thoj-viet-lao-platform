import type { PatientStoryContent } from "@/types/content";

export const hmongFamilyCalifornia: PatientStoryContent = {
  id: "story-1",
  slug: "hmong-family-california",
  locale: "en",
  title: "Smile Makeover Journey",
  summary: "A Hmong family from California begins their smile journey in Vietnam.",
  seo: {
    title: "Smile Makeover Journey | Hmong Family from California",
    description:
      "Real smile makeover journey with Maiv Thoj, A Su and Dr. Toan Nguyen.",
  },
  media: {
    coverImage: "/images/patient-stories/story-1.webp",
  },
  createdAt: "2026-01-01",
  updatedAt: "2026-01-01",
  published: true,
  featured: true,
  tags: ["smile-makeover", "hmong", "usa"],
  patient: {
    displayName: "Hmong Family • California",
    country: "USA",
    language: "Hmong",
  },
  treatment: {
    name: "Full Smile Makeover",
    material: "Cercon HT",
    doctor: "Dr. Toan Nguyen",
    duration: "5 Days",
  },
  testimonial: {
    quote:
      "From the first conversation with Maiv Thoj until the day I returned home, I never felt alone. Everything was prepared for me.",
    rating: 5,
    videoUrl: "#",
    youtubeId: "",
  },
};
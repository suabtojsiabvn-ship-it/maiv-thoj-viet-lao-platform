import type { PatientStoryContent } from "@/types/content";

export const hmongLavaPlus: PatientStoryContent = {
  id: "story-3",
  slug: "hmong-lava-plus",
  locale: "en",
  title: "Premium Ceramic Crowns",
  summary: "A Hmong patient receives premium ceramic crown treatment in Vietnam.",
  seo: {
    title: "Premium Ceramic Crowns | Hmong Patient",
    description:
      "Premium ceramic crown treatment with full Hmong support in Vietnam.",
  },
  media: {
    coverImage: "/images/patient-stories/story-3.webp",
  },
  createdAt: "2026-01-01",
  updatedAt: "2026-01-01",
  published: true,
  featured: false,
  tags: ["crowns", "hmong", "lava-plus"],
  patient: {
    displayName: "Hmong Community • USA",
    country: "USA",
    language: "Hmong",
  },
  treatment: {
    name: "Premium Ceramic Crowns",
    material: "Lava Plus",
    doctor: "Dr. Toan Nguyen",
    duration: "4 Days",
  },
  testimonial: {
    quote:
      "Being able to speak Hmong with Maiv Thoj and A Su made me feel comfortable from the very beginning.",
    rating: 5,
    videoUrl: "#",
    youtubeId: "",
  },
};
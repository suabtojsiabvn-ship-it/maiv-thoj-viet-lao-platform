import type { DestinationContent } from "@/types/content/destination";

export const sapaDestination: DestinationContent = {
  id: "destination-sapa-vi",
  slug: "sapa",
  locale: "vi",
  title: "Sa Pa",
  summary:
    "Sa Pa là điểm đến vùng cao nổi tiếng với ruộng bậc thang, khí hậu mát lành, bản làng dân tộc và khung cảnh núi non hùng vĩ.",
  location: {
    country: "Vietnam",
    province: "Lào Cai",
    district: "Sa Pa",
  },
  highlights: [
    {
      title: "Ruộng bậc thang",
      description:
        "Khung cảnh ruộng bậc thang đặc trưng của vùng núi Tây Bắc.",
    },
    {
      title: "Bản làng dân tộc",
      description:
        "Không gian văn hóa bản địa với đời sống mộc mạc và gần gũi.",
    },
    {
      title: "Khí hậu mát lành",
      description:
        "Thời tiết dễ chịu, phù hợp để nghỉ dưỡng và kết hợp hành trình chăm sóc sức khỏe.",
    },
  ],
  bestFor: ["Nature", "Culture", "Mountain retreat", "Photography"],
  recommendedDuration: "2–3 days",
  seo: {
    title: "Sa Pa Travel Destination | Maiv Thoj Viet Lao",
    description:
      "Khám phá Sa Pa cùng Maiv Thoj Viet Lao Platform trong hành trình nha khoa kết hợp du lịch tại Việt Nam.",
    canonical: "/vi/destinations/sapa",
    image: "/images/destinations/sapa-cover.jpg",
  },
  media: {
    coverImage: "/images/destinations/sapa-cover.jpg",
    gallery: [
      "/images/destinations/sapa-1.jpg",
      "/images/destinations/sapa-2.jpg",
      "/images/destinations/sapa-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["sapa", "lao-cai", "travel", "mountain"],
};
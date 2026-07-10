import type { DestinationContent } from "@/types/content/destination";

export const haGiangDestination: DestinationContent = {
  id: "destination-ha-giang-vi",
  slug: "ha-giang",
  locale: "vi",
  title: "Hà Giang",
  summary:
    "Hà Giang là vùng đất biên cương hùng vĩ với núi đá, cung đường đèo, bản làng dân tộc và cảnh quan thiên nhiên đầy cảm xúc.",
  location: {
    country: "Vietnam",
    province: "Hà Giang",
  },
  highlights: [
    {
      title: "Cảnh quan núi đá",
      description:
        "Những dãy núi trùng điệp tạo nên vẻ đẹp mạnh mẽ và đặc trưng của vùng cực Bắc.",
    },
    {
      title: "Cung đường trải nghiệm",
      description:
        "Các tuyến đường đèo phù hợp cho hành trình khám phá và chụp ảnh.",
    },
    {
      title: "Bản làng vùng cao",
      description:
        "Không gian văn hóa bản địa với nhịp sống chậm và chân thật.",
    },
  ],
  bestFor: ["Adventure", "Mountain view", "Culture", "Photography"],
  recommendedDuration: "3–4 days",
  seo: {
    title: "Hà Giang Travel Destination | Maiv Thoj Viet Lao",
    description:
      "Khám phá Hà Giang cùng Maiv Thoj Viet Lao Platform trong hành trình nha khoa kết hợp du lịch tại Việt Nam.",
    canonical: "/vi/destinations/ha-giang",
    image: "/images/destinations/ha-giang-cover.jpg",
  },
  media: {
    coverImage: "/images/destinations/ha-giang-cover.jpg",
    gallery: [
      "/images/destinations/ha-giang-1.jpg",
      "/images/destinations/ha-giang-2.jpg",
      "/images/destinations/ha-giang-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["ha-giang", "mountain", "culture", "travel"],
};
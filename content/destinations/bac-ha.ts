import type { DestinationContent } from "@/types/content/destination";

export const bacHaDestination: DestinationContent = {
  id: "destination-bac-ha-vi",
  slug: "bac-ha",
  locale: "vi",
  title: "Bắc Hà",
  summary:
    "Bắc Hà là điểm đến vùng cao mộc mạc của Lào Cai, nổi tiếng với chợ phiên, văn hóa dân tộc, cảnh quan núi đồi và nhịp sống bản làng bình dị.",
  location: {
    country: "Việt Nam",
    province: "Lào Cai",
    district: "Bắc Hà",
  },
  highlights: [
    {
      title: "Chợ phiên vùng cao",
      description:
        "Không gian giao thương truyền thống với nhiều sắc màu văn hóa bản địa.",
    },
    {
      title: "Văn hóa dân tộc",
      description:
        "Nơi du khách có thể cảm nhận đời sống mộc mạc của cộng đồng vùng cao.",
    },
    {
      title: "Ẩm thực địa phương",
      description:
        "Các món ăn đặc trưng vùng núi mang hương vị gần gũi và chân thật.",
    },
  ],
  bestFor: ["Văn hóa", "Chợ phiên", "Đời sống vùng cao", "Chụp ảnh"],
  recommendedDuration: "2–3 ngày",
  seo: {
    title: "Bắc Hà Travel Destination | Maiv Thoj Viet Lao",
    description:
      "Khám phá Bắc Hà cùng Maiv Thoj Viet Lao Platform trong hành trình nha khoa kết hợp du lịch tại Việt Nam.",
    canonical: "/vi/destinations/bac-ha",
    image: "/images/destinations/bac-ha-cover.webp",
  },
  media: {
    coverImage: "/images/destinations/bac-ha-cover.webp",
    gallery: [
      "/images/destinations/bac-ha-1.webp",
      "/images/destinations/bac-ha-2.webp",
      "/images/destinations/bac-ha-3.webp",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["bac-ha", "lao-cai", "market", "highland"],
};
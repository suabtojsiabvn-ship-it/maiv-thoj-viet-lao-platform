import type { DestinationContent } from "@/types/content/destination";

export const mocChauDestination: DestinationContent = {
  id: "destination-moc-chau-vi",
  slug: "moc-chau",
  locale: "vi",
  title: "Mộc Châu",
  summary:
    "Mộc Châu là điểm đến cao nguyên xanh mát với đồi chè, khí hậu dễ chịu, cảnh quan thơ mộng và nhiều trải nghiệm nghỉ dưỡng nhẹ nhàng.",
  location: {
    country: "Vietnam",
    province: "Sơn La",
    district: "Mộc Châu",
  },
  highlights: [
    {
      title: "Cao nguyên xanh",
      description:
        "Không gian rộng mở với đồi chè, đồng cỏ và khí hậu trong lành.",
    },
    {
      title: "Cảnh quan nhẹ nhàng",
      description:
        "Phù hợp với hành trình nghỉ dưỡng, chụp ảnh và thư giãn sau điều trị.",
    },
    {
      title: "Trải nghiệm địa phương",
      description:
        "Các điểm tham quan thiên nhiên và văn hóa giúp chuyến đi thêm trọn vẹn.",
    },
  ],
  bestFor: ["Relaxation", "Nature", "Photography", "Short trip"],
  recommendedDuration: "2–3 days",
  seo: {
    title: "Mộc Châu Travel Destination | Maiv Thoj Viet Lao",
    description:
      "Khám phá Mộc Châu cùng Maiv Thoj Viet Lao Platform trong hành trình nha khoa kết hợp du lịch tại Việt Nam.",
    canonical: "/vi/destinations/moc-chau",
    image: "/images/destinations/moc-chau-cover.jpg",
  },
  media: {
    coverImage: "/images/destinations/moc-chau-cover.jpg",
    gallery: [
      "/images/destinations/moc-chau-1.jpg",
      "/images/destinations/moc-chau-2.jpg",
      "/images/destinations/moc-chau-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: false,
  tags: ["moc-chau", "son-la", "nature", "relaxation"],
};
import type { DestinationContent } from "@/types/content/destination";

export const haLongDestination: DestinationContent = {
  id: "destination-ha-long-vi",
  slug: "ha-long",
  locale: "vi",
  title: "Hạ Long",
  summary:
    "Hạ Long là điểm đến biển nổi tiếng của Việt Nam với vịnh biển, đảo đá, du thuyền và trải nghiệm nghỉ dưỡng cao cấp.",
  location: {
    country: "Vietnam",
    province: "Quảng Ninh",
    district: "Hạ Long",
  },
  highlights: [
    {
      title: "Vịnh biển biểu tượng",
      description:
        "Cảnh quan biển đảo đặc trưng, có thể phù hợp cho hành trình nghỉ dưỡng nhẹ nhàng sau điều trị, tùy theo tình trạng hồi phục và hướng dẫn của bác sĩ.",
    },
    {
      title: "Du thuyền và nghỉ dưỡng",
      description:
        "Trải nghiệm thư giãn trên vịnh với dịch vụ lưu trú và ẩm thực.",
    },
    {
      title: "Hành trình cao cấp",
      description:
        "Phù hợp với khách quốc tế muốn kết hợp chăm sóc sức khỏe và du lịch Việt Nam.",
    },
  ],
  bestFor: ["Luxury travel", "Relaxation", "Cruise", "Sea view"],
  recommendedDuration: "2–3 days",
  seo: {
    title: "Hạ Long Travel Destination | Maiv Thoj Viet Lao",
    description:
      "Khám phá Hạ Long cùng Maiv Thoj Viet Lao Platform trong hành trình nha khoa kết hợp du lịch tại Việt Nam.",
    canonical: "/vi/destinations/ha-long",
    image: "/images/destinations/ha-long-cover.jpg",
  },
  media: {
    coverImage: "/images/destinations/ha-long-cover.jpg",
    gallery: [
      "/images/destinations/ha-long-1.JPG",
      "/images/destinations/ha-long-2.JPG",
      "/images/destinations/ha-long-3.webp",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: false,
  tags: ["ha-long", "quang-ninh", "sea", "luxury"],
};
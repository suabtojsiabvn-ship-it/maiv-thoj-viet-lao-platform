import type { TravelGuideContent } from "@/types/content/travel-guide";

export const visaPreparationGuide: TravelGuideContent = {
  id: "travel-guide-visa-preparation-vi",
  slug: "visa-preparation",
  locale: "vi",
  title: "Chuẩn bị giấy tờ trước khi đến Việt Nam",
  summary:
    "Những điều khách quốc tế nên chuẩn bị trước chuyến đi, bao gồm hộ chiếu, thông tin lưu trú, lịch hẹn và các giấy tờ cần thiết cho hành trình điều trị.",
  category: "visa",
  estimatedTime: "Before departure",
  estimatedBudget: "Depends on nationality and travel plan",
  tips: [
    "Kiểm tra thời hạn hộ chiếu trước khi đặt lịch bay.",
    "Chuẩn bị thông tin khách sạn và lịch trình cơ bản.",
    "Lưu bản sao hộ chiếu và vé máy bay trong điện thoại.",
    "Kiểm tra yêu cầu nhập cảnh theo quốc tịch trước ngày bay.",
  ],
  seo: {
    title: "Visa Preparation Guide | Maiv Thoj Viet Lao",
    description:
      "Hướng dẫn chuẩn bị giấy tờ cho khách quốc tế trước khi đến Việt Nam điều trị nha khoa cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/visa-preparation",
    image: "/images/travel-guide/visa-preparation-cover.webp",
  },
  media: {
    coverImage: "/images/travel-guide/visa-preparation-cover.webp",
    gallery: [
      "/images/travel-guide/visa-preparation-1.jpg",
      "/images/travel-guide/visa-preparation-2.jpg",
      "/images/travel-guide/visa-preparation-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: false,
  tags: ["visa", "passport", "preparation", "international"],
};

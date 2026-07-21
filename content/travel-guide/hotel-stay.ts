import type { TravelGuideContent } from "@/types/content/travel-guide";

export const hotelStayGuide: TravelGuideContent = {
  id: "travel-guide-hotel-stay-vi",
  slug: "hotel-stay",
  locale: "vi",
  title: "Lưu trú trong thời gian điều trị",
  summary:
    "Maiv Thoj Viet Lao Platform hỗ trợ khách hàng từ lúc đón tại sân bay, lưu trú, điều trị đến khi trở về sân bay, giúp hành trình diễn ra thuận lợi và thoải mái hơn.",
  category: "hotel",
  estimatedTime: "Throughout treatment journey",
  estimatedBudget: "Flexible by hotel class and location",
  tips: [
    "Ưu tiên khách sạn gần phòng khám hoặc thuận tiện di chuyển.",
    "Nên chọn nơi yên tĩnh để nghỉ ngơi sau điều trị.",
    "Kiểm tra chính sách nhận phòng, trả phòng và hỗ trợ khách quốc tế.",
    "Báo trước nếu cần hỗ trợ đặt phòng hoặc điều chỉnh lịch lưu trú.",
  ],
  seo: {
    title: "Hotel Stay Guide | Maiv Thoj Viet Lao",
    description:
      "Gợi ý lưu trú cho khách quốc tế trong hành trình điều trị nha khoa tại Việt Nam cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/hotel-stay",
    image: "/images/travel-guide/hotel-stay-cover.jpg",
  },
  media: {
    coverImage: "/images/travel-guide/hotel-stay-cover.jpg",
    gallery: [
      "/images/travel-guide/hotel-stay-1.jpg",
      "/images/travel-guide/hotel-stay-2.jpg",
      "/images/travel-guide/hotel-stay-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["hotel", "stay", "comfort", "journey"],
};

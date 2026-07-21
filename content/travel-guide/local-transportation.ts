import type { TravelGuideContent } from "@/types/content/travel-guide";

export const localTransportationGuide: TravelGuideContent = {
  id: "travel-guide-local-transportation-vi",
  slug: "local-transportation",
  locale: "vi",
  title: "Di chuyển trong hành trình điều trị",
  summary:
    "Trong suốt thời gian điều trị, Maiv Thoj Viet Lao Platform hỗ trợ việc đưa đón và điều phối lịch trình giữa sân bay, khách sạn, phòng khám và các hoạt động liên quan để khách hàng có trải nghiệm thuận tiện và an tâm.",
  category: "transportation",
  estimatedTime: "Depends on route and appointment schedule",
  estimatedBudget: "Flexible by distance and transport option",
  tips: [
    "Đội ngũ sẽ sắp xếp lịch đưa đón theo kế hoạch điều trị.",
    "Không cần tự tìm phương tiện giữa các lịch hẹn chính.",
    "Nếu muốn thay đổi lịch trình, hãy thông báo trước.",
    "Patient Journey Manager luôn là đầu mối hỗ trợ trong quá trình di chuyển.",
  ],
  seo: {
    title: "Local Transportation Guide | Maiv Thoj Viet Lao",
    description:
      "Hướng dẫn di chuyển cho khách quốc tế trong hành trình điều trị nha khoa tại Việt Nam cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/local-transportation",
    image: "/images/travel-guide/local-transportation-cover.jpg",
  },
  media: {
    coverImage: "/images/travel-guide/local-transportation-cover.jpg",
    gallery: [
      "/images/travel-guide/local-transportation-1.jpg",
      "/images/travel-guide/local-transportation-2.jpg",
      "/images/travel-guide/local-transportation-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["transportation", "pickup", "clinic", "travel"],
};

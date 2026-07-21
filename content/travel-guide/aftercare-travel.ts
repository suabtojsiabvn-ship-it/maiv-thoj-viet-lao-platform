import type { TravelGuideContent } from "@/types/content/travel-guide";

export const aftercareTravelGuide: TravelGuideContent = {
  id: "travel-guide-aftercare-travel-vi",
  slug: "aftercare-travel",
  locale: "vi",
  title: "Du lịch nhẹ nhàng sau điều trị",
  summary:
    "Sau điều trị, khách hàng có thể nghỉ ngơi hoặc tham quan theo kế hoạch phù hợp. Đội ngũ Maiv Thoj Viet Lao Platform tiếp tục đồng hành và hỗ trợ việc di chuyển cho đến khi khách hoàn tất hành trình và trở về nước.",
  category: "aftercare",
  estimatedTime: "After clinical appointment",
  estimatedBudget: "Flexible by destination and recovery plan",
  tips: [
    "Luôn ưu tiên hướng dẫn của bác sĩ sau điều trị.",
    "Không nên di chuyển quá xa ngay sau những thủ thuật lớn.",
    "Chọn lịch trình nhẹ nhàng, có thời gian nghỉ ngơi.",
    "Giữ liên lạc với Patient Journey Manager nếu có dấu hiệu bất thường.",
  ],
  seo: {
    title: "Aftercare Travel Guide | Maiv Thoj Viet Lao",
    description:
      "Hướng dẫn du lịch nhẹ nhàng sau điều trị nha khoa tại Việt Nam cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/aftercare-travel",
    image: "/images/travel-guide/aftercare-travel-cover.jpg",
  },
  media: {
    coverImage: "/images/travel-guide/aftercare-travel-cover.jpg",
    gallery: [
      "/images/travel-guide/aftercare-travel-1.jpg",
      "/images/travel-guide/aftercare-travel-2.jpg",
      "/images/travel-guide/aftercare-travel-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["aftercare", "recovery", "travel", "patient-journey"],
};

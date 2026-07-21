import type { TravelGuideContent } from "@/types/content/travel-guide";

export const foodCultureGuide: TravelGuideContent = {
  id: "travel-guide-food-culture-vi",
  slug: "food-culture",
  locale: "vi",
  title: "Ẩm thực và văn hóa địa phương",
  summary:
    "Gợi ý nhẹ nhàng giúp khách quốc tế làm quen với ẩm thực, văn hóa và nhịp sống tại Việt Nam trong thời gian điều trị và nghỉ ngơi.",
  category: "culture",
  estimatedTime: "During free time",
  estimatedBudget: "Flexible by experience",
  tips: [
    "Sau điều trị, nên hỏi bác sĩ trước khi ăn món cứng, nóng hoặc cay.",
    "Ưu tiên món mềm, dễ ăn trong những ngày đầu sau điều trị.",
    "Tôn trọng phong tục địa phương khi đến bản làng hoặc khu văn hóa.",
    "Có thể nhờ người hỗ trợ gợi ý món ăn phù hợp với tình trạng răng miệng.",
  ],
  seo: {
    title: "Food & Culture Guide | Maiv Thoj Viet Lao",
    description:
      "Gợi ý ẩm thực và văn hóa cho khách quốc tế trong hành trình điều trị nha khoa tại Việt Nam cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/food-culture",
    image: "/images/travel-guide/food-culture-cover.webp",
  },
  media: {
    coverImage: "/images/travel-guide/food-culture-cover.webp",
    gallery: [
      "/images/travel-guide/food-culture-1.jpg",
      "/images/travel-guide/food-culture-2.jpg",
      "/images/travel-guide/food-culture-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["food", "culture", "local-experience", "after-treatment"],
};

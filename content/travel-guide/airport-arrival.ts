import type { TravelGuideContent } from "@/types/content/travel-guide";

export const airportArrivalGuide: TravelGuideContent = {
  id: "travel-guide-airport-arrival-vi",
  slug: "airport-arrival",
  locale: "vi",
  title: "Đến sân bay và bắt đầu hành trình",
  summary:
    "Hướng dẫn giúp khách quốc tế cảm thấy an tâm từ thời điểm hạ cánh tại Việt Nam. Đội ngũ Maiv Thoj Viet Lao Platform sẽ hỗ trợ kết nối và đưa đón từ sân bay để khách hàng bắt đầu hành trình điều trị một cách thuận lợi.",
  category: "airport",
  estimatedTime: "1–2 hours after landing",
  estimatedBudget: "Depends on airport and pickup plan",
  tips: [
    "Sau khi hạ cánh, hãy giữ điện thoại có kết nối internet để đội ngũ hỗ trợ liên lạc.",
    "Nhân viên Patient Journey sẽ hướng dẫn điểm gặp tại sân bay.",
    "Dịch vụ đưa đón sân bay được hỗ trợ cho khách hàng sử dụng dịch vụ của Platform.",
    "Nếu chuyến bay thay đổi, hãy thông báo sớm để đội ngũ cập nhật lịch đón.",
  ],
  seo: {
    title: "Airport Arrival Guide | Maiv Thoj Viet Lao",
    description:
      "Hướng dẫn đến sân bay cho khách quốc tế trong hành trình điều trị nha khoa tại Việt Nam cùng Maiv Thoj Viet Lao Platform.",
    canonical: "/vi/travel-guide/airport-arrival",
    image: "/images/travel-guide/airport-arrival-cover.jpg",
  },
  media: {
    coverImage: "/images/travel-guide/airport-arrival-cover.jpg",
    gallery: [
      "/images/travel-guide/airport-arrival-1.jpg",
      "/images/travel-guide/airport-arrival-2.jpg",
      "/images/travel-guide/airport-arrival-3.jpg",
    ],
  },
  createdAt: "2026-07-10",
  updatedAt: "2026-07-10",
  published: true,
  featured: true,
  tags: ["airport", "arrival", "patient-journey", "support"],
};

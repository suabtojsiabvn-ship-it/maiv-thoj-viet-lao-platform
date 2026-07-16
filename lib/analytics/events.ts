export const EVENTS = {
  PAGE_VIEW: "page_view",
  HERO_CTA_CLICK: "hero_cta_click",
  FOUNDER_CTA_CLICK: "founder_cta_click",
  STORY_CLICK: "story_click",
  BOOKING_START: "booking_start",
  BOOKING_SUBMIT: "booking_submit",
  BOOKING_SUCCESS: "booking_success",
  WHATSAPP_CLICK: "whatsapp_click",
  FAQ_OPEN: "faq_open",
  SEARCH: "search",
  RECOMMENDATION_CLICK: "recommendation_click",
} as const;

export type AnalyticsEventName =
  (typeof EVENTS)[keyof typeof EVENTS];
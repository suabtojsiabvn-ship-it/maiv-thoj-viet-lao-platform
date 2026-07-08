import type {
  BookingBenefitMeta,
  BookingLanguageKey,
  BookingTreatmentKey,
} from "../types/booking.types";

export const bookingBenefitsMeta: BookingBenefitMeta[] = [
  {
    id: "consultation",
    icon: "message-circle",
  },
  {
    id: "plan",
    icon: "clipboard-list",
  },
  {
    id: "travel",
    icon: "plane-takeoff",
  },
  {
    id: "coordinator",
    icon: "users",
  },
];

export const bookingTreatmentValues: BookingTreatmentKey[] = [
  "implant",
  "smileMakeover",
  "crowns",
  "veneers",
  "consultation",
];

export const bookingLanguageValues: BookingLanguageKey[] = [
  "en",
  "vi",
  "lo",
  "hmn",
  "th",
];
import type { Coordinator } from "@/types/people";

export const coordinator: Coordinator = {
  id: "a-su",

  name: "A Sử",

  role: "Patient Care Coordinator",

  languages: [
    "H'Mông",
    "Vietnamese",
    "English",
  ],

  profileImage: {
    src: "/images/coordinator/a-su4.webp",
    alt: "A Sử",
  },

  quote:
    "When you arrive in Vietnam, you're not arriving alone.",

  experience:
    "Supporting international patients throughout their treatment journey in Vietnam.",

  services: [
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      description:
        "Personal airport pickup with a warm welcome and comfortable transfer.",
      icon: "plane",
    },
    {
      id: "transportation",
      title: "Private Transportation",
      description:
        "Safe and reliable transportation throughout your stay.",
      icon: "car",
    },
    {
      id: "translation",
      title: "Translation Support",
      description:
        "Clear communication between patients and the dental team.",
      icon: "languages",
    },
    {
      id: "coordination",
      title: "Daily Coordination",
      description:
        "Appointment scheduling and day-to-day assistance during treatment.",
      icon: "calendar-days",
    },
  ],

  gallery: [
    {
      src: "/images/coordinator/a-su4.webp",
      alt: "A Sử coordinating patient support",
    },
    {
      src: "/images/coordinator/clinic-support.webp",
      alt: "Supporting a patient at the clinic",
    },
  ],
};
import type { BookingContentData } from "../types/booking.types";

export const bookingContent: BookingContentData = {
  badge: "FREE CONSULTATION",

  heading: "Start Your Smile Journey Today",

  intro:
    "Complete the form below and our team will contact you with a personalized treatment plan and travel guidance.",

  benefits: [
    {
      id: "consultation",
      title: "Free Consultation",
      description:
        "Discuss your dental needs with no obligation.",
      icon: "message-circle",
    },
    {
      id: "plan",
      title: "Personalized Treatment Plan",
      description:
        "Receive a customized treatment recommendation and estimated costs.",
      icon: "clipboard-list",
    },
    {
      id: "travel",
      title: "Travel Assistance",
      description:
        "We help arrange your journey from arrival to departure.",
      icon: "plane-takeoff",
    },
    {
      id: "coordinator",
      title: "Dedicated Coordinator",
      description:
        "A personal coordinator supports you throughout your dental trip.",
      icon: "users",
    },
  ],

  treatments: [
    {
      label: "Dental Implant",
      value: "implant",
    },
    {
      label: "Smile Makeover",
      value: "smile-makeover",
    },
    {
      label: "Dental Crowns",
      value: "crowns",
    },
    {
      label: "Veneers",
      value: "veneers",
    },
    {
      label: "General Consultation",
      value: "consultation",
    },
  ],

  languages: [
    {
      label: "English",
      value: "en",
    },
    {
      label: "Vietnamese",
      value: "vi",
    },
    {
      label: "Lao",
      value: "lo",
    },
    {
      label: "H'Mông",
      value: "hmn",
    },
    {
      label: "Thai",
      value: "th",
    },
  ],

  cta: {
    submit: "Request Free Consultation",
    privacy:
      "Your personal information is kept private and used only to arrange your consultation.",
  },
};
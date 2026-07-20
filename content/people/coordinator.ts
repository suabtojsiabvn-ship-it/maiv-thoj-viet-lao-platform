import type { Coordinator } from "@/types/people";

export const coordinator: Coordinator = {
  id: "a-su",

  name: "A Sử (Txhim)",

  role: "International Patient Journey Manager",

  languages: [
    "H'Mông",
    "Vietnamese",
    "English",
    "Thai",
    "Lao",
  ],

  profileImage: {
    src: "/images/asu/a-su4.jpg",
    alt: "A Sử (Txhim), International Patient Journey Manager",
  },

  quote:
    "Every journey becomes easier when someone understands your language, your culture and your concerns.",

  experience:
    "Supporting international patients before, during and after dental treatment through multilingual communication and practical journey coordination.",

  services: [
    {
      id: "airport-pickup",
      title: "Airport Welcome",
      description:
        "A warm welcome on arrival and transportation support according to the confirmed journey plan.",
      icon: "plane",
    },
    {
      id: "transportation",
      title: "Private Transportation",
      description:
        "Practical transportation support for appointments and other confirmed journey needs.",
      icon: "car",
    },
    {
      id: "translation",
      title: "Multilingual Communication",
      description:
        "Clearer communication between international patients, dental partners and the support team.",
      icon: "languages",
    },
    {
      id: "coordination",
      title: "Journey Coordination",
      description:
        "Appointment scheduling and practical day-to-day support during the stay in Vietnam.",
      icon: "calendar-days",
    },
  ],

  gallery: [
    {
      src: "/images/asu/a-su4.jpg",
      alt: "A Sử supporting an international patient journey",
    },
    {
      src: "/images/asu/airport.webp",
      alt: "Airport welcome support for an international patient",
    },
  ],
};

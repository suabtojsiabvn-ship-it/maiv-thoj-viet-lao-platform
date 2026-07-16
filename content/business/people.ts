export const people = {
  founder: {
    id: "maiv-thoj",

    name: "Maiv Thoj",

    role: "Community Advisor / International Advisor",

    description:
      "Helping the global Hmong community and international patients confidently begin their healthcare journey in Vietnam through trusted guidance and multilingual support.",

    avatar: "maiv-profile",

    heroImage: "hero-maiv",

    quote:
      "Every patient deserves trusted guidance, honest care, and the confidence to smile again.",
  },

  coordinator: {
    id: "a-su",

    name: "A Sử (Txhim)",

    role: "International Patient Journey Manager",

    description:
      "Supporting international patients before, during and after treatment with multilingual communication and personalized coordination.",

    quote:
      "Every journey becomes easier when someone truly understands your language, your culture and your concerns.",

    avatar: "asu-profile",

    heroImage: "hero-asu",

    languages: [
      "English",
      "Hmong",
      "Vietnamese",
      "Thai",
      "Lao",
    ],

    services: [
      "Pre-Arrival Planning",
      "Airport Welcome",
      "Multilingual Communication",
      "Journey Coordination",
      "Journey Memories",
    ],
  },

  clinicalDirector: {
    id: "doctor-toan",

    name: "Dr. Toàn Nguyễn",

    role: "Clinical Director",

    description:
      "Leading high-quality dental treatment through trusted clinical expertise and modern digital dentistry.",

    avatar: "doctor-toan",
  },
} as const;

export type People = typeof people;
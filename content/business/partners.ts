export const partners = {
  primary: {
    id: "an-nhien-dental",

    name: "An Nhien Dental",

    type: "Trusted Clinical Partner",

    description:
      "A trusted dental clinic in Vietnam providing modern digital dentistry with experienced doctors and international standards.",

    location: "Hanoi, Vietnam",

    website: "",

    logo: "an-nhien-logo",

    coverImage: "an-nhien-cover",

    doctor: "doctor-toan",

    services: [
      "implant",
      "crowns",
      "veneers",
      "smile-makeover",
    ],
  },
} as const;

export type Partners = typeof partners;
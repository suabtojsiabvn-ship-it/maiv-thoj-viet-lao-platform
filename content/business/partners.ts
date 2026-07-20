export const partners = {
  primary: {
    id: "an-nhien-dental",

    name: "An Nhien Dental",

    type: "Trusted Clinical Partner",

    description:
      "A trusted dental clinic in Hanoi, Vietnam, providing patient-centered treatment through experienced dental professionals and modern digital dentistry.",

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

import type { ClinicalPartner } from "@/types/clinical-partner";

export const anNhienDental: ClinicalPartner = {
  id: "an-nhien-dental",

  name: "An Nhien Dental",

  tagline: "Trusted Clinical Excellence",

  description:
    "An Nhien Dental is our trusted clinical partner, providing modern dentistry with experienced professionals, digital technology and patient-centered care.",

  location: "Vietnam",

  website: "",

  profileImage: {
    src: "/images/partners/an-nhien-dental/clinic.webp",
    alt: "An Nhien Dental",
  },

  gallery: [],

  highlights: [
    {
      id: "experienced-team",
      title: "Experienced Dental Team",
      description:
        "Skilled dentists dedicated to safe and predictable treatment.",
      icon: "users",
    },
    {
      id: "digital-technology",
      title: "Modern Digital Technology",
      description:
        "Advanced digital workflow for precise diagnosis and treatment.",
      icon: "monitor-smartphone",
    },
    {
      id: "personalized-care",
      title: "Personalized Treatment",
      description:
        "Every treatment plan is tailored to each patient's needs.",
      icon: "heart-handshake",
    },
    {
      id: "international-standard",
      title: "International Standard of Care",
      description:
        "A strong commitment to quality, safety and patient experience.",
      icon: "shield-check",
    },
  ],

  technologies: [
    {
      id: "digital-scan",
      name: "Digital Intraoral Scanner",
      description: "Accurate digital impressions for greater comfort.",
    },
    {
      id: "cbct",
      name: "CBCT 3D Imaging",
      description: "High-precision diagnosis and treatment planning.",
    },
  ],

  certifications: [],
};
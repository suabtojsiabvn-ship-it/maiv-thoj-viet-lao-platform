import type { ClinicalPartner } from "@/types/clinical-partner";

export const anNhienDental: ClinicalPartner = {
  id: "an-nhien-dental",

  name: "An Nhien Dental",

  tagline: "Trusted Clinical Excellence",

  description:
    "An Nhien Dental is a trusted clinical partner providing patient-centered dental treatment through experienced professionals, modern digital technology and careful clinical planning.",

  location: "Vietnam",

  website: "",

  profileImage: {
    src: "/images/partners/an-nhien-dental/clinic.webp",
    alt: "An Nhien Dental clinic in Vietnam",
  },

  gallery: [],

  highlights: [
    {
      id: "experienced-team",
      title: "Experienced Dental Team",
      description:
        "Experienced dental professionals focused on careful evaluation, quality care and patient safety.",
      icon: "users",
    },
    {
      id: "digital-technology",
      title: "Modern Digital Technology",
      description:
        "Digital tools support detailed examination and careful treatment planning.",
      icon: "monitor-smartphone",
    },
    {
      id: "personalized-care",
      title: "Personalized Treatment",
      description:
        "Treatment planning is based on each patient's oral health, goals and clinical evaluation.",
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
      description:
        "Digital impressions can provide a more comfortable experience in many cases.",
    },
    {
      id: "cbct",
      name: "CBCT 3D Imaging",
      description:
        "Detailed 3D imaging supports clinical assessment and treatment planning.",
    },
    {
      id: "cad-cam",
      name: "CAD/CAM Workflow",
      description:
        "Digital design and manufacturing support consistency throughout the restorative workflow.",
    },
    {
      id: "clinical-standards",
      name: "International Clinical Standards",
      description:
        "Professional sterilization, safety and clinical protocols support quality patient care.",
    },
  ],

  certifications: [],
};

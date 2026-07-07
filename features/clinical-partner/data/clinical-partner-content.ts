import type { ClinicalPartnerContentData } from "../types/clinical-partner.types";

export const clinicalPartnerContent: ClinicalPartnerContentData = {
  badge: "CLINICAL PARTNER",

  heading: "Trusted Clinical Excellence",

  intro:
    "Exceptional dental care begins with an experienced clinical team, modern technology and a commitment to personalized treatment.",

  quote:
    "Excellence begins with trust and is delivered through precision.",

  cta: {
    label: "Meet Our Clinical Partner",
    href: "/clinical-partner",
  },

  highlights: [
    {
      title: "Experienced Dental Team",
      description:
        "Dedicated professionals committed to safe and predictable treatment.",
      icon: "users",
    },
    {
      title: "Modern Digital Technology",
      description:
        "Advanced equipment supporting accurate diagnosis and treatment.",
      icon: "monitor-smartphone",
    },
    {
      title: "Personalized Treatment",
      description:
        "Every treatment plan is tailored to the patient's needs.",
      icon: "heart-handshake",
    },
    {
      title: "International Standards",
      description:
        "High standards of safety, hygiene and patient care.",
      icon: "shield-check",
    },
  ],

  technologies: [
    {
      name: "CBCT 3D Imaging",
      description:
        "Detailed diagnostics for precise treatment planning.",
    },
    {
      name: "Digital Intraoral Scanner",
      description:
        "Comfortable and accurate digital impressions.",
    },
    {
      name: "CAD/CAM Technology",
      description:
        "Precision-crafted restorations with digital workflows.",
    },
    {
      name: "Modern Sterilization",
      description:
        "Strict infection control following international standards.",
    },
  ],
};
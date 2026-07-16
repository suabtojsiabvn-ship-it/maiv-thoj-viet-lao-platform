import { treatmentsMedia } from "@/content/media";

import type { TreatmentContent } from "./types";

export const implantTreatments: TreatmentContent[] = [
  {
    locale: "en",
    slug: "implant",
    category: "dental",

    title: "Dental Implants",

    summary:
      "A personalized solution for replacing missing teeth and restoring comfortable everyday function.",

    hero: {
      badge: "DENTAL IMPLANTS IN VIETNAM",

      title:
        "Restore missing teeth with a treatment plan designed around you.",

      description:
        "Dental implants may help restore function, comfort and confidence when one or more teeth are missing. Your treatment begins with a careful clinical evaluation and a personalized plan.",

      facts: [
        "Personalized Treatment Plan",
        "International Patient Support",
        "Trusted Clinical Partner",
      ],
    },

    overview: {
      heading: "Understanding dental implant treatment",

      description: [
        "A dental implant is designed to replace the root of a missing tooth and support a crown, bridge or other restoration.",
        "Every patient has different oral health needs. Your dentist will evaluate your teeth, gums and bone condition before recommending whether implant treatment is appropriate for you.",
      ],
    },

    benefits: {
      heading: "How dental implants may help",

      description:
        "The benefits of treatment depend on your oral condition and personalized clinical plan.",

      items: [
        {
          title: "Restore everyday function",
          description:
            "Implant-supported teeth may help improve chewing comfort and daily function.",
        },
        {
          title: "Support a natural-looking smile",
          description:
            "The final restoration is planned to complement your smile, bite and facial appearance.",
        },
        {
          title: "Protect long-term oral health",
          description:
            "Replacing missing teeth may help maintain stability and reduce unwanted movement of nearby teeth.",
        },
      ],
    },

    candidates: {
      heading:
        "Who may be suitable for implant treatment?",

      description:
        "Suitability can only be confirmed after a clinical examination and appropriate diagnostic imaging.",

      items: [
        "Adults with one or more missing teeth.",
        "Patients seeking a fixed replacement for removable teeth.",
        "Patients with sufficient bone or who may be suitable for bone-supporting procedures.",
        "Patients able to maintain good oral hygiene and attend follow-up care.",
      ],
    },

    procedure: {
      heading: "Your implant treatment journey",

      description:
        "The exact number of appointments and treatment time varies for each patient.",

      steps: [
        {
          title: "Consultation and evaluation",
          description:
            "Your dentist examines your oral health and reviews diagnostic imaging before discussing suitable options.",
        },
        {
          title: "Personalized treatment planning",
          description:
            "The implant position, restoration and treatment schedule are planned around your clinical needs.",
        },
        {
          title: "Implant placement",
          description:
            "The implant is placed according to the approved clinical plan, followed by the required healing period.",
        },
        {
          title: "Final restoration",
          description:
            "After healing, the final crown or restoration is fitted and adjusted for comfort and function.",
        },
        {
          title: "Aftercare and follow-up",
          description:
            "You receive guidance on oral hygiene, maintenance and recommended follow-up appointments.",
        },
      ],
    },

    materials: {
      heading:
        "Implant systems and restorative materials",

      description:
        "Material and implant-system selection is based on clinical suitability, availability and your personalized treatment plan.",

      items: [
        {
          title: "Clinically selected implant systems",
          description:
            "Your dentist recommends an appropriate implant system after evaluating your individual condition.",
        },
        {
          title: "Personalized final restoration",
          description:
            "The crown or restoration is selected and designed to support function, appearance and long-term care.",
        },
      ],
    },

    faq: {
      heading: "Dental implant questions",

      items: [
        {
          question:
            "How long does dental implant treatment take?",

          answer:
            "Treatment time varies depending on healing, bone condition, the number of implants and whether additional procedures are required. Your dentist will explain the expected timeline after evaluation.",
        },
        {
          question:
            "Is everyone suitable for dental implants?",

          answer:
            "No. Suitability depends on oral health, bone condition, general health and other clinical factors. A complete examination is required before treatment is recommended.",
        },
        {
          question:
            "Will I need to stay in Vietnam for the entire process?",

          answer:
            "Not always. Some implant journeys require more than one visit. The team will help coordinate your treatment and travel plan after your clinical needs are confirmed.",
        },
      ],
    },

    conversion: {
      heading:
        "Ready to understand your next step?",

      description:
        "Share your dental concerns and expected travel plans with our team. We will help you understand the consultation process before you make any treatment decision.",

      primaryAction: {
        label: "Start Your Consultation",
        href: "/booking",
      },

      secondaryAction: {
        label: "Contact Us on WhatsApp",
        href: "#contact",
      },

      trustItems: [
        "Initial consultation without treatment commitment",
        "Multilingual patient journey support",
        "Personalized coordination before travel",
      ],

      contacts: [],
    },

    relatedTreatments: [
      "crowns",
      "smileMakeover",
    ],

    media: treatmentsMedia.implant,

    seo: {
      title:
        "Dental Implants in Vietnam | Maiv Thoj Viet Lao",

      description:
        "Explore personalized dental implant treatment in Vietnam with multilingual patient journey support and care from trusted clinical partners.",

      canonical: "/en/treatments/implant",

      image: treatmentsMedia.implant.og,
    },
  },
];
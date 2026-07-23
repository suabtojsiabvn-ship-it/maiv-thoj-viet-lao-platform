import { contactInfo } from "@/content/contact";
import { treatmentsMedia } from "@/content/media";

import type { TreatmentContent } from "./types";

export const veneersTreatments: TreatmentContent[] = [
  {
    locale: "en",
    slug: "veneers",
    category: "dental",

    title: "Dental Veneers",

    summary:
      "A personalized cosmetic dental option designed to improve the visible shape, color and balance of your smile.",

    hero: {
      badge: "DENTAL VENEERS IN VIETNAM",

      title:
        "Create a more balanced smile with veneers planned around your natural features.",

      description:
        "Dental veneers may help improve the visible appearance of selected teeth affected by discoloration, minor shape concerns, small gaps or uneven proportions. Every case begins with a careful assessment and a personalized smile plan.",

      facts: [
        "Personalized Smile Planning",
        "International Patient Support",
        "Trusted Clinical Partner",
      ],
    },

    overview: {
      heading: "Understanding dental veneers",

      description: [
        "Dental veneers are thin restorations placed over the visible front surface of selected teeth to improve their color, shape, proportion or alignment.",
        "Veneers are not appropriate for every patient. Your dentist must first evaluate your teeth, gums, bite and overall oral health before recommending a suitable cosmetic treatment plan.",
      ],
    },

    benefits: {
      heading: "How dental veneers may improve your smile",

      description:
        "The final result depends on your existing teeth, oral health, material selection and personalized clinical plan.",

      items: [
        {
          title: "Improve visible tooth color",
          description:
            "Veneers may help improve the appearance of teeth with persistent discoloration that does not respond sufficiently to whitening.",
        },
        {
          title: "Refine tooth shape and proportion",
          description:
            "Selected teeth may be reshaped visually to create a more balanced relationship across the smile.",
        },
        {
          title: "Address minor spacing concerns",
          description:
            "In appropriate cases, veneers may help visually reduce small gaps or minor irregularities between teeth.",
        },
        {
          title: "Support a natural-looking smile",
          description:
            "Color, translucency and shape are planned to complement your facial features and surrounding natural teeth.",
        },
      ],
    },

    candidates: {
      heading: "Who may be suitable for dental veneers?",

      description:
        "Suitability can only be confirmed after a clinical examination and discussion of your expectations.",

      items: [
        "Adults seeking cosmetic improvement of selected visible teeth.",
        "Patients with healthy teeth and gums suitable for restorative treatment.",
        "Patients with discoloration, minor spacing, uneven shape or proportion concerns.",
        "Patients with realistic expectations about cosmetic dental treatment.",
        "Patients able to maintain good oral hygiene and attend follow-up care.",
      ],
    },

    procedure: {
      heading: "Your dental veneer treatment journey",

      description:
        "The exact process, number of appointments and treatment time depend on your oral condition and selected veneer material.",

      steps: [
        {
          title: "Consultation and smile assessment",
          description:
            "Your dentist evaluates your teeth, gums, bite and cosmetic concerns before discussing whether veneers are appropriate.",
        },
        {
          title: "Personalized smile planning",
          description:
            "Tooth shape, proportion, color and the number of veneers are planned according to your facial features and treatment goals.",
        },
        {
          title: "Tooth preparation",
          description:
            "When required, a controlled amount of tooth structure is prepared according to the approved clinical plan.",
        },
        {
          title: "Impressions or digital scanning",
          description:
            "Accurate records are taken so the dental laboratory can create restorations matched to your treatment plan.",
        },
        {
          title: "Veneer fitting and adjustment",
          description:
            "Each veneer is evaluated for fit, color, appearance and bite before final placement.",
        },
        {
          title: "Aftercare and review",
          description:
            "You receive guidance on cleaning, maintenance, diet and recommended follow-up appointments.",
        },
      ],
    },

    materials: {
      heading: "Veneer materials and restoration planning",

      description:
        "Material selection depends on your teeth, cosmetic goals, bite, clinical suitability and the recommendations of your treating dentist.",

      items: [
        {
          title: "Ceramic veneer options",
          description:
            "Ceramic materials may provide natural translucency, color stability and a customized appearance when clinically appropriate.",
        },
        {
          title: "Personalized shade selection",
          description:
            "Shade and translucency are selected to complement your skin tone, facial features and surrounding natural teeth.",
        },
        {
          title: "Individual restoration design",
          description:
            "Each veneer is designed according to the proportions, contours and function required for your smile.",
        },
      ],
    },

    faq: {
      heading: "Dental veneer questions",

      items: [
        {
          question: "Are dental veneers suitable for everyone?",
          answer:
            "No. Veneers may not be appropriate when teeth or gums are unhealthy, when there is insufficient tooth structure, or when significant bite and alignment concerns require another treatment. A clinical examination is necessary.",
        },
        {
          question: "How many veneers will I need?",
          answer:
            "The number depends on which teeth are visible when you smile, your cosmetic concerns and the balance required across your smile. Your dentist will discuss suitable options after assessment.",
        },
        {
          question: "Will my natural teeth need to be prepared?",
          answer:
            "Some veneer cases require controlled tooth preparation, while others may require less. The amount depends on tooth position, shape, material and the desired result.",
        },
        {
          question: "How long does veneer treatment take?",
          answer:
            "Treatment time varies according to the number of veneers, laboratory process, oral health and required preparation. Your expected schedule will be explained during treatment planning.",
        },
        {
          question: "How should I care for dental veneers?",
          answer:
            "Maintain careful daily oral hygiene, attend regular dental reviews and avoid habits that may place excessive force on the restorations. Your dentist will provide personalized aftercare guidance.",
        },
      ],
    },

    conversion: {
      heading: "Would you like to explore your veneer options?",

      description:
        "Share your smile concerns, photographs and expected travel plans with our team. We will help coordinate an initial consultation so you can understand the appropriate next step before making a treatment decision.",

      primaryAction: {
        label: "Start Your Consultation",
        href: "/booking",
      },

      secondaryAction: {
        label: "Chat on WhatsApp",
        href: contactInfo.whatsapp.href,
      },

      trustItems: [
        "Initial consultation without treatment commitment",
        "Personalized smile and travel coordination",
        "Multilingual international patient support",
      ],

      contacts: [
        {
          type: "phone",
          label: contactInfo.phone.vietnam.label,
          value: contactInfo.phone.vietnam.value,
          href: contactInfo.phone.vietnam.href,
        },
        {
          type: "whatsapp",
          label: contactInfo.whatsapp.label,
          value: contactInfo.whatsapp.value,
          href: contactInfo.whatsapp.href,
        },
        {
          type: "phone",
          label: contactInfo.phone.laos.label,
          value: contactInfo.phone.laos.value,
          href: contactInfo.phone.laos.href,
        },
        {
          type: "email",
          label: contactInfo.email.label,
          value: contactInfo.email.value,
          href: contactInfo.email.href,
        },
      ],
    },

    relatedTreatments: ["crowns", "smileMakeover"],

    media: treatmentsMedia.veneers,

    seo: {
      title: "Dental Veneers in Vietnam",

      description:
        "Explore porcelain and personalized dental veneers in Hanoi, Vietnam, with Hmong and English support, smile planning and international patient coordination.",

      canonical: "/en/treatments/veneers",

      image: treatmentsMedia.veneers.og,
    },
  },
];

import { contactInfo } from "@/content/contact";
import { treatmentsMedia } from "@/content/media";

import type { TreatmentContent } from "./types";

export const smileMakeoverTreatments: TreatmentContent[] = [
  {
    locale: "en",
    slug: "smileMakeover",
    category: "dental",

    title: "Smile Makeover",

    summary:
      "A personalized smile transformation program that may combine restorative, cosmetic and functional dental treatments according to your individual needs.",

    hero: {
      badge: "PERSONALIZED SMILE MAKEOVER IN VIETNAM",

      title:
        "Transform your smile through a treatment journey designed around you.",

      description:
        "A smile makeover is a personalized treatment program created around your facial features, oral health, bite, lifestyle and long-term goals. It may combine several dental treatments following a complete clinical assessment.",

      facts: [
        "Personalized Smile Design",
        "Comprehensive Treatment Planning",
        "International Patient Journey Support",
      ],
    },

    overview: {
      heading: "Understanding a smile makeover",

      description: [
        "A smile makeover is not one individual procedure. It is a personalized treatment plan that may combine cosmetic, restorative and functional dental care to improve the appearance and health of your smile.",
        "Depending on your clinical condition, the plan may include veneers, crowns, dental implants, whitening, gum contouring, bite adjustment or other appropriate treatments.",
        "Not every patient requires every procedure. Recommendations are made only after your dentist evaluates your teeth, gums, bite, facial features and treatment expectations.",
      ],
    },

    benefits: {
      heading: "How a personalized smile makeover may help",

      description:
        "The goals and benefits of treatment vary according to your oral condition, treatment needs and personalized clinical plan.",

      items: [
        {
          title: "Create more balanced smile proportions",
          description:
            "The size, shape, position and visible relationship of selected teeth may be planned to create a more harmonious smile.",
        },
        {
          title: "Improve facial and smile harmony",
          description:
            "Smile planning considers your facial features, lip movement and natural appearance rather than focusing on teeth alone.",
        },
        {
          title: "Combine cosmetic and functional care",
          description:
            "Where appropriate, the plan may address both visible appearance and functional concerns such as damaged or missing teeth.",
        },
        {
          title: "Coordinate multiple treatments",
          description:
            "A structured plan helps organize the sequence, timing and clinical responsibilities of treatments that may need to work together.",
        },
        {
          title: "Support long-term maintenance",
          description:
            "The final plan includes guidance for oral hygiene, follow-up care and maintenance of restorations over time.",
        },
      ],
    },

    candidates: {
      heading: "Who may be suitable for a smile makeover?",

      description:
        "Suitability and treatment recommendations can only be confirmed after a complete clinical examination and discussion of your expectations.",

      items: [
        "Adults with several cosmetic or restorative dental concerns.",
        "Patients concerned about tooth color, shape, spacing, wear or proportion.",
        "Patients with damaged, missing or heavily restored teeth requiring coordinated care.",
        "Patients seeking a personalized plan rather than one isolated cosmetic procedure.",
        "Patients with realistic expectations and a commitment to long-term oral care.",
      ],
    },

    procedure: {
      heading: "Your smile transformation journey",

      description:
        "The number of appointments, treatment stages and travel requirements depend on the complexity of your personalized plan.",

      steps: [
        {
          title: "Initial consultation",
          description:
            "You share your dental concerns, smile goals, available records and expected travel plans with the international patient support team.",
        },
        {
          title: "Clinical assessment",
          description:
            "Your dentist evaluates your teeth, gums, bite, oral health and any required diagnostic imaging.",
        },
        {
          title: "Smile and facial analysis",
          description:
            "Visible tooth proportions, smile line, facial features and functional considerations are reviewed as part of the planning process.",
        },
        {
          title: "Personalized treatment planning",
          description:
            "Suitable procedures, materials, treatment sequence and expected schedule are discussed according to your clinical needs.",
        },
        {
          title: "Clinical treatment",
          description:
            "The approved treatments are completed in the appropriate sequence, with adjustments based on clinical progress.",
        },
        {
          title: "Final smile refinement",
          description:
            "The final appearance, bite, comfort and function are reviewed before treatment is considered complete.",
        },
        {
          title: "Aftercare and maintenance",
          description:
            "You receive personalized guidance for hygiene, restoration care, follow-up reviews and long-term maintenance.",
        },
      ],
    },

    materials: {
      heading: "Materials and treatment selection",

      description:
        "A smile makeover may involve several treatments and materials. Every selection is based on clinical suitability, functional requirements, aesthetic goals and your personalized plan.",

      items: [
        {
          title: "Personalized restorative materials",
          description:
            "Ceramic, zirconia or other appropriate restorative materials may be selected according to tooth position, bite and treatment goals.",
        },
        {
          title: "Individual shade and shape planning",
          description:
            "Restoration color, translucency, contour and proportion are planned to complement your facial features and surrounding teeth.",
        },
        {
          title: "Treatment-specific material selection",
          description:
            "Implants, crowns, veneers and other components are selected according to the clinical requirements of each stage.",
        },
        {
          title: "Long-term maintenance considerations",
          description:
            "Material choices also consider oral hygiene, bite forces, lifestyle and the maintenance required after treatment.",
        },
      ],
    },

    faq: {
      heading: "Smile makeover questions",

      items: [
        {
          question: "What is included in a smile makeover?",
          answer:
            "A smile makeover is personalized and may include veneers, crowns, implants, whitening, gum treatment or other appropriate procedures. The exact combination depends on your clinical assessment.",
        },
        {
          question: "Does everyone need the same treatments?",
          answer:
            "No. Each plan is different. Some patients may need only a small number of cosmetic treatments, while others may require a broader restorative and functional plan.",
        },
        {
          question: "How is my new smile planned?",
          answer:
            "Planning considers your teeth, gums, bite, facial features, smile line, expectations and long-term oral health. Your dentist will explain the recommended approach after assessment.",
        },
        {
          question: "How long does a smile makeover take?",
          answer:
            "Treatment time depends on the number and complexity of procedures involved. Some plans may be completed within one visit period, while others require staged treatment or more than one trip.",
        },
        {
          question: "Can a smile makeover include dental implants?",
          answer:
            "Yes, when missing teeth are part of the treatment need and implants are clinically suitable. Implant treatment may require additional healing time and staged visits.",
        },
        {
          question: "Will I be able to preview the proposed result?",
          answer:
            "Available planning and preview methods depend on the clinical partner, treatment type and individual case. Your dentist will explain the suitable planning options during consultation.",
        },
        {
          question: "Is a smile makeover only cosmetic?",
          answer:
            "Not necessarily. A comprehensive plan may also address damaged teeth, missing teeth, bite concerns and functional restoration when clinically required.",
        },
      ],
    },

    conversion: {
      heading:
        "Let’s begin your personalized smile transformation journey.",

      description:
        "Share your smile concerns, available dental records, photographs and expected travel plans with our team. We will help coordinate an initial consultation and explain the appropriate next step before you make a treatment decision.",

      primaryAction: {
        label: "Start Your Smile Consultation",
        href: "/booking",
      },

      secondaryAction: {
        label: "Chat on WhatsApp",
        href: contactInfo.whatsapp.href,
      },

      trustItems: [
        "Initial consultation without treatment commitment",
        "Personalized clinical and travel coordination",
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

    relatedTreatments: [
      "veneers",
      "crowns",
      "implant",
    ],

    media: treatmentsMedia.smileMakeover,

    seo: {
      title:
        "Smile Makeover in Vietnam | Maiv Thoj Viet Lao",

      description:
        "Explore a personalized smile makeover in Vietnam with comprehensive treatment planning, multilingual support and international patient journey coordination.",

      canonical: "/en/treatments/smileMakeover",

      image: treatmentsMedia.smileMakeover.og,
    },
  },
];
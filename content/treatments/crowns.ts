import { contactInfo } from "@/content/contact";
import { treatmentsMedia } from "@/content/media";

import type { TreatmentContent } from "./types";

export const crownsTreatments: TreatmentContent[] = [
  {
    locale: "en",
    slug: "crowns",
    category: "dental",

    title: "Dental Crowns",

    summary:
      "A personalized restorative option designed to protect weakened teeth, restore function and improve visible appearance.",

    hero: {
      badge: "DENTAL CROWNS IN VIETNAM",

      title:
        "Restore damaged or weakened teeth with crowns planned around your bite and smile.",

      description:
        "Dental crowns may help protect weakened teeth, restore chewing function and improve the visible shape or color of selected teeth. Every case begins with a clinical evaluation and a personalized restorative plan.",

      facts: [
        "Personalized Restorative Planning",
        "International Patient Support",
        "Trusted Clinical Partner",
      ],
    },

    overview: {
      heading: "Understanding dental crowns",

      description: [
        "A dental crown is a custom-made restoration designed to cover and protect a tooth that has been weakened, damaged, heavily restored or treated with root canal therapy.",
        "Crowns may also be used as part of implant restoration or a wider smile rehabilitation plan. Your dentist will assess your teeth, gums, bite and remaining tooth structure before recommending treatment.",
      ],
    },

    benefits: {
      heading: "How dental crowns may help",

      description:
        "The benefits of crown treatment depend on your oral condition, remaining tooth structure, bite and personalized clinical plan.",

      items: [
        {
          title: "Protect weakened teeth",
          description:
            "A crown may help reinforce a tooth that has been significantly damaged, cracked or weakened by a large restoration.",
        },
        {
          title: "Restore chewing function",
          description:
            "The restoration is designed to rebuild the shape and function needed for comfortable everyday use.",
        },
        {
          title: "Improve visible tooth appearance",
          description:
            "Crowns may help improve the visible color, contour and proportion of selected teeth when clinically appropriate.",
        },
        {
          title: "Support implant restoration",
          description:
            "A crown may be used as the final visible restoration placed over a dental implant.",
        },
      ],
    },

    candidates: {
      heading: "Who may be suitable for dental crowns?",

      description:
        "Suitability can only be confirmed after a clinical examination and evaluation of the affected tooth or implant.",

      items: [
        "Patients with cracked, worn or significantly weakened teeth.",
        "Patients with teeth affected by large fillings or extensive structural loss.",
        "Patients requiring restoration after root canal treatment.",
        "Patients receiving an implant-supported tooth restoration.",
        "Patients seeking functional and cosmetic improvement of selected teeth.",
      ],
    },

    procedure: {
      heading: "Your dental crown treatment journey",

      description:
        "The exact process, number of appointments and treatment time depend on the condition of the tooth, the selected material and whether additional treatment is required.",

      steps: [
        {
          title: "Consultation and clinical assessment",
          description:
            "Your dentist examines the tooth, surrounding gums and bite, and reviews any required diagnostic imaging.",
        },
        {
          title: "Personalized treatment planning",
          description:
            "The dentist confirms whether a crown is appropriate and discusses material, shade, shape and treatment timing.",
        },
        {
          title: "Tooth preparation",
          description:
            "The affected tooth is prepared according to the approved clinical plan so the final crown can fit securely.",
        },
        {
          title: "Impressions or digital scanning",
          description:
            "Accurate records are taken for the dental laboratory to create the custom restoration.",
        },
        {
          title: "Crown fitting and adjustment",
          description:
            "The crown is assessed for fit, appearance, contact and bite before final placement.",
        },
        {
          title: "Aftercare and follow-up",
          description:
            "You receive guidance on cleaning, maintenance and recommended review appointments.",
        },
      ],
    },

    materials: {
      heading: "Crown materials and restoration planning",

      description:
        "The appropriate crown material is selected according to tooth position, bite, appearance goals, clinical suitability and your dentist's recommendation.",

      items: [
        {
          title: "Ceramic and zirconia options",
          description:
            "Ceramic and zirconia restorations may provide strength, color stability and a natural-looking appearance when clinically appropriate.",
        },
        {
          title: "Personalized shade selection",
          description:
            "The crown shade is selected to complement surrounding teeth and the overall appearance of your smile.",
        },
        {
          title: "Functional restoration design",
          description:
            "The crown is designed to restore shape, contact and bite while supporting comfortable everyday function.",
        },
      ],
    },

    faq: {
      heading: "Dental crown questions",

      items: [
        {
          question: "When might a dental crown be recommended?",
          answer:
            "A crown may be recommended when a tooth is cracked, heavily restored, weakened, treated with root canal therapy or requires an implant-supported restoration. A clinical examination is required.",
        },
        {
          question: "How long does crown treatment take?",
          answer:
            "Treatment time depends on the tooth condition, laboratory process, selected material and whether additional care is required. Your dentist will explain the expected schedule after evaluation.",
        },
        {
          question: "Will the crown look like a natural tooth?",
          answer:
            "The restoration is planned according to tooth shape, shade, surrounding teeth and functional requirements. The final result depends on clinical conditions and material selection.",
        },
        {
          question: "Do dental crowns require special care?",
          answer:
            "Crowns require careful daily oral hygiene, regular dental reviews and protection from habits that may place excessive force on the restoration.",
        },
        {
          question: "Can a crown be placed on a dental implant?",
          answer:
            "Yes. A crown can serve as the visible final restoration over a dental implant after the implant has integrated and the case is clinically ready.",
        },
      ],
    },

    conversion: {
      heading:
        "Would you like to understand your crown treatment options?",

      description:
        "Share your dental concerns, available records and expected travel plans with our team. We will help coordinate an initial consultation before you make a treatment decision.",

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
        "Personalized restorative and travel coordination",
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
      "implant",
      "veneers",
      "smileMakeover",
    ],

    media: treatmentsMedia.crowns,

    seo: {
      title:
        "Dental Crowns in Vietnam | Maiv Thoj Viet Lao",

      description:
        "Explore personalized dental crown treatment in Vietnam with multilingual patient journey support and care from trusted clinical partners.",

      canonical: "/en/treatments/crowns",

      image: treatmentsMedia.crowns.og,
    },
  },
];
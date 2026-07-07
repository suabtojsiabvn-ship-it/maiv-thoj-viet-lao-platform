import type { FAQItem } from "../types/faq.types";

export const faqs: FAQItem[] = [
  {
    id: "visa",

    question: "Do I need a visa to travel to Vietnam?",

    answer:
      "Visa requirements depend on your nationality. Our team will guide you through the latest visa policies and help prepare the required documents before your trip.",

    category: "Travel",

    featured: true,

    order: 1,

    slug: "visa",

    seoTitle: "Vietnam Visa Information",

    seoDescription:
      "Learn about Vietnam visa requirements for dental tourism.",
  },

  {
    id: "airport",

    question: "Do you provide airport pickup?",

    answer:
      "Yes. We offer airport pickup from Noi Bai International Airport and arrange transportation directly to your hotel or the clinic.",

    category: "Travel",

    featured: true,

    order: 2,

    slug: "airport-pickup",

    seoTitle: "Airport Pickup",

    seoDescription:
      "Complimentary airport pickup for international patients.",
  },

  {
    id: "implant",

    question: "How long does an implant treatment take?",

    answer:
      "Treatment time depends on each patient. Most implant cases require 3–7 days for the first visit, with follow-up appointments scheduled later if needed.",

    category: "Treatment",

    featured: true,

    order: 3,

    slug: "implant-duration",

    seoTitle: "Implant Treatment Duration",

    seoDescription:
      "Learn how long implant treatment usually takes.",
  },

  {
    id: "pain",

    question: "Is the treatment painful?",

    answer:
      "Modern dental techniques and local anesthesia help minimize discomfort. Most patients report only mild soreness after treatment.",

    category: "Treatment",

    featured: false,

    order: 4,

    slug: "pain",

    seoTitle: "Is Dental Treatment Painful?",

    seoDescription:
      "Understand what to expect during dental treatment.",
  },

  {
    id: "booking",

    question: "How can I schedule an appointment?",

    answer:
      "You can contact us through WhatsApp, Facebook Messenger, email or our online booking form. Our team will respond within 24 hours.",

    category: "Booking",

    featured: false,

    order: 5,

    slug: "appointment",

    seoTitle: "Book an Appointment",

    seoDescription:
      "How to schedule your dental consultation.",
  },

  {
    id: "payment",

    question: "What payment methods do you accept?",

    answer:
      "We accept cash, international credit cards and bank transfers. Our coordinators will explain payment details before treatment.",

    category: "Payment",

    featured: false,

    order: 6,

    slug: "payment-method",

    seoTitle: "Payment Methods",

    seoDescription:
      "Available payment options for international patients.",
  },
];
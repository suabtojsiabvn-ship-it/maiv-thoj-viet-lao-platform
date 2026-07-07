import { founder } from "@/content/people/founder";
import type { FounderContentData } from "../types/founder.types";

export const founderContent: FounderContentData = {
  badge: "Founder • Senior Patient Advisor",

  heading: "Meet the Person Behind Your Journey",

  intro:
    "The first step toward a confident smile begins with someone you can truly trust.",

  story: [
    "Choosing dental treatment in another country can feel overwhelming. Questions about language, travel, accommodation and finding a trustworthy clinic often stop people from taking the first step.",

    "That is why Maiv Thoj founded Maiv Thoj Viet Lao. Her role is not simply to recommend a clinic, but to understand every patient's needs, explain treatment options honestly and help each person make informed decisions with confidence.",

    "Together with A Sử, your dedicated Patient Care Coordinator, and An Nhien Dental, our trusted clinical partner, every patient receives personal support from the first consultation until safely returning home.",
  ],

  quote:
    founder.promise,

  cta: {
    label: "Start Your Journey",
    href: "/booking",
  },

  values: [
    {
      title: "Honest Consultation",
      description:
        "Clear and transparent advice before you decide to travel.",
    },

    {
      title: "Travel Coordination",
      description:
        "Airport pickup, transportation and accommodation support throughout your journey.",
    },

    {
      title: "Personalized Planning",
      description:
        "Every treatment plan is tailored to your personal needs and schedule.",
    },

    {
      title: "Compassionate Care",
      description:
        "Friendly guidance and continuous support from consultation to recovery.",
    },
  ],
};
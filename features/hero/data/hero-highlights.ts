import {
  HeartHandshake,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { HeroHighlight } from "../types/hero.types";

export const heroHighlights: HeroHighlight[] = [
  {
    icon: HeartHandshake,

    title: "Personal Consultation",

    description:
      "Receive honest advice and a personalized treatment plan before you travel.",
  },

  {
    icon: Plane,

    title: "Airport Pickup",

    description:
      "Private airport pickup and transportation throughout your treatment journey.",
  },

  {
    icon: Users,

    title: "Multilingual Support",

    description:
      "Friendly assistance in English, Vietnamese, Lao, Hmong and Thai.",
  },

  {
    icon: ShieldCheck,

    title: "Trusted Clinical Partner",

    description:
      "High-quality dental care provided by our experienced clinical partner in Vietnam.",
  },
];
import {
  HeartHandshake,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

import type { HeroHighlightConfig } from "../types/hero.types";

export const heroHighlights: HeroHighlightConfig[] = [
  {
    key: "consultation",
    icon: HeartHandshake,
  },

  {
    key: "airportPickup",
    icon: Plane,
  },

  {
    key: "multilingualSupport",
    icon: Users,
  },

  {
    key: "clinicalPartner",
    icon: ShieldCheck,
  },
];
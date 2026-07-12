import {
  HeartHandshake,
  Languages,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import type { WhyCardConfig } from "../types/why.types";

export const whyCards: WhyCardConfig[] = [
  {
    key: "guidance",
    icon: HeartHandshake,
  },
  {
    key: "language",
    icon: Languages,
  },
  {
    key: "coordination",
    icon: MapPinned,
  },
  {
    key: "care",
    icon: ShieldCheck,
  },
];
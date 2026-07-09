import { Camera, HeartHandshake, Languages, MapPinned } from "lucide-react";

import type { WhyCardConfig } from "../types/why.types";

export const whyCards: WhyCardConfig[] = [
  { key: "guidance", icon: HeartHandshake },
  { key: "language", icon: Languages },
  { key: "coordination", icon: MapPinned },
  { key: "memories", icon: Camera },
];
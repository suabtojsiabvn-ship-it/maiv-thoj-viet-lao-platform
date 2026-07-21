import { BookOpenText, MapPinned } from "lucide-react";

import type { ExploreItemMeta } from "../types/explore.types";

/**
 * Locale-independent route and icon metadata.
 * All visible text is resolved from the active dictionary.
 */
export const exploreItems = [
  {
    key: "destinations",
    href: "/destinations",
    icon: MapPinned,
  },
  {
    key: "travelGuide",
    href: "/travel-guide",
    icon: BookOpenText,
  },
] as const satisfies readonly ExploreItemMeta[];

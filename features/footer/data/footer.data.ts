import type { FooterTreatmentLink } from "../types/footer.types";

/**
 * Locale-independent route metadata only.
 * All visible labels come from the active locale dictionary.
 */
export const footerTreatmentLinks = [
  {
    dictionaryKey: "implants",
    slug: "implant",
  },
  {
    dictionaryKey: "smileMakeover",
    slug: "smileMakeover",
  },
  {
    dictionaryKey: "veneers",
    slug: "veneers",
  },
  {
    dictionaryKey: "crowns",
    slug: "crowns",
  },
] as const satisfies readonly FooterTreatmentLink[];

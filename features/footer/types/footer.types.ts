import type { TreatmentSlug } from "@/content/treatments";

export type FooterTreatmentDictionaryKey =
  | "implants"
  | "smileMakeover"
  | "veneers"
  | "crowns";

export interface FooterTreatmentLink {
  dictionaryKey: FooterTreatmentDictionaryKey;
  slug: TreatmentSlug;
}

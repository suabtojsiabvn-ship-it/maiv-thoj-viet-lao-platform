import type { Locale } from "@/types/i18n";

import type { TreatmentTranslations } from "../localize";
import { hmnTreatmentTranslations } from "./hmn";
import { loTreatmentTranslations } from "./lo";
import { thTreatmentTranslations } from "./th";
import { viTreatmentTranslations } from "./vi";

export const localizedTreatmentTranslations: Partial<
  Record<Locale, TreatmentTranslations>
> = {
  hmn: hmnTreatmentTranslations,
  vi: viTreatmentTranslations,
  th: thTreatmentTranslations,
  lo: loTreatmentTranslations,
};

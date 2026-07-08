export type TreatmentSlug =
  | "implant"
  | "crowns"
  | "veneers"
  | "smileMakeover";

export interface TreatmentMeta {
  slug: TreatmentSlug;
  image: string;
}

export interface Treatment {
  slug: TreatmentSlug;
  title: string;
  description: string;
  image: string;
}
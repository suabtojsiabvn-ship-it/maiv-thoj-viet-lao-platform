import type { BaseContent } from "./base-content";

export type TravelGuideCategory =
  | "airport"
  | "hotel"
  | "transportation"
  | "visa"
  | "food"
  | "culture"
  | "aftercare";

export interface TravelGuideContent extends BaseContent {
  category: TravelGuideCategory;
  estimatedTime?: string;
  estimatedBudget?: string;
  tips: string[];
}

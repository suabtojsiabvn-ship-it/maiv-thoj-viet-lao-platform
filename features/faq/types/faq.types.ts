export type FAQCategory =
  | "About Platform"
  | "Planning Your Journey"
  | "Travel Support"
  | "Treatment"
  | "Recovery & Aftercare"
  | "Payment"
  | "International Patients";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featured?: boolean;
  order: number;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
  related?: string[];
}
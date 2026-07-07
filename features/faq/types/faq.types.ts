export type FAQCategory =
  | "Travel"
  | "Treatment"
  | "Booking"
  | "Payment";

export interface FAQItem {
  id: string;

  question: string;

  answer: string;

  category: FAQCategory;

  featured?: boolean;

  order: number;

  slug?: string;

  seoTitle?: string;

  seoDescription?: string;
}
import type { FAQCategory as FAQCategoryType, FAQItem } from "../types/faq.types";
import { FAQAccordion } from "./FAQAccordion";

interface FAQCategoryProps {
  category: FAQCategoryType;
  items: FAQItem[];
}

export function FAQCategory({
  category,
  items,
}: FAQCategoryProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={`faq-${category.toLowerCase()}`}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-slate-800" />

        <h2
          id={`faq-${category.toLowerCase()}`}
          className="text-xl font-bold tracking-wide text-cyan-400"
        >
          {category}
        </h2>

        <div className="h-px flex-1 bg-slate-800" />
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <FAQAccordion
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}
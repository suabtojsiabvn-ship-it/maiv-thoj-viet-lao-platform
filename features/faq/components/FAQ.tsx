import {
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";

import { faqs } from "../data/faq.data";
import type { FAQCategory as FAQCategoryType } from "../types/faq.types";

import { FAQCategory } from "./FAQCategory";
import { FAQCTA } from "./FAQCTA";

export function FAQ() {
  const categories = [
    ...new Set(faqs.map((faq) => faq.category)),
  ] as FAQCategoryType[];

  return (
    <Section className="bg-slate-950">
      <Container>
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          description="Find answers to the most common questions about dental treatment, travel arrangements, booking and payment."
        />

        <div className="mt-16 space-y-16">
          {categories.map((category) => (
            <FAQCategory
              key={category}
              category={category}
              items={faqs
                .filter((faq) => faq.category === category)
                .sort((a, b) => a.order - b.order)}
            />
          ))}
        </div>

        <FAQCTA />
      </Container>
    </Section>
  );
}
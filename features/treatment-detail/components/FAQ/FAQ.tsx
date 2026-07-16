import { Container, Section } from "@/components/ui";

import type { TreatmentContent } from "@/content/treatments";

interface FAQProps {
  faq: TreatmentContent["faq"];
}

export function FAQ({
  faq,
}: FAQProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white">
            {faq.heading}
          </h2>

          

          <div className="mt-8 space-y-6">
            {faq.items.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-900/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
"use client";

import { Container } from "@/components/ui";
import { useHero } from "@/features/hero/hooks/useHero";

import { TrustItem } from "./TrustItem";

export function TrustRibbon() {
  const hero = useHero();

  return (
    <section
      aria-labelledby="trust-ribbon-heading"
      className="relative overflow-hidden border-b border-primary/10 bg-secondary/55 py-5 sm:py-6"
    >
      <Container>
        <h2 id="trust-ribbon-heading" className="sr-only">
          {hero.highlights.heading}
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {hero.highlights.items.map((item) => (
            <TrustItem
              key={item.key}
              label={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

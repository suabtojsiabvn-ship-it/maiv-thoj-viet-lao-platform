"use client";

import { Container } from "@/components/ui/container";
import type { Locale } from "@/types/i18n";

import { ExploreCard } from "./components/ExploreCard";
import { useExplore } from "./hooks/useExplore";

interface ExploreProps {
  locale: Locale;
}

export function Explore({ locale }: ExploreProps) {
  const explore = useExplore();

  return (
    <section className="bg-[#F7F3EA] py-20 text-[#15130F] sm:py-24 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9A6A18]">
            {explore.sectionLabel}
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#15130F] sm:text-5xl">
            {explore.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#61594D] sm:text-lg sm:leading-8">
            {explore.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-7">
          {explore.items.map((item) => (
            <ExploreCard
              key={item.key}
              locale={locale}
              item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

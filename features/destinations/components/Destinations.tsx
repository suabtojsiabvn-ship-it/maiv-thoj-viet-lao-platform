import { Container } from "@/components/ui/container";
import { getDestinationsByLocale } from "@/content/destinations";
import { getDictionary } from "@/content/locales";
import type { Locale } from "@/types/i18n";

import { DestinationGrid } from "./DestinationGrid";

interface DestinationsProps {
  locale: Locale;
}

export async function Destinations({ locale }: DestinationsProps) {
  const dictionary = await getDictionary(locale);
  const page = dictionary.pages.destinations;
  const destinations = getDestinationsByLocale(locale);

  return (
    <section className="relative overflow-hidden bg-[#090806] py-20 text-[#F8F4EC] sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(214,168,75,0.12),transparent_68%)]"
      />

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E9CC82]">
            {page.badge}
          </p>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#F7F3EA] sm:text-5xl">
            {page.heading}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#B8B0A2] sm:text-lg sm:leading-8">
            {page.description}
          </p>
        </div>

        {destinations.length > 0 ? (
          <DestinationGrid
            destinations={destinations}
            locale={locale}
            items={page.items}
            ctaLabel={page.cardCta}
          />
        ) : (
          <div className="mt-12 rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#15130F] p-8 text-center">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#F7F3EA]">
              {page.emptyState.heading}
            </h3>
            <p className="mt-3 text-[#B8B0A2]">{page.emptyState.description}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

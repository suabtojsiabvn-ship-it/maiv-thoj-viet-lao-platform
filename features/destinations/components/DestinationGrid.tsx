import { isDestinationKey } from "@/content/destinations";
import type { DestinationContent } from "@/types/content/destination";
import type {
  Locale,
  LocaleDestinationItemDictionary,
  LocaleDestinationKey,
} from "@/types/i18n";

import { DestinationCard } from "./DestinationCard";

interface DestinationGridProps {
  destinations: DestinationContent[];
  locale: Locale;
  items: Record<LocaleDestinationKey, LocaleDestinationItemDictionary>;
  ctaLabel: string;
}

export function DestinationGrid({
  destinations,
  locale,
  items,
  ctaLabel,
}: DestinationGridProps) {
  if (destinations.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-7 xl:grid-cols-3">
      {destinations.map((destination) => {
        if (!isDestinationKey(destination.slug)) {
          return null;
        }

        return (
          <DestinationCard
            key={destination.id}
            destination={destination}
            locale={locale}
            content={items[destination.slug]}
            ctaLabel={ctaLabel}
          />
        );
      })}
    </div>
  );
}

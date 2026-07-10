import type { DestinationContent } from "@/types/content/destination";

import { DestinationCard } from "./DestinationCard";

interface DestinationGridProps {
  destinations: DestinationContent[];
}

export function DestinationGrid({ destinations }: DestinationGridProps) {
  if (destinations.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}
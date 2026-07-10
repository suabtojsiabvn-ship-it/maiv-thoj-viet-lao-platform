import type { TravelGuideContent } from "@/types/content/travel-guide";

import { TravelGuideCard } from "./TravelGuideCard";

interface TravelGuideGridProps {
  guides: TravelGuideContent[];
}

export function TravelGuideGrid({ guides }: TravelGuideGridProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {guides.map((guide) => (
        <TravelGuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
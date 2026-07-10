import type { TravelGuideContent } from "@/types/content/travel-guide";

import { TravelGuideBody } from "./TravelGuideBody";
import { TravelGuideHero } from "./TravelGuideHero";
import { TravelGuideMeta } from "./TravelGuideMeta";
import { TravelGuideTips } from "./TravelGuideTips";

interface TravelGuideArticleProps {
  guide: TravelGuideContent;
}

export function TravelGuideArticle({ guide }: TravelGuideArticleProps) {
  return (
    <main className="min-h-screen bg-slate-950">
      <TravelGuideHero guide={guide} />

      <TravelGuideMeta guide={guide} />

      <TravelGuideBody guide={guide} />

      <TravelGuideTips tips={guide.tips} />
    </main>
  );
}
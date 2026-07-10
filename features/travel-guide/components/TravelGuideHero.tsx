import type { TravelGuideContent } from "@/types/content/travel-guide";

interface TravelGuideHeroProps {
  guide: TravelGuideContent;
}

export function TravelGuideHero({ guide }: TravelGuideHeroProps) {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Travel Guide
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
          {guide.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {guide.summary}
        </p>
      </div>
    </section>
  );
}
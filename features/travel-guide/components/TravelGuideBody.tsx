import type { TravelGuideContent } from "@/types/content/travel-guide";

interface TravelGuideBodyProps {
  guide: TravelGuideContent;
}

export function TravelGuideBody({ guide }: TravelGuideBodyProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <div className="space-y-6 text-lg leading-8 text-slate-300">
        <p>{guide.summary}</p>

        <p>
          This guide is part of the Maiv Thoj Viet Lao Platform patient journey
          support system, helping international patients feel prepared before,
          during and after their dental treatment in Vietnam.
        </p>

        <p>
          Our goal is to make each step easier to understand, from planning and
          arrival to clinic visits, recovery, travel experiences and returning
          home with confidence.
        </p>
      </div>
    </section>
  );
}
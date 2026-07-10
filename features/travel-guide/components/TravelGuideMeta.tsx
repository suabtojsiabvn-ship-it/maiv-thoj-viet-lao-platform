import type { TravelGuideContent } from "@/types/content/travel-guide";

interface TravelGuideMetaProps {
  guide: TravelGuideContent;
}

export function TravelGuideMeta({ guide }: TravelGuideMetaProps) {
  const items = [
    {
      label: "Category",
      value: guide.category,
    },
    {
      label: "Estimated time",
      value: guide.estimatedTime ?? "Flexible",
    },
    {
      label: "Estimated budget",
      value: guide.estimatedBudget ?? "Depends on your journey",
    },
  ];

  return (
    <section className="mx-auto grid max-w-5xl gap-4 px-6 py-10 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            {item.label}
          </p>

          <p className="mt-2 font-semibold text-white">{item.value}</p>
        </div>
      ))}
    </section>
  );
}
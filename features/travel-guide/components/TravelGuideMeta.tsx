import { CalendarClock, MapPinned, WalletCards } from "lucide-react";

import type {
  LocaleTravelGuideItemDictionary,
  LocaleTravelGuidePageDictionary,
} from "@/types/i18n";

interface TravelGuideMetaProps {
  content: LocaleTravelGuideItemDictionary;
  labels: LocaleTravelGuidePageDictionary["labels"];
}

export function TravelGuideMeta({ content, labels }: TravelGuideMetaProps) {
  const items = [
    {
      label: labels.category,
      value: content.category,
      icon: MapPinned,
    },
    {
      label: labels.estimatedTime,
      value: content.estimatedTime,
      icon: CalendarClock,
    },
    {
      label: labels.estimatedBudget,
      value: content.estimatedBudget,
      icon: WalletCards,
    },
  ];

  return (
    <section className="px-5 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {items.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-[#D6A84B]/20 bg-[#15130F] p-5 sm:p-6"
          >
            <Icon aria-hidden="true" className="size-5 text-[#D6A84B]" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9E9587]">
              {label}
            </p>
            <p className="mt-2 font-semibold leading-7 text-[#F7F3EA]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Check } from "lucide-react";

interface TravelGuideTipsProps {
  tips: string[];
  heading: string;
}

export function TravelGuideTips({ tips, heading }: TravelGuideTipsProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <section className="px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F7F3EA] sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-8 space-y-4">
          {tips.map((tip) => (
            <div
              key={tip}
              className="flex gap-4 rounded-2xl border border-[#D6A84B]/20 bg-[#15130F] p-5 text-[#C9C0B2] sm:p-6"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#176B5B]/25 text-[#76CBB8]">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <p className="leading-7">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

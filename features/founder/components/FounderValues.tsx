import { HeartHandshake, Plane, CalendarCheck2, HandHeart } from "lucide-react";

interface FounderValue {
  title: string;
  description: string;
}

interface FounderValuesProps {
  values: FounderValue[];
}

const icons = [
  HeartHandshake,
  Plane,
  CalendarCheck2,
  HandHeart,
];

export function FounderValues({
  values,
}: FounderValuesProps) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {values.map((value, index) => {
        const Icon = icons[index] ?? HeartHandshake;

        return (
          <div
            key={value.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/5"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-500/20">
                <Icon className="h-6 w-6" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
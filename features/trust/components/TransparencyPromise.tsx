import {
  BadgeCheck,
  CarFront,
  ClipboardCheck,
  Languages,
  ShieldCheck,
} from "lucide-react";

interface TransparencyPromiseProps {
  transparency: {
    title: string;
    description: string;
    items: string[];
  };
}

const icons = [
  ClipboardCheck,
  BadgeCheck,
  ShieldCheck,
  CarFront,
  Languages,
];

export function TransparencyPromise({
  transparency,
}: TransparencyPromiseProps) {
  return (
    <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-slate-950 p-6 shadow-xl shadow-cyan-500/5 md:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {transparency.title}
        </p>

        <p className="mt-3 text-base leading-7 text-slate-300">
          {transparency.description}
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {transparency.items.map((item, index) => {
          const Icon = icons[index] ?? ShieldCheck;

          return (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-sm font-medium leading-6 text-slate-200">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import {
  BadgeCheck,
  Gem,
  ShieldCheck,
} from "lucide-react";

interface MaterialBarProps {
  material: {
    title: string;
    description: string;
    items: string[];
  };
}

const icons = [
  Gem,
  BadgeCheck,
  ShieldCheck,
];

export function MaterialBar({
  material,
}: MaterialBarProps) {
  return (
    <div className="mt-12 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-500/5 md:p-8">
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
          <ShieldCheck className="h-7 w-7" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {material.title}
          </p>

          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">
            {material.description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {material.items.map((item, index) => {
          const Icon = icons[index] ?? ShieldCheck;

          return (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3"
            >
              <Icon className="h-5 w-5 text-cyan-300" />

              <span className="text-sm font-medium text-slate-200">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
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
    <div className="mt-10 rounded-3xl border border-primary/20 bg-background p-5 shadow-xl shadow-black/15 md:mt-12 md:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {transparency.title}
        </p>

        <p className="mt-3 text-base leading-7 text-muted-foreground">
          {transparency.description}
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 md:gap-4 lg:grid-cols-3">
        {transparency.items.map((item, index) => {
          const Icon = icons[index] ?? ShieldCheck;

          return (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-card/70 px-4 py-4 transition-colors hover:border-primary/30 hover:bg-secondary/80 sm:gap-4 sm:px-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <p className="text-sm font-medium leading-6 text-foreground">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

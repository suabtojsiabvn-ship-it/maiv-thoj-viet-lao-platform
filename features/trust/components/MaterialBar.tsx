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
    <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-background via-secondary to-background p-5 shadow-xl shadow-black/15 md:mt-12 md:p-8">
      <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
          <ShieldCheck className="h-7 w-7" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {material.title}
          </p>

          <p className="mt-3 max-w-4xl text-base leading-7 text-muted-foreground">
            {material.description}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 border-t border-primary/15 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {material.items.map((item, index) => {
          const Icon = icons[index] ?? ShieldCheck;

          return (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-card/60 px-4 py-3"
            >
              <Icon className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium text-foreground">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

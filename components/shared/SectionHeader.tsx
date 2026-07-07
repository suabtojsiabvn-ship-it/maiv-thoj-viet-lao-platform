import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      )}
    </header>
  );
}
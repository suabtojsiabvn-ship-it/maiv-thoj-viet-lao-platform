import { GlassCard } from "./glass-card";

interface StatCardProps {
  value: string;
  label: string;
  tone?: "dark" | "light";
}

export function StatCard({
  value,
  label,
  tone = "dark",
}: StatCardProps) {
  return (
    <GlassCard
      tone={tone}
      className="flex flex-col items-center justify-center p-6 text-center md:p-8"
    >
      <div className="text-3xl font-bold text-primary md:text-4xl">
        {value}
      </div>

      <p
        className={[
          "mt-2 text-sm leading-5",
          tone === "light"
            ? "text-[#665f54]"
            : "text-muted-foreground",
        ].join(" ")}
      >
        {label}
      </p>
    </GlassCard>
  );
}

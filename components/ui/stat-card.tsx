import { GlassCard } from "./glass-card";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <GlassCard className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-4xl font-bold text-cyan-400">
        {value}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </GlassCard>
  );
}
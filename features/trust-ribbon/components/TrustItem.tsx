import type { LucideIcon } from "lucide-react";

interface TrustItemProps {
  label: string;
  description: string;
  icon: LucideIcon;
}

export function TrustItem({
  label,
  description,
  icon: Icon,
}: TrustItemProps) {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-slate-950">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          {label}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
import { CheckCircle2 } from "lucide-react";

interface FeatureItemProps {
  children: React.ReactNode;
}

export function FeatureItem({
  children,
}: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={20}
        className="mt-1 shrink-0 text-cyan-400"
      />

      <span className="text-slate-300">
        {children}
      </span>
    </div>
  );
}
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5">
      <div className="mb-5 text-cyan-300">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>
    </article>
  );
}
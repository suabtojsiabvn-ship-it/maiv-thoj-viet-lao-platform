import type { ClinicalTechnology } from "../types/clinical-partner.types";

interface ClinicalTechnologyProps {
  technologies: ClinicalTechnology[];
}

export function ClinicalTechnology({
  technologies,
}: ClinicalTechnologyProps) {
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/50 p-8">
      <h3 className="text-2xl font-semibold text-white">
        Modern Clinical Technology
      </h3>

      <div className="mt-8 space-y-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="border-b border-white/10 pb-5 last:border-none last:pb-0"
          >
            <h4 className="text-lg font-medium text-white">
              {technology.name}
            </h4>

            <p className="mt-2 leading-7 text-slate-400">
              {technology.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
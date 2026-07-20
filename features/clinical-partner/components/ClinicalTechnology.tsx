import type { ClinicalTechnology } from "../types/clinical-partner.types";

interface ClinicalTechnologyProps {
  title: string;
  technologies: ClinicalTechnology[];
}

export function ClinicalTechnology({
  title,
  technologies,
}: ClinicalTechnologyProps) {
  return (
    <div className="mt-10 rounded-3xl border border-primary/20 bg-background p-5 shadow-xl shadow-black/15 md:mt-12 md:p-8">
      <h3 className="font-heading text-2xl font-semibold text-foreground">
        {title}
      </h3>

      <div className="mt-6 space-y-5 md:mt-8 md:space-y-6">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="border-b border-primary/15 pb-5 last:border-none last:pb-0"
          >
            <h4 className="text-lg font-medium text-gold-soft">
              {technology.name}
            </h4>

            <p className="mt-2 leading-7 text-muted-foreground">
              {technology.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { FadeUp } from "@/components/motion";
import { Badge } from "@/components/ui";

interface FounderContentProps {
  sectionLabel: string;
  title: string;
  description: string;
  story: string[];
}

export function FounderContent({
  sectionLabel,
  title,
  description,
  story,
}: FounderContentProps) {
  return (
    <div>
      <FadeUp>
        <Badge variant="cyan">{sectionLabel}</Badge>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {description}
        </p>
      </FadeUp>

      <div className="mt-8 space-y-5">
        {story.map((paragraph) => (
          <p key={paragraph} className="text-base leading-7 text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
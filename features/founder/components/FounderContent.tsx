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
        <Badge
          variant="gold"
          className="text-[#765817]"
        >
          {sectionLabel}
        </Badge>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2 className="mt-5 text-balance font-heading text-3xl font-bold leading-tight text-ivory-foreground md:mt-6 md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="mt-5 text-base leading-7 text-[#554e43] md:mt-6 md:text-lg md:leading-8">
          {description}
        </p>
      </FadeUp>

      <div className="mt-6 space-y-4 md:mt-8 md:space-y-5">
        {story.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-7 text-[#665f54]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

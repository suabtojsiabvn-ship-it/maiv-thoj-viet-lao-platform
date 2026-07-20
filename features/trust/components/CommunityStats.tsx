import { StatCard } from "@/components/ui";

interface CommunityStatsProps {
  community: {
    title: string;
    description: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
}

export function CommunityStats({
  community,
}: CommunityStatsProps) {
  return (
    <div className="mt-12 md:mt-14">
      <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
        <h3 className="font-heading text-2xl font-bold text-ivory-foreground md:text-3xl">
          {community.title}
        </h3>

        <p className="mt-4 text-base leading-7 text-[#665f54] md:text-lg md:leading-8">
          {community.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {community.stats.map((item) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
            tone="light"
          />
        ))}
      </div>
    </div>
  );
}

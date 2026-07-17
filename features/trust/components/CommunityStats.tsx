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
    <div className="mt-14">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h3 className="text-2xl font-bold text-slate-900">
          {community.title}
        </h3>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          {community.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {community.stats.map((item) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}
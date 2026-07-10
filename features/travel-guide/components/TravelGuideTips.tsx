interface TravelGuideTipsProps {
  tips: string[];
}

export function TravelGuideTips({ tips }: TravelGuideTipsProps) {
  if (tips.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
      <h2 className="text-3xl font-bold text-white">Helpful tips</h2>

      <div className="mt-8 space-y-4">
        {tips.map((tip) => (
          <div
            key={tip}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300"
          >
            {tip}
          </div>
        ))}
      </div>
    </section>
  );
}
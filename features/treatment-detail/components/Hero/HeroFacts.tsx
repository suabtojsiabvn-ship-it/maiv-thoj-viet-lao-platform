interface HeroFactsProps {
  items: readonly string[];
}

export function HeroFacts({
  items,
}: HeroFactsProps) {
  return (
    <ul className="mt-10 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-slate-300"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
            ✓
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
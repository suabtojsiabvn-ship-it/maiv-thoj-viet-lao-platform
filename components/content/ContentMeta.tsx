interface ContentMetaItem {
  label: string;
  value: string;
}

interface ContentMetaProps {
  items: ContentMetaItem[];
}

export function ContentMeta({ items }: ContentMetaProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5"
        >
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            {item.label}
          </p>

          <p className="mt-2 font-semibold text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
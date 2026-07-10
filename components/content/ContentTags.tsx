interface ContentTagsProps {
  tags?: string[];
}

export function ContentTags({ tags = [] }: ContentTagsProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-wrap gap-3 px-6 pb-16">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
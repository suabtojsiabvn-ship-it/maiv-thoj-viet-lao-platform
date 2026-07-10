interface ContentBodyProps {
  paragraphs: string[];
}

export function ContentBody({ paragraphs }: ContentBodyProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="space-y-6 text-lg leading-8 text-slate-300">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
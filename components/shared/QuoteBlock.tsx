interface QuoteBlockProps {
  quote: string;
  author?: string;
}

export function QuoteBlock({
  quote,
  author,
}: QuoteBlockProps) {
  return (
    <blockquote className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
      <p className="text-lg italic leading-8 text-slate-200">
        “{quote}”
      </p>

      {author && (
        <footer className="mt-4 text-sm font-medium text-cyan-300">
          — {author}
        </footer>
      )}
    </blockquote>
  );
}
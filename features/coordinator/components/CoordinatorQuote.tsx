interface CoordinatorQuoteProps {
  quote: string;
  author: string;
}

export function CoordinatorQuote({
  quote,
  author,
}: CoordinatorQuoteProps) {
  return (
    <blockquote className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
      <div className="absolute left-6 top-4 text-6xl font-serif leading-none text-cyan-500/20">
        &ldquo;
      </div>

      <p className="relative z-10 text-lg italic leading-8 text-slate-200">
        {quote}
      </p>

      <footer className="mt-6 border-t border-white/10 pt-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
          {author}
        </span>
      </footer>
    </blockquote>
  );
}
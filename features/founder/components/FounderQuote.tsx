interface FounderQuoteProps {
  quote: string;
  author: string;
}

export function FounderQuote({
  quote,
  author,
}: FounderQuoteProps) {
  return (
    <blockquote className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-lg font-medium leading-8 text-white">
      <p>“{quote}”</p>

      <cite className="mt-4 block text-sm font-semibold not-italic text-cyan-200">
        — {author}
      </cite>
    </blockquote>
  );
}

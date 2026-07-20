interface FounderQuoteProps {
  quote: string;
  author: string;
}

export function FounderQuote({
  quote,
  author,
}: FounderQuoteProps) {
  return (
    <blockquote className="rounded-3xl border border-primary/30 bg-white/65 p-5 text-base font-medium leading-7 text-ivory-foreground shadow-sm shadow-black/5 md:p-6 md:text-lg md:leading-8">
      <p>“{quote}”</p>

      <cite className="mt-4 block text-sm font-semibold not-italic text-[#765817]">
        — {author}
      </cite>
    </blockquote>
  );
}

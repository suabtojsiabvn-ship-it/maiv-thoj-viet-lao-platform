interface FounderQuoteProps {
  quote: string;
}

export function FounderQuote({ quote }: FounderQuoteProps) {
  return (
    <blockquote className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-lg font-medium leading-8 text-white">
      “{quote}”
    </blockquote>
  );
}
<cite>Maiv Thoj</cite>                                                                                                          
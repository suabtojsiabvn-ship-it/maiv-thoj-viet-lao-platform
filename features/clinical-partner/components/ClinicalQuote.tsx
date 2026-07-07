interface ClinicalQuoteProps {
  quote: string;
}

export function ClinicalQuote({
  quote,
}: ClinicalQuoteProps) {
  return (
    <blockquote className="mt-10 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">
      <p className="text-lg italic leading-8 text-slate-200">
        “{quote}”
      </p>
    </blockquote>
  );
}
interface ClinicalQuoteProps {
  quote: string;
}

export function ClinicalQuote({
  quote,
}: ClinicalQuoteProps) {
  return (
    <blockquote className="mt-8 rounded-3xl border border-primary/30 bg-white/65 p-5 shadow-sm shadow-black/5 md:mt-10 md:p-8">
      <p className="text-base italic leading-7 text-ivory-foreground md:text-lg md:leading-8">
        “{quote}”
      </p>
    </blockquote>
  );
}

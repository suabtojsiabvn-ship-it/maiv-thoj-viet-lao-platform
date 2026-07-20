interface CoordinatorQuoteProps {
  quote: string;
  author: string;
}

export function CoordinatorQuote({
  quote,
  author,
}: CoordinatorQuoteProps) {
  return (
    <blockquote className="relative mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-card/65 p-5 md:mt-10 md:p-8">
      <div className="absolute left-5 top-3 font-serif text-6xl leading-none text-primary/20 md:left-6 md:top-4">
        &ldquo;
      </div>

      <p className="relative z-10 text-base italic leading-7 text-foreground md:text-lg md:leading-8">
        {quote}
      </p>

      <footer className="mt-5 border-t border-primary/15 pt-4 md:mt-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          {author}
        </span>
      </footer>
    </blockquote>
  );
}

interface TravelGuideBodyProps {
  paragraphs: string[];
}

export function TravelGuideBody({ paragraphs }: TravelGuideBodyProps) {
  return (
    <section className="px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl space-y-6 text-base leading-8 text-[#C9C0B2] sm:text-lg sm:leading-9">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

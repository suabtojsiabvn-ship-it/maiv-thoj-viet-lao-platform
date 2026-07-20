import Image from "next/image";

interface FounderImageProps {
  src: string;
  alt: string;
}

export function FounderImage({ src, alt }: FounderImageProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/25 bg-white shadow-2xl shadow-black/15 md:rounded-[2rem]">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={900}
        sizes="(min-width: 1024px) 44vw, 100vw"
        className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/15" />
    </div>
  );
}

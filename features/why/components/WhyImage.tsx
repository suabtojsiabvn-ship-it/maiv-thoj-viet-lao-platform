import Image from "next/image";

interface WhyImageProps {
  src: string;
  alt: string;
}

export function WhyImage({ src, alt }: WhyImageProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-primary/20 bg-card shadow-2xl shadow-black/35 md:rounded-[2rem]">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={900}
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/5 to-transparent" />

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/10" />
    </div>
  );
}

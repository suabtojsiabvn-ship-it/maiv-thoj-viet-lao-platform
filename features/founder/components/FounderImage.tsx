import Image from "next/image";

interface FounderImageProps {
  src: string;
  alt: string;
}

export function FounderImage({ src, alt }: FounderImageProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-cyan-950/30">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={900}
        className="h-full min-h-[520px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
    </div>
  );
}
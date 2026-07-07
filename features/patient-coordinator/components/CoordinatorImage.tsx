import Image from "next/image";

interface CoordinatorImageProps {
  src: string;
  alt: string;
}

export function CoordinatorImage({
  src,
  alt,
}: CoordinatorImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={800}
          priority
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute -bottom-6 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-6 backdrop-blur">
        <h3 className="text-lg font-semibold text-white">
          Personal Support
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Airport pickup, transportation, translation and daily coordination
          throughout your treatment journey.
        </p>
      </div>
    </div>
  );
}
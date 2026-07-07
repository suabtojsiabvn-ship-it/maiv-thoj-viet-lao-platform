import Image from "next/image";

interface ClinicalPartnerImageProps {
  src: string;
  alt: string;
}

export function ClinicalPartnerImage({
  src,
  alt,
}: ClinicalPartnerImageProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={700}
          priority
          className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      <div className="absolute -bottom-6 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-cyan-500/20 bg-slate-900/90 p-6 backdrop-blur">
        <h3 className="text-lg font-semibold text-white">
          Trusted Clinical Excellence
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Modern technology, experienced clinicians and personalized care for
          every international patient.
        </p>
      </div>
    </div>
  );
}
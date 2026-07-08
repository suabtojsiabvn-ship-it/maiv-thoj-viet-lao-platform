"use client";

import Image from "next/image";

import { useDictionary } from "@/hooks/useDictionary";

interface FounderImageProps {
  src: string;
  alt: string;
}

export function FounderImage({
  src,
  alt,
}: FounderImageProps) {
  const { hero } = useDictionary();

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

      <div className="absolute -bottom-6 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-900/90 px-6 py-4 backdrop-blur">
        <div className="text-center">
          <p className="text-sm font-medium text-cyan-300">
            {hero.badge}
          </p>

          <div className="mt-1 flex items-center justify-center gap-6">
            <div>
              <p className="text-xl font-bold text-white">
                454K+
              </p>

              <p className="text-xs text-slate-400">
                {hero.stats.facebookCommunity}
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-xl font-bold text-white">
                1.3M+
              </p>

              <p className="text-xs text-slate-400">
                {hero.stats.tiktokCommunity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
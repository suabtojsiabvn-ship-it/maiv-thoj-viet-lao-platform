import Image from "next/image";
import { PlayCircle } from "lucide-react";

import { GlassCard } from "./glass-card";

interface VideoCardProps {
  image: string;
  title: string;
  duration?: string;
}

export function VideoCard({
  image,
  title,
  duration,
}: VideoCardProps) {
  return (
    <GlassCard className="group overflow-hidden p-0">

      <div className="relative aspect-video overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/25">

          <PlayCircle
            size={72}
            className="text-white transition-transform duration-300 group-hover:scale-110"
          />

        </div>

        {duration && (
          <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
            {duration}
          </div>
        )}

      </div>

    </GlassCard>
  );
}
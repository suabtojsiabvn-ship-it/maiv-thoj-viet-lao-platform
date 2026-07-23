"use client";

import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";

import type { MediaPageCopy, MediaVideo } from "@/content/media";

interface VideoCardProps {
  video: MediaVideo;
  index: number;
  copy: Pick<
    MediaPageCopy,
    "playVideo" | "watchOnYouTube" | "videoLabel" | "shortLabel"
  >;
}

export function VideoCard({ video, index, copy }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const formatLabel =
    video.format === "short" ? copy.shortLabel : copy.videoLabel;

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-[#D6A84B]/20 bg-[#11100D] shadow-2xl shadow-black/20">
      <div className="relative aspect-video overflow-hidden bg-[#080705]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${copy.playVideo}: ${video.title}`}
            className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D6A84B]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,168,75,0.24),transparent_42%),linear-gradient(135deg,#17130B_0%,#080705_58%,#15110A_100%)]"
            />

            <span
              aria-hidden="true"
              className="absolute -right-12 -top-16 h-44 w-44 rounded-full border border-[#D6A84B]/15"
            />

            <span
              aria-hidden="true"
              className="absolute -right-4 -top-8 h-32 w-32 rounded-full border border-[#D6A84B]/20"
            />

            <span className="absolute left-5 top-5 rounded-full border border-[#D6A84B]/25 bg-black/35 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#DCC078] backdrop-blur-sm">
              {formatLabel}
            </span>

            <span className="absolute bottom-5 left-5 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#D6A84B]/15 sm:text-6xl">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#D6A84B] text-[#090806] shadow-[0_12px_45px_rgba(214,168,75,0.3)] transition duration-300 group-hover:scale-105 group-hover:bg-[#E8C96E]">
              <Play aria-hidden="true" className="ml-1 h-7 w-7 fill-current" />
            </span>

            <span className="sr-only">{copy.playVideo}</span>
          </button>
        )}
      </div>

      <div className="p-6 sm:p-7">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#F7F3EA] sm:text-[1.75rem]">
          {video.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#B8B0A2] sm:text-base">
          {video.description}
        </p>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D6A84B]/30 px-4 py-2 text-sm font-semibold text-[#DCC078] transition hover:border-[#D6A84B]/70 hover:bg-[#D6A84B]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84B]"
        >
          {copy.watchOnYouTube}
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

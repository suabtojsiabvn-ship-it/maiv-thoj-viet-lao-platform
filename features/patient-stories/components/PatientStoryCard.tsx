import Image from "next/image";
import Link from "next/link";
import { ExternalLink, PlayCircle } from "lucide-react";

import { GlassCard } from "@/components/ui";

import type { PatientStory } from "../types/patient-story.types";

interface PatientStoryCardProps {
  story: PatientStory;
}

export function PatientStoryCard({
  story,
}: PatientStoryCardProps) {
  return (
    <GlassCard className="group overflow-hidden p-0 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={story.thumbnail}
          alt={`${story.patient} testimonial`}
          fill
          priority={story.featured}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors duration-500 group-hover:bg-black/20">
          <PlayCircle
            aria-hidden="true"
            size={72}
            className="text-white transition-all duration-500 group-hover:scale-125 group-hover:text-cyan-300"
          />
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-black/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          {story.completedIn}
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {story.country}
          </span>

          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
            {story.treatment}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold text-white">
          {story.patient}
        </h3>

        {story.doctor && (
          <p className="mt-2 text-sm text-slate-400">
            Treated by{" "}
            <span className="font-medium text-cyan-300">
              {story.doctor}
            </span>
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            {story.material}
          </span>

          {story.language && (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              {story.language}
            </span>
          )}
        </div>

        <div
          className="mt-6 text-lg tracking-wide text-yellow-400"
          aria-label={`${story.rating} out of 5 stars`}
        >
          {"★".repeat(story.rating)}
        </div>

        <blockquote className="mt-6 border-l-2 border-cyan-500 pl-4 italic leading-8 text-slate-300">
          “{story.quote}”
        </blockquote>

        <Link
          href={story.videoUrl}
          aria-label={`Watch story of ${story.patient}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
        >
          Watch Story

          <ExternalLink
            size={18}
            aria-hidden="true"
          />
        </Link>
      </div>
    </GlassCard>
  );
}
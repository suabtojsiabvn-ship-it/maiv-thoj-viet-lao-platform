import Image from "next/image";
import Link from "next/link";

interface JourneyCardProps {
  title: string;
  summary: string;
  image: string;
  href: string;
  label: string;
}

export function JourneyCard({
  title,
  summary,
  image,
  href,
  label,
}: JourneyCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50">
      <Link
        href={href}
        className="group flex h-full flex-col"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {label}
          </p>

          <h3 className="mt-3 text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-3 line-clamp-3 flex-1 leading-7 text-slate-300">
            {summary}
          </p>

          <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
            Explore more
            <span
              className="ml-2"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
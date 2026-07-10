import Image from "next/image";

interface ContentHeroProps {
  title: string;
  summary: string;
  coverImage: string;
}

export function ContentHero({
  title,
  summary,
  coverImage,
}: ContentHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              {summary}
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={coverImage}
              alt={title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
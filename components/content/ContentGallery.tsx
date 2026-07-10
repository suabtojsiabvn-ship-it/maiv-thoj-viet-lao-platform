import Image from "next/image";

interface ContentGalleryProps {
  images?: string[];
  title?: string;
}

export function ContentGallery({
  images = [],
  title = "Gallery",
}: ContentGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-white">{title}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {images.map((image) => (
          <div
            key={image}
            className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
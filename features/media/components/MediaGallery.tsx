import type { MediaPageCopy, MediaVideo } from "@/content/media";

import { VideoCard } from "./VideoCard";

interface MediaGalleryProps {
  videos: MediaVideo[];
  copy: MediaPageCopy;
}

export function MediaGallery({ videos, copy }: MediaGalleryProps) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
      {videos.map((video, index) => (
        <VideoCard
          key={video.id}
          video={video}
          index={index}
          copy={copy}
        />
      ))}
    </div>
  );
}

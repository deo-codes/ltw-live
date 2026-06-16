import type { MediaVideo } from "@/app/data/mediaVideos";

type VideoCardProps = {
  video: MediaVideo;
};

export default function VideoCard({ video }: VideoCardProps) {
  const videoUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
  const thumbnailUrl =
    video.thumbnail ?? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg transition hover:border-yellow-400/60 hover:shadow-yellow-500/10">
      <a
        href={videoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch ${video.title} on YouTube`}
        className="relative block aspect-video w-full overflow-hidden bg-black"
      >
        <img
          src={thumbnailUrl}
          alt={`${video.title} thumbnail`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-yellow-400">
            <span aria-hidden="true">▶</span>
            Watch
          </span>
        </div>
      </a>

      <div className="p-5">
        <div className="mb-3 inline-flex rounded-full border border-yellow-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-400">
          {video.year}
        </div>

        <h3 className="text-lg font-black uppercase text-white transition group-hover:text-yellow-400">
          {video.title}
        </h3>

        {video.description && (
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {video.description}
          </p>
        )}
      </div>
    </article>
  );
}
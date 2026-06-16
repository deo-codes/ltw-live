import type { MediaVideo } from "@/app/data/mediaVideos";
import VideoCard from "./VideoCard";

type VideoGridProps = {
  videos: MediaVideo[];
};

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-10 text-center">
        <p className="text-zinc-400">No videos found for this year yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
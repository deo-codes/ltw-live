"use client";

import Image from "next/image";
import Link from "next/link";

const VIDEOS = [
  {
    title: "CADILLACS AND BEATDOWNS",
    thumbnail: "/images/videos/video1.jpg",
    url: "https://www.youtube.com/watch?v=rBzyqGuBHtM",
  },
  {
    title: "MOVING DAY",
    thumbnail: "/images/videos/video2.jpg",
    url: "https://www.youtube.com/watch?v=7NxgAlR3_aI",
  },
  {
    title: "Cops Were Called To Gamestop! (Signing)",
    thumbnail: "/images/videos/video3.jpg",
    url: "https://www.youtube.com/watch?v=WkK4nclk_WU&pp=0gcJCSgLAYcqIYzv",
  },
  {
    title: "The Final Confrontation ",
    thumbnail: "/images/videos/video4.jpg",
    url: "https://www.youtube.com/watch?v=E0NdbrEZU3Q",
  },
];

const BUTTON_STYLES = "rounded-lg border border-yellow-400 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black";
const CARD_STYLES = "overflow-hidden rounded-2xl border border-yellow-400/10 bg-zinc-950 transition-all duration-300 hover:border-yellow-400/40";

interface Video {
  title: string;
  thumbnail: string;
  url: string;
}

function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className={CARD_STYLES}>
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/10" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 text-2xl text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
              ▶
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
            {video.title}
          </h3>
          <p className="mt-2 text-sm text-gray-400">Watch now on YouTube</p>
        </div>
      </div>
    </Link>
  );
}

export default function LatestVideos() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Latest Videos
            </span>
            <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
              Watch The Action
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400">
              Catch the latest matches, promos, highlights, and unforgettable
              moments from Locked Target Wrestling.
            </p>
          </div>

          <Link href="/media" className={BUTTON_STYLES}>
            View All Videos
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {VIDEOS.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

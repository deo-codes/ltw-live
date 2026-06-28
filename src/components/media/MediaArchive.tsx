"use client";

import { useEffect, useMemo, useState } from "react";
import { mediaVideos } from "@/app/data/mediaVideos";
import YearFilter from "./YearFilter";
import VideoGrid from "./VideoGrid";

const PAGE_SIZE = 20;

export default function MediaArchive() {
  const [selectedYear, setSelectedYear] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(mediaVideos.map((video) => video.year)));
    return ["All", ...uniqueYears.sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredVideos = useMemo(() => {
    return selectedYear === "All"
      ? mediaVideos
      : mediaVideos.filter((video) => video.year === selectedYear);
  }, [selectedYear]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMoreVideos = visibleCount < filteredVideos.length;

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setIsLoadingMore(false);
  }, [selectedYear]);

  const handleLoadMore = () => {
    if (isLoadingMore || !hasMoreVideos) {
      return;
    }

    setIsLoadingMore(true);
    window.setTimeout(() => {
      setVisibleCount((currentCount) =>
        Math.min(currentCount + PAGE_SIZE, filteredVideos.length),
      );
      setIsLoadingMore(false);
    }, 350);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-28 md:pt-32">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-black uppercase text-white md:text-3xl">
            Media Archive
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Select a year to filter LTW videos.
          </p>
        </div>

        <YearFilter
          years={years}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />
      </div>

      <VideoGrid videos={visibleVideos} />

      {hasMoreVideos && (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/90 px-6 py-8 text-center shadow-lg">
          <p className="text-sm text-zinc-400">
            Showing {visibleVideos.length} of {filteredVideos.length} videos.
          </p>
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-400 px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoadingMore ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}
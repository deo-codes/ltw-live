"use client";

import { useMemo, useState } from "react";
import { mediaVideos } from "@/app/data/mediaVideos";
import YearFilter from "./YearFilter";
import VideoGrid from "./VideoGrid";

export default function MediaArchive() {
  const [selectedYear, setSelectedYear] = useState("All");

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(mediaVideos.map((video) => video.year)));
    return ["All", ...uniqueYears.sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredVideos =
    selectedYear === "All"
      ? mediaVideos
      : mediaVideos.filter((video) => video.year === selectedYear);

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

      <VideoGrid videos={filteredVideos} />
    </section>
  );
}
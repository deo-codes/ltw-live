"use client";

import { useMemo, useState } from "react";
import { roster } from "@/app/data/roster";
import RosterCard from "./rosterCard";
import SearchRoster from "./SearchRoster";
import RosterFilter, { type RosterFilterValue } from "./RosterFilter";

export default function RosterGrid() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<RosterFilterValue>("all");

  const filteredRoster = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return roster.filter((wrestler) => {
      const matchesName =
        !normalizedQuery || wrestler.name.toLowerCase().includes(normalizedQuery);

      const matchesFilter =
        activeFilter === "all"
          ? true
          : activeFilter === "Alumni"
            ? wrestler.brand === "Alumni" || Boolean(wrestler.alumni)
            : wrestler.brand === activeFilter;

      return matchesName && matchesFilter;
    });
  }, [activeFilter, query]);

  return (
    <section className="container py-14 md:py-16">
      <SearchRoster value={query} onChange={setQuery} />
      <RosterFilter value={activeFilter} onChange={setActiveFilter} />

      {filteredRoster.length === 0 ? (
        <p className="mb-8 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300">
          No wrestler found with the current search and filter.
        </p>
      ) : null}

      <div
        className="
          grid
          gap-4 md:gap-5
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {filteredRoster.map((wrestler) => (
          <RosterCard
            key={wrestler.id}
            wrestler={wrestler}
          />
        ))}
      </div>
    </section>
  );
}
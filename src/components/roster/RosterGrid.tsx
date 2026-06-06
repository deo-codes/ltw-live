import { roster } from "@/app/data/roster";
import RosterCard from "./rosterCard";

export default function RosterGrid() {
  return (
    <section className="container py-20">
      <div
        className="
          grid
          gap-6
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {roster.map((wrestler) => (
          <RosterCard
            key={wrestler.id}
            wrestler={wrestler}
          />
        ))}
      </div>
    </section>
  );
}
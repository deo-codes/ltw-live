"use client";

import Image from "next/image";
import Link from "next/link";

export default function RosterCard({
  wrestler
}: any) {
  const isLTW = wrestler.brand === "LTW";

  return (
    <Link
      href={`/roster/${wrestler.slug}`}
      className={`
        group
        overflow-hidden
        rounded-xl
        border
        transition
        duration-300
        ${
          isLTW
            ? "border-yellow-400/70 bg-gradient-to-b from-yellow-500/25 via-yellow-500/10 to-black"
            : "border-violet-400/70 bg-gradient-to-b from-violet-500/25 via-violet-500/10 to-black"
        }
      `}
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={wrestler.image}
          alt={wrestler.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />

        {wrestler.alumni ? (
          <span className="absolute left-3 top-3 z-10 rounded bg-black/85 px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-yellow-300">
            Alumni
          </span>
        ) : null}

        <div
          className={`absolute inset-0 ${
            isLTW
              ? "bg-gradient-to-t from-yellow-500/25 via-transparent to-transparent"
              : "bg-gradient-to-t from-violet-500/25 via-transparent to-transparent"
          }`}
        />
      </div>

      <div className="p-3">
        <h3 className="font-bold">
          {wrestler.name}
        </h3>

        <p
          className={`mt-1 inline-block rounded px-2 py-0.5 text-xs font-bold tracking-wide ${
            isLTW
              ? "bg-yellow-400 text-black"
              : "bg-violet-500 text-white"
          }`}
        >
          {wrestler.brand}
        </p>
      </div>
    </Link>
  );
}
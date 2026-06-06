"use client";

import Image from "next/image";
import Link from "next/link";

export default function RosterCard({
  wrestler
}: any) {
  return (
    <Link
      href={`/roster/${wrestler.slug}`}
      className="
        group
        overflow-hidden
        rounded-xl
        bg-zinc-900
      "
    >
      <div className="relative aspect-[2/3]">
        <Image
          src={wrestler.image}
          alt={wrestler.name}
          fill
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold">
          {wrestler.name}
        </h3>

        <p className="text-sm text-yellow-400">
          {wrestler.brand}
        </p>
      </div>
    </Link>
  );
}
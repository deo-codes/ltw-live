"use client";

import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "15+", label: "Wrestlers" },
  { value: "10", label: "Championships" },
  { value: "2", label: "Promotions" },
];

function SectionHeader() {
  return (
    <div className="mb-12 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
        Meet The Roster
      </span>

      <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">
        Heroes. Villains.
        <br />
        Champions. Legends.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
        From rising stars to seasoned veterans, both brands' rosters
        bring intensity, passion, and unforgettable moments every
        time they step inside the ring.
      </p>
    </div>
  );
}

function BannerCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-yellow-400/20">
      <Image
        src="/images/roster/roster-main-desktop.jpg"
        alt="LTW Roster"
        width={1920}
        height={1080}
        quality={70}
        sizes="(max-width: 768px) 100vw, 100vw"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div className="p-4 sm:p-6 md:p-10">
          <h3 className="text-2xl leading-tight font-black uppercase text-white sm:text-3xl md:text-5xl">
            Roster Spotlight
          </h3>

          <p className="mt-2 max-w-xl text-sm text-gray-300 sm:mt-3 sm:text-base">
            Discover the athletes, personalities, and rivalries
            shaping up in both LTW and RBW.
          </p>

          <Link
            href="/roster"
            className="mt-4 inline-flex items-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.04em] text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 sm:mt-6 sm:px-6 sm:py-3 sm:text-base sm:tracking-normal"
          >
            View Full Roster
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatsGrid() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6 text-center">
      {STATS.map((stat) => (
        <div key={stat.label}>
          <h4 className="text-3xl font-black text-yellow-400">{stat.value}</h4>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function RosterSpotlight() {
  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeader />
        <BannerCard />
        <StatsGrid />
      </div>
    </section>
  );
}

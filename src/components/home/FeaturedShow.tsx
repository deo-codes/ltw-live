"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedShow() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/events/coronation-2026-v2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover object-center blur-xl"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Featured Event
          </span>

          <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
           Locked Target Wrestling presents RBW's Coronation 2026
          </h2>
        </div>

        {/* Main Card */}
        <div
          className="
            grid
            gap-10
            rounded-3xl
            border
            border-yellow-400/20
            bg-zinc-950
            p-6
            shadow-[0_0_50px_rgba(255,204,0,0.05)]
            lg:grid-cols-2
            lg:p-10
          "
        >
          {/* Poster */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/events/coronation-2026.jpg"
              alt="Locked Target Wrestling presents RBW's Coronation 2026"
              width={900}
              height={1200}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">

            <span className="mb-4 text-yellow-400 uppercase tracking-widest text-sm font-bold">
              Live Professional Wrestling
            </span>

          

            <div className="mt-6">
              <Image
                src="/images/events/coronation-logo.png"
                alt="RBW Coronation logo"
                width={900}
                height={280}
                className="h-auto w-full max-w-xl object-contain"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>

            <div className="mt-6 space-y-2 text-gray-300">
              <p>📅 Sunday, July 26, 2026</p>
              <p>📍 The Silverton Volunteer Fire Department</p>
			  <p>15 Kettle Creek Road, Toms River, NJ 08753</p>
              <p>Doors open at 1 PM - Show starts at 2 PM</p>
            </div>

            <p className="mt-8 max-w-xl text-lg text-gray-400">
              The Road to Danimania 2026 continues with RBW's Coronation, a high-stakes event where the future of RBW's top title will be decided. Witness the coronation of a new champion as top contenders clash in thrilling matches. Don't miss this unforgettable night of action, drama, and crowning glory!
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/shows"
                className="
                  rounded-lg
                  bg-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-300
                "
              >
                Buy Tickets
              </Link>

              <Link
                href="/media"
                className="
                  rounded-lg
                  border
                  border-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                Watch Trailer
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
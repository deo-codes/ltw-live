"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedShow() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/events/danimania-pure-greatness.jpg"
          alt=""
          fill
          quality={60}
          sizes="100vw"
          className="scale-110 object-cover object-center blur-2xl"
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
           Danimania: Pure Greatness 
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
              src="/images/events/2026danimania-pure-greatness.jpg"
              alt="Locked Target Wrestling presents Danimania Pure Greatness"
              width={900}
              height={1200}
              quality={70}
              sizes="(max-width: 1024px) 100vw, 50vw"
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
                src="/images/events/DANIMANIA2026-HalloweenTheme.png"
                alt="Danimania 2026 logo"
                width={900}
                height={280}
                className="h-auto w-full max-w-xl object-contain"
                sizes="(max-width: 768px) 100vw, 640px"
              />
            </div>

            <div className="mt-6 space-y-2 text-gray-300">
              <p className="font-bold text-yellow-400">Sunday, October 18</p>
              <p>Doors open: 3:00 PM</p>
              <p>Belltime: 4:00 PM</p>
            </div>

            <p className="mt-8 max-w-xl text-lg text-gray-400">
             Danimania: Pure Greatness will return with championship stakes, personal grudges, and high-impact matches featuring stars from across LTW and RBW. Follow LTW for the new date and updated event information.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://paypal.me/LTWlive2018"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold uppercase text-black transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50"
              >
                Buy Tickets
              </a>
              <Link
                href="/danimania"
                className="inline-block rounded-lg border border-yellow-400 px-8 py-3 font-bold uppercase text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
              >
                View Event Page
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
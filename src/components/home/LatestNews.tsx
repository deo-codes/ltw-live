"use client";

import Image from "next/image";
import Link from "next/link";

const news = [
{
category: "Announcement",
title: "Tommy Vieira Memorial Battle Royal",
date: "June 5, 2026",
excerpt:
"At DaniMania 2026, the Tommy Vieira Memorial Battle Royal will take place to honor his legacy.",
slug: "/news/tommy-vieira-memorial-battle-royal",
image: "/images/events/tommy-vieira-memorial-battle-royal.jpg",
imageAlt: "LTW ring under dramatic event lighting",
},

{
category: "Roster Update",
title: "New Talent Arrives In Locked Target Wrestling",
date: "June 1, 2026",
excerpt:
"A new competitor steps into LTW looking to make an immediate impact.",
slug: "/news/new-talent-arrives",
image: "/images/hero/roster-banner.png",
imageAlt: "LTW roster spotlight banner",
},

{
category: "Danimania 2026",
title: "Danimania: Pure Greatness",
date: "May 28, 2026",
excerpt:
 "LTW's annual summer event returns. Stay tuned for more details on date, location, and match card.",
slug: "/news/2026-danimania",
image: "/images/events/2026-danimania.png",
imageAlt: "2026 Danimania event promotion graphic",
},
];

export default function LatestNews() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
    <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

      <div>
        <span className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Latest News
        </span>

        <h2 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
          Stay Updated
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Follow the latest announcements, match cards,
          championship updates, and breaking news from
          Locked Target Wrestling.
        </p>
      </div>

      <Link
        href="/news"
        className="
          rounded-lg
          border
          border-yellow-400
          px-6
          py-3
          font-bold
          text-white
          transition-all
          duration-300
          hover:bg-yellow-400
          hover:text-black
        "
      >
        View All News
      </Link>

    </div>

    {/* News Cards */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

      {news.map((article) => (
        <Link
          key={article.title}
          href={article.slug}
          className="group"
        >
          <article
            className="
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-yellow-400/10
              bg-zinc-950
              transition-all
              duration-300
              hover:border-yellow-400/40
              hover:shadow-[0_0_25px_rgba(255,204,0,0.08)]
            "
          >

            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-8">

            {/* Category */}
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-widest
                text-yellow-400
              "
            >
              {article.category}
            </span>

            {/* Title */}
            <h3
              className="
                mt-4
                text-2xl
                font-black
                text-white
                transition-colors
                duration-300
                group-hover:text-yellow-400
              "
            >
              {article.title}
            </h3>

            {/* Date */}
            <p className="mt-3 text-sm text-gray-500">
              {article.date}
            </p>

            {/* Excerpt */}
            <p className="mt-5 text-gray-400">
              {article.excerpt}
            </p>

            {/* CTA */}
            <div
              className="
                mt-8
                font-bold
                text-yellow-400
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            >
              Read More →
            </div>

            </div>

          </article>
        </Link>
      ))}

    </div>

      </div>
    </section>
  );
}

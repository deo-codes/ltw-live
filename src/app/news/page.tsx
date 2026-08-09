import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import StaticHero from "@/components/sections/StaticHero";
import { news } from "@/app/data/news";

export const metadata: Metadata = {
  title: "News | LTW",
  description: "Latest announcements and updates from Locked Target Wrestling.",
};

export default function NewsPage() {
  return (
    <SiteShell transparentHeader>
      <StaticHero
        backgroundImage="/images/hero/news-hero.jpg"
        backgroundPosition="center 60%"
        title="News and Updates"
        subtitle="Latest updates from Locked Target Wrestling & Regal Brotherhood Wrestling"
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {news.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-yellow-400/10 bg-zinc-950 transition-all duration-300 hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(255,204,0,0.08)]">
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
                    <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                      {article.category}
                    </span>

                    <h2 className="mt-4 text-2xl font-black text-white transition-colors duration-300 group-hover:text-yellow-400">
                      {article.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-500">{article.date}</p>

                    <p className="mt-5 text-gray-400">{article.excerpt}</p>

                    <div className="mt-8 font-bold text-yellow-400 transition-transform duration-300 group-hover:translate-x-2">
                      Read More →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

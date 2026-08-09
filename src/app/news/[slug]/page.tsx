import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/layout/SiteShell";
import { news } from "@/app/data/news";

export const generateStaticParams = () => {
  return news.map((article) => ({
    slug: article.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "News Article | LTW",
    };
  }

  return {
    title: `${article.title} | LTW News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const isDanimania = article.slug === "2026-danimania";
  const matchCards = [
    {
      title: "Gangsta X vs. Prince Malcolm III",
      subtitle: "LTW Internet Championship",
      imageSrc: "/images/events/2026-danimania/match-01.png",
      
    },
    {
      title: "Ace Marxman vs. AJ Anderson",
      subtitle: "LTW & RBW Universal Heavyweight Championship",
      imageSrc: "/images/events/2026-danimania/match-02.png",
    },
    {
      title: "Becca Wiley vs. Rosaleen Grimm",
      subtitle: "RBW Women's Championship",
      imageSrc: "/images/events/2026-danimania/match-03.png",
      
    },
    {
      title: "Biohazard vs. Lawerence Spiral: 2 Out of 3 Falls Match",
      subtitle: "Unified Regal Continental Championship",
      imageSrc: "/images/events/2026-danimania/match-04.png",
    },
    {
      title: "Joey T vs. Angelus Morningstar: Dog Collar Match",
      subtitle: "LTW Light Heavyweight Championship",
      imageSrc: "/images/events/2026-danimania/match-05.png",
    }
  ];

  const resolveCardVisual = (value: string) =>
    value.startsWith("./") ? `/${value.slice(2)}` : value;

  const isImagePath = (value: string) =>
    value.startsWith("/") || value.startsWith("./");

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-black py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="100vw"
            className="scale-110 object-cover object-center blur-2xl"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
            {article.category}
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-4 text-sm text-zinc-300">{article.date}</p>

          {isDanimania && (
            <div className="mt-8 rounded-2xl border border-yellow-400/25 bg-zinc-950/80 p-6 md:p-8">
              <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
                    Live Professional Wrestling
                  </p>

                  <div className="mt-4 max-w-xl">
                    <Image
                      src="/images/events/2026-danimania.png"
                      alt="Danimania 2026 logo"
                      width={900}
                      height={280}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 768px) 100vw, 640px"
                    />
                  </div>

                  <div className="mt-6 space-y-1 text-sm text-zinc-300 md:text-base">
                    <p>Sunday, August 30, 2026</p>
                    <p>The Silverton Volunteer Fire Department</p>
                    <p>15 Kettle Creek Road, Toms River, NJ 08753</p>
                    <p>Doors open at 3 PM - Show starts at 4 PM</p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    
                    <Link
                      href="/news"
                      className="inline-block rounded-lg border border-yellow-400 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
                    >
                      More News
                    </Link>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-yellow-400/25">
                  <Image
                    src="/images/events/danimania-pure-greatness.jpg"
                    alt="Danimania Pure Greatness event poster"
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 overflow-hidden rounded-2xl border border-yellow-400/30 bg-zinc-950/70">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
              />
            </div>
          </div>

          <article className="mt-10 rounded-2xl border border-yellow-400/20 bg-zinc-950/80 p-8 text-zinc-200">
            <p className="text-lg text-zinc-300">{article.excerpt}</p>

            <div className="mt-6 space-y-4">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          {isDanimania && (
            <section className="mt-10 rounded-2xl border border-yellow-400/20 bg-zinc-950/80 p-8">
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {matchCards.map((card) => (
                  <div
                    key={card.title}
                    className="overflow-hidden rounded-xl border border-yellow-400/20 bg-black/40"
                  >
                    <div className="relative flex min-h-[180px] items-center justify-center border-b border-dashed border-yellow-400/20 bg-zinc-950/70 px-4 text-center">
                      {isImagePath(card.imageSrc) ? (
                        <Image
                          src={resolveCardVisual(card.imageSrc)}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                          {card.imageSrc}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3 p-5">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
                          {card.title}
                        </p>
                        <h3 className="mt-2 text-lg font-black uppercase text-white">
                          {card.subtitle}
                        </h3>
                      </div>

                      
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link
              href="/news"
              className="inline-block rounded-lg border border-yellow-400 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

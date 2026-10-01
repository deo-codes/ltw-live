import type { Metadata } from "next";
import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltwlivewrestling.com"),
  title: "Danimania: Pure Greatness | Locked Target Wrestling",
  description: "Danimania: Pure Greatness live professional wrestling event details and match card.",
  alternates: {
    canonical: "/danimania",
  },
  openGraph: {
    title: "Danimania: Pure Greatness | Locked Target Wrestling",
    description: "Danimania: Pure Greatness live professional wrestling event details and match card.",
    url: "/danimania",
    siteName: "Locked Target Wrestling & Regal Brotherhood Wrestling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/events/2026danimania-pure-greatness.jpg",
        alt: "Danimania: Pure Greatness 2026 event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danimania: Pure Greatness | Locked Target Wrestling",
    description: "Danimania: Pure Greatness live professional wrestling event details and match card.",
    images: ["/images/events/2026danimania-pure-greatness.jpg"],
  },
};

const matchCards = [
  {
    title: "Gangsta X vs. Prince Malcolm III",
    subtitle: "LTW Internet Championship",
    image: "/images/events/2026-danimania/match-01.png",
  },
  {
    title: "Ace Marxman vs. AJ Anderson",
    subtitle: "LTW & RBW Universal Heavyweight Championship",
    image: "/images/events/2026-danimania/match-02.png",
  },
  {
    title: "Becca Wiley vs. Rosaleen Grimm",
    subtitle: "RBW Women's Championship",
    image: "/images/events/2026-danimania/match-03.png",
  },
  {
    title: "Brookyln Prodigies vs. George Murphy & Decay vs. Mystery Tag Partners",
    subtitle: "Unified LTW & RBW Tag Team Championships",
    image: "/images/events/2026-danimania/match-04.png",
  },
  {
    title: "Joey T vs. Angelus Morningstar",
    subtitle: "LTW Light Heavyweight Championship | Dog Collar Match",
    image: "/images/events/2026-danimania/match-05.png",
  },
  {
    title: "Tony Dempsey vs. Tony Emerald",
    subtitle: "RBW Intercontinental Championship",
    image: "/images/events/2026-danimania/match-06.png",
  },
  {
    title: "Biohazard (with Ember Rose) vs. Lawerence Spiral",
    subtitle: "3 Stages of Hell  for the Unified Regal Continental Championship",
    image: "/images/events/2026-danimania/match-07.png",
  }
];

export default function DanimaniaPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-black py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/events/LTWDANIMANIA2026V2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover object-center opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Live Professional Wrestling
            </p>
            <Image
              src="/images/events/DANIMANIA2026-HalloweenTheme.png"
              alt="Danimania 2026"
              width={900}
              height={280}
              priority
              className="mx-auto mt-6 h-auto w-full max-w-3xl object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <p className="mt-6 text-lg text-zinc-300">
              Sunday, October 18, 2026 | Doors open at 3:00 PM | Belltime at 4:00 PM
            </p>
            <p className="mt-6 text-lg text-zinc-300">
              The Silverton Volunteer Fire Company | 15 Kittle Creek Road, Toms River, NJ 08753 
            </p>
            <a
              href="https://paypal.me/LOCKEDTARGETWRESTLIN"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300"
            >
              Buy Tickets
            </a>
          </div>

          <div className="mt-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                The Match Card
              </p>
              <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
                Pure Greatness
              </h1>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {matchCards.map((match) => (
                <article
                  key={match.title}
                  className="overflow-hidden rounded-xl border border-yellow-400/20 bg-zinc-950"
                >
                  <div className="relative aspect-[16/9] bg-black">
                    <Image
                      src={match.image}
                      alt={match.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-black uppercase text-white">{match.title}</h2>
                    <p className="mt-2 text-sm font-bold uppercase tracking-wide text-yellow-400">
                      {match.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

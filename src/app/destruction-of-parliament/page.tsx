import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://ltwlivewrestling.com"),
  title: "Destruction of Parliament | Regal Brotherhood Wrestling",
  description:
    "Regal Brotherhood Wrestling presents Destruction of Parliament on Sunday, October 11, 2026, in Toms River, New Jersey.",
  alternates: {
    canonical: "/destruction-of-parliament",
  },
  openGraph: {
    title: "Destruction of Parliament | Regal Brotherhood Wrestling",
    description:
      "Regal Brotherhood Wrestling presents Destruction of Parliament on Sunday, October 11, 2026, in Toms River, New Jersey.",
    url: "/destruction-of-parliament",
    siteName: "Locked Target Wrestling & Regal Brotherhood Wrestling",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/events/Destruction-Parliament-Banner.jpg",
        alt: "Destruction of Parliament event banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destruction of Parliament | Regal Brotherhood Wrestling",
    description:
      "Regal Brotherhood Wrestling presents Destruction of Parliament on Sunday, October 11, 2026, in Toms River, New Jersey.",
    images: ["/images/events/Destruction-Parliament-Banner.jpg"],
  },
};

const matchCards: { title: string; subtitle: string; image: string }[] = [
    {
      title: "Singles Match",
      subtitle: "Tony Dempsey vs Lucian Rainrix",
      image: "/images/events/destruction-parliament/Destruction-Parliament-Card01-SiteOnly.jpg"
    },
    {
      title: "Last Man Standing Match",
      subtitle: "AJ Anderson vs Decay",
      image: "/images/events/destruction-parliament/Destruction-Parliament-Card02-SiteOnly.jpg"
    },
    {
      title: "Singles Match",
      subtitle: "Gangsta X vs. Adam Wolf",
      image: "/images/events/destruction-parliament/Destruction-Parliament-Card03-SiteOnly.jpg"
    }
];

export default function DestructionOfParliamentPage() {
  return (
    <SiteShell>
      <section className="bg-black pb-20">
        <div className="relative mx-auto aspect-[16/7] w-full max-w-7xl bg-black">
          <Image
            src="/images/events/destructionparliament-logo.png"
            alt="Destruction of Parliament event logo"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-12 lg:pt-14">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Regal Brotherhood Wrestling
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">
              Destruction of Parliament
            </h1>
            <p className="mt-6 text-lg text-zinc-300">
              Sunday, October 11, 2026
            </p>
            <p className="mt-3 text-lg text-zinc-300">
              The Silverton Volunteer Fire Company | 15 Kittle Creek Road, Toms River, NJ 08753
            </p>
            <a
              href="https://www.paypal.com/paypalme/RayV042?country.x=US&locale.x=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-lg bg-yellow-400 px-8 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300"
            >
              Buy Tickets
            </a>
          </div>

          <div className="mt-16">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Regal Brotherhood Wrestling
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase text-white md:text-5xl">
                Match Card
              </h2>
            </div>

            {matchCards.length > 0 ? (
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {matchCards.map((match) => (
                  <article
                    key={match.subtitle}
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
                      <h3 className="text-lg font-black uppercase text-white">
                        {match.title}
                      </h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-wide text-yellow-400">
                        {match.subtitle}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-10 border-y border-yellow-400/20 py-12 text-center text-zinc-400">
                Match announcements will be added as they are confirmed.
              </p>
            )}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/news/rbw-destruction-of-parliament"
              className="inline-block rounded-lg border border-yellow-400 px-6 py-3 font-bold uppercase text-white transition hover:bg-yellow-400 hover:text-black"
            >
              Back to News Announcement
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
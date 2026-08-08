import { notFound } from "next/navigation";
import { roster } from "../../data/roster";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/layout/SiteShell";
import type { SocialPlatform } from "@/types/wrestler";

const DEFAULT_WRESTLER_HERO_BANNER = "/images/hero/wrestler-match-hero.jpg";

export const generateStaticParams = () => {
  return roster.map((wrestler) => ({
    slug: wrestler.slug,
  }));
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const iconClass = "h-5 w-5";

  if (platform === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.3 4.5 12 4.5 12 4.5s-7.3 0-9.4.6A3 3 0 0 0 .5 7.2C0 9.3 0 12 0 12s0 2.7.5 4.8a3 3 0 0 0 2.1 2.1c2.1.6 9.4.6 9.4.6s7.3 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-2.1.5-4.8.5-4.8s0-2.7-.5-4.8ZM9.6 15.4V8.6l6 3.4-6 3.4Z" />
      </svg>
    );
  }

  if (platform === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.1 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (platform === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M13.3 21v-7.8H16l.4-3h-3.1V8.3c0-.9.3-1.5 1.6-1.5h1.6V4.1c-.8-.1-1.6-.2-2.4-.2-2.4 0-4 1.5-4 4.3v2h-2.7v3h2.7V21h3.2Z" />
      </svg>
    );
  }

  if (platform === "X" || platform === "Twitter") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.2L6.7 22H3.6l7.3-8.3L1 2h6.3l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
      </svg>
    );
  }

  if (platform === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path fill="currentColor" d="M14.8 3c.5 2.1 1.8 3.4 4 3.6v2.9a7.1 7.1 0 0 1-3.9-1.3v6.1a5.8 5.8 0 1 1-5-5.8v3c-1.4-.2-2.7.7-2.9 2.1-.2 1.4.7 2.7 2.1 2.9 1.4.2 2.7-.7 2.9-2.1V2.9h2.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  );
}

function getSocialHandle(url: string) {
  try {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1] ?? parsedUrl.hostname;

    if (!lastSegment) {
      return parsedUrl.hostname;
    }

    return lastSegment.startsWith("@") ? lastSegment : `@${lastSegment}`;
  } catch {
    return url;
  }
}

export default async function WrestlerPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wrestler = roster.find(
    (w) => w.slug === slug
  );

  if (!wrestler) notFound();

  return (
    <SiteShell transparentHeader>
      <section className="relative flex min-h-[360px] items-end overflow-hidden py-12 md:min-h-[460px]">
        <Image
          src={wrestler.heroBanner ?? DEFAULT_WRESTLER_HERO_BANNER}
          alt={`${wrestler.name} hero banner`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%] md:object-[center_10%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/85" />

        <div className="container relative z-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-300">
            Roster Profile
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl md:text-6xl">
            {wrestler.name}
          </h1>

          <p className="mt-4 inline-block rounded bg-black/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-zinc-200">
            {wrestler.brand}
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10">

          <div className="relative mx-auto h-[420px] w-full max-w-[540px] sm:h-[500px] lg:h-[560px]">
            <Image
              src={wrestler.image}
              alt={wrestler.name}
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="rounded-xl bg-zinc-950 object-contain object-top"
            />
          </div>

          <div>
            <p className="mt-6 text-zinc-300">
              {wrestler.bio}
            </p>

            <div className="mt-10 space-y-4">

              <p>
                <strong>Brand:</strong> {wrestler.brand}
              </p>

              <p>
                <strong>Hometown:</strong> {wrestler.hometown}
              </p>

              <p>
                <strong>Height:</strong> {wrestler.height}
              </p>

              <p>
                <strong>Weight:</strong> {wrestler.weight}
              </p>

              <p>
                <strong>Finisher:</strong> {wrestler.finisher ?? "TBD"}
              </p>

            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide">
                Champions
              </h2>

              {wrestler.championships?.length ? (
                <ul className="mt-4 space-y-2">
                  {wrestler.championships.map((title) => (
                    <li
                      key={title}
                      className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-200"
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-zinc-400">
                  No championships listed.
                </p>
              )}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide">
                Social Media
              </h2>

              {wrestler.socials?.length ? (
                <ul className="mt-4 flex flex-wrap gap-3">
                  {wrestler.socials.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${social.platform} ${getSocialHandle(social.url)}`}
                        className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-white hover:text-white"
                      >
                        <SocialIcon platform={social.platform} />
                        <span>{getSocialHandle(social.url)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-zinc-400">
                  Social links coming soon.
                </p>
              )}
            </div>
          </div>

        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-zinc-400">
            Match Library
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">
            Individual Matches
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Click any match card to watch this wrestler in action.
          </p>
        </div>

        {wrestler.matches?.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wrestler.matches.map((match) => (
              <Link
                key={`${wrestler.id}-${match.title}`}
                href={match.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={match.thumbnail}
                    alt={match.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-black">
                      Watch
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold transition group-hover:text-yellow-300">
                    {match.title}
                  </h3>
                  {match.event ? (
                    <p className="mt-2 text-sm text-zinc-400">
                      {match.event}
                    </p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-white/10 bg-zinc-950 p-6 text-zinc-400">
            Match videos coming soon.
          </p>
        )}
      </section>
    </SiteShell>
  );
}
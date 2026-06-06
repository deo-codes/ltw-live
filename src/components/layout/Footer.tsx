import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shows", href: "/shows" },
  { label: "Roster", href: "/roster" },
  { label: "Championships", href: "/championships" },
  { label: "Media", href: "/media" },
  { label: "History", href: "/history" },
  { label: "Store", href: "/store" },
];

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "X", href: "https://x.com" },
  { label: "TikTok", href: "https://www.tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/branding/ltw-logo.png"
                alt="Locked Target Wrestling"
                width={320}
                height={130}
                className="h-auto w-[180px] transition-transform duration-300 hover:scale-105 sm:w-[220px]"
              />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Locked Target Wrestling delivers high-impact events, roster reveals,
              championship news, and live action built for the next generation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shows"
                className="rounded-full border border-yellow-400/30 px-4 py-2 text-sm font-bold text-yellow-400 transition-colors hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                View Shows
              </Link>
              <Link
                href="/media"
                className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-200 transition-colors hover:border-yellow-400/70 hover:text-yellow-400"
              >
                Watch Media
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Navigation
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-zinc-300 transition-colors hover:text-yellow-400"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Socials
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-bold text-zinc-200 transition-all duration-300 hover:border-yellow-400/70 hover:bg-yellow-400 hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Brand Logos
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-5">
                <Image
                  src="/logos/ltw-logo.png"
                  alt="Locked Target Wrestling logo"
                  width={170}
                  height={70}
                  className="h-auto w-[150px] object-contain"
                />
                <Image
                  src="/logos/rbw-logo.png"
                  alt="RBW logo"
                  width={130}
                  height={70}
                  className="h-auto w-[120px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2019 - 2026 Locked Target Wrestling. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">Developed by Deoshai "Deo" Patterson</p>
        </div>
      </div>
    </footer>
  );
}
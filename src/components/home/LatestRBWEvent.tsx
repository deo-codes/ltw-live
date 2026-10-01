import Image from "next/image";
import Link from "next/link";

export default function LatestRBWEvent() {
  return (
    <section className="relative isolate overflow-hidden border-y border-yellow-400/20 bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/events/Destruction-Parliament-Banner.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Latest RBW Event
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase text-white sm:text-5xl md:text-6xl">
            Destruction of Parliament
          </h2>
          <p className="mt-6 text-lg font-bold text-white">
            Sunday, October 11, 2026
          </p>
          <p className="mt-2 max-w-2xl text-zinc-200">
            The Silverton Volunteer Fire Company · Toms River, New Jersey
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.paypal.com/paypalme/RayV042?country.x=US&locale.x=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-yellow-400 px-7 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-yellow-300"
            >
              Buy Tickets
            </a>
            <Link
              href="/destruction-of-parliament"
              className="inline-block rounded-lg border border-yellow-400 px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:bg-yellow-400 hover:text-black"
            >
              View Event Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
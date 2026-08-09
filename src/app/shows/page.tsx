import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import StaticHero from "@/components/sections/StaticHero";

export const metadata: Metadata = {
  title: "Shows | LTW",
  description: "Live shows and events from Locked Target Wrestling.",
};

export default function ShowsPage() {
  return (
    <SiteShell transparentHeader>
      <StaticHero
        backgroundImage="/images/hero/championship-hero-V2.png"
        backgroundPosition="center 35%"
        title="Shows"
        subtitle="Temporarily Offline"
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-400">
            Temporary Notice
          </p>

          <h2 className="mt-4 [font-family:var(--font-brand-condensed)] text-5xl uppercase tracking-[0.05em] text-white sm:text-6xl">
            Shows Page Coming Back Soon
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            We are making updates to this section. Please check back shortly for
            the latest shows, dates, and ticket information.
          </p>

          <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
        </div>
      </section>
    </SiteShell>
  );
}

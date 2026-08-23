import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import StaticHero from "@/components/sections/StaticHero";

export const metadata: Metadata = {
  title: "Store | Locked Target Wrestling & Regal Brotherhood Wrestling",
  description: "Official Locked Target Wrestling store.",
};

export default function StorePage() {
  return (
    <SiteShell transparentHeader>
      <StaticHero
        backgroundImage="/images/hero/roster-page-banner.png"
        backgroundPosition="center 28%"
        title="Store"
        subtitle="Official LTW Merch"
      />

      <section className="bg-black py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-yellow-400">
            Coming Soon
          </p>

          <h2 className="mt-4 [font-family:var(--font-brand-condensed)] text-5xl uppercase tracking-[0.05em] text-white sm:text-6xl">
            Merch Is On The Way
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            We are building the LTW Store now. Check back soon for apparel,
            event exclusives, and limited drops.
          </p>

          <div className="mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
        </div>
      </section>
    </SiteShell>
  );
}

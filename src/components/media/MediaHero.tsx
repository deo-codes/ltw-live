export default function MediaHero() {
  return (
    <section className="relative overflow-hidden border-b border-yellow-500/20 bg-black px-6 py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
          Locked Target Wrestling
        </p>

        <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
          LTW Media
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-300 md:text-lg">
          Watch highlights, promos, event recaps, and official LTW videos by year.
        </p>
      </div>
    </section>
  );
}
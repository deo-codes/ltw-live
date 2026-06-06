import Image from "next/image";

export default function RosterHero() {
  return (
    <section className="relative h-[86vh] md:h-[74vh] xl:h-[82vh] flex items-center justify-center bg-black">
      <Image
        src="/images/hero/roster-banner-mobile.jpg"
        alt="LTW roster banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_12%] md:hidden"
      />

      <Image
        src="/images/hero/roster-page-banner.png"
        alt="LTW roster banner"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-[center_15%] md:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/65" />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-black uppercase">
          LTW Roster
        </h1>

        <p className="mt-4 text-zinc-300">
          Meet the stars of Locked Target Wrestling
        </p>
      </div>
    </section>
  );
}
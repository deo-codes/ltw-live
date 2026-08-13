import Image from "next/image";

export default function RosterHero() {
  return (
    <section className="relative flex h-[86vh] items-center justify-center overflow-hidden bg-black md:h-[74vh] xl:h-[82vh]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/images/hero/roster-banner-mobilev2.jpg')] bg-cover bg-[center_12%] md:hidden"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[url('/images/hero/roster-page-banner.png')] bg-cover bg-[center_15%] md:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/65" />

      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-black uppercase tracking-wide sm:text-5xl">
          Roster of
        </h1>

        <div className="mx-auto flex items-center justify-center gap-6 sm:gap-10">
          <Image
            src="/logos/ltw-logo.png"
            alt="Locked Target Wrestling logo"
            width={260}
            height={260}
            className="h-auto w-[140px] sm:w-[190px] md:w-[230px]"
          />
          <Image
            src="/logos/rbw-logo.png"
            alt="Regal Brotherhood Wrestling logo"
            width={260}
            height={260}
            className="h-auto w-[140px] sm:w-[190px] md:w-[230px]"
          />
        </div>

        
      </div>
    </section>
  );
}
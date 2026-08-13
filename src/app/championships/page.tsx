import Image from "next/image";
import SiteShell from "@/components/layout/SiteShell";
import StaticHero from "@/components/sections/StaticHero";
import { metadata } from "../layout";

export const generateMetadata = () => ({
  ...metadata,
  title: "Championships | LTW",
  description: "LTW Championship Titles and Champions",
});

export default function ChampionshipsPage() {
  const ltwChampionships = [
    {
      id: 1,
      name: "LTW & RBW Universal Heavyweight Championship (2025-Present)",
      slug: "world-heavyweight",
      description: "The premier championship of Locked Target Wrestling & Regal Brotherhood Wrestling",
      champion: "Ace Marxman",
      image: "/images/championships/universal-heavyweight.png",
    },
   
    {
      id: 2,
      name: "LTW World Heavyweight Championship (2019-Present)",
      slug: "world-heavyweight",
      description: "The top championship in Locked Target Wrestling",
      champion: "Current Champion TBD",
      image: "/images/championships/ltw-heavyweight.png",
    },
    {
      id: 3,
      name: "LTW Light Heavyweight Championship (2020-Present)",
      slug: "light-heavyweight",
      description: "A championship of true technical excellence in the light heavyweight division",
      champion: "Joey T",
      image: "/images/championships/light-heavyweight.png",
    },
    {
      id: 4,
      name: "LTW Tag Team Championship (2019-Present)",
      slug: "tag-team",
      description: "For the best tag teams in Locked Target Wrestling",
      champion: "George Murphy and Biohazard",
      image: "/images/championships/ltw-tag-team.png",
    },
    {
      id: 5,
      name: "LTW Highlight Championship (2024-Present)",
      slug: "highlight",
      description: "The pinnacle of highlight wrestling in LTW",
      champion: "Behemoth",
      image: "/images/championships/highlight.png",
    },
    {
      id: 6,
      name: "LTW Internet Championship (2024-Present)",
      slug: "internet",
      description: "The ultimate test of toughness and resilience in LTW",
      champion: "Gangsta X",
      image: "/images/championships/internet.png",
    },
    {
      id: 7,
      name: "LTW 24/7 Championship (2019-Present)",
      slug: "ltw-24-7",
      description: "A chaotic title known for open challenges and unpredictable defenses",
      champion: "Meat Missile",
      image: "/images/championships/24-7.png",
    },
    {
      id: 8,
      name: "LTW Hardcore Championship (2019-Present)",
      slug: "hardcore",
      description: "A title for the most hardcore competitors in LTW",
      champion: "George Murphy",
      image: "/images/championships/ltw-hardcore.png",
    },
    {
      id: 9,
      name: "LTW & RBW Keys to the Kingdom Championship (2025-Present)",
      slug: "keys-to-the-kingdom",
      description: "Similar to the Wild Card Championship, this title allows for unpredictable and open challenges",
      champion: "Current Champion TBD",
      image: "/images/championships/keys-to-the-kingdom.png",
    }
    
  ];

  const rbwChampionships = [
    {
      id: 1,
      name: "RBW Heavyweight Championship (2025-Present)",
      slug: "rbw-heavyweight",
      description: "The top title in Regal Brotherhood Wrestling",
      champion: "Current Champion TBD",
      image: "/images/championships/rbw-heavyweight.png",
    },
    {
      id: 2,
      name: "RBW Intercontinental Championship (2025-Present)",
      slug: "rbw-intercontinental",
      description: "Rewarding elite ring control and consistency",
      champion: "Tony Emerald",
      image: "/images/championships/rbw-intercontinental.png",
    },
    {
      id: 3,
      name: "RBW Women's Championship (2025-Present)",
      slug: "rbw-womens",
      description: "The highest honor in RBW women's competition",
      champion: "Will be crowned at Danimania 2026",
      image: "/images/championships/rbw-womens.png",
    },
    {
      id: 4,
      name: "RBW Tag Team Championship (2025-Present)",
      slug: "rbw-tag-team",
      description: "For the best tag teams in Regal Brotherhood Wrestling",
      champion: "Current Champion TBD",
      image: "/images/championships/rbw-tag-team.png",
    },
    {
      id: 5,
      name: "RBW Hardcore Championship (2025-Present)",
      slug: "rbw-hardcore",
      description: "A title for the most hardcore competitors in RBW",
      champion: "George Murphy",
      image: "/images/championships/rbw-hardcore.png",
    },
    {
      id: 6,
      name: "RBW Regal Continental Championship (2025-Present)",
      slug: "rbw-regal-continental",
      description: "A chaotic title known for open challenges and unpredictable defenses",
      champion: "Biohazard",
      image: "/images/championships/rbw-regal-continental.png",
    },
    {
      id: 7,
      name: "RBW European Championship (2025-Present)",
      slug: "rbw-european",
      description: "A prestigious title representing the best competitors in Europe within RBW",
      champion: "Current Champion TBD",
      image: "/images/championships/rbw-european.png",
    }
  ];

  const ltwArchiveChampionships = [
    {
      id: 1,
      name: "LTW Women's Championship",
      description: "A legacy title for the top female competitors in LTW, showcasing the best talent in the division.",
      finalChampion: "Taylor One Shot",
      year: "Retired in 2024",
      image: "/images/championships/ltw-womens.png",
      status: "Archived",
    },
    {
      id: 2,
      name: "LTW Wild Card Championship",
      description: "A flexible division title with unpredictable rules.",
      finalChampion: "Final Champion TBD",
      year: "Retired in 2025",
      image: "/images/championships/ltw-wild-card.png",
      status: "Archived",
    },
    {
      id: 3,
      name: "LTW Underground Championship",
      description: "A hard-hitting ultraviolent championship built on grit and toughness.",
      finalChampion: "Mikey Anarchy",
      year: "Retired in 2025",
      image: "/images/championships/ltw-underground.png",
      status: "Archived",
    },
  ];

  return (
    <SiteShell>
      <StaticHero
        backgroundImage="/images/hero/championship-hero-V2.png"
        title="Championships"
        subtitle="Witness the Glory of LTW and RBW Champions"
      />

      {/* LTW Championships */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            LTW Championships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ltwChampionships.map((title) => (
              <div
                key={`ltw-${title.id}`}
                className="bg-zinc-900 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-400/20 group"
              >
                {/* Championship Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                  {title.slug === "highlight" ? (
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-300">
                      Image Not Found
                    </div>
                  ) : (
                    <Image
                      src={title.image}
                      alt={title.name}
                      fill
                      quality={70}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                    {title.name}
                  </h3>
                  <p className="text-zinc-400 mb-4">{title.description}</p>
                  <div className="pt-4 border-t border-yellow-400/20">
                    <p className="text-sm text-zinc-500">{title.champion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RBW Championships */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            RBW Championships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rbwChampionships.map((title) => (
              <div
                key={`rbw-${title.id}`}
                className="bg-zinc-900 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-400/20 group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={title.image}
                    alt={title.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                    {title.name}
                  </h3>
                  <p className="text-zinc-400 mb-4">{title.description}</p>
                  <div className="pt-4 border-t border-yellow-400/20">
                    <p className="text-sm text-zinc-500">{title.champion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LTW Archive Championships */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            LTW Archive Championships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ltwArchiveChampionships.map((title) => (
              <div
                key={`archive-${title.id}`}
                className="bg-zinc-900 border border-yellow-400/20 rounded-lg overflow-hidden hover:border-yellow-400/40 transition-all group"
              >
                <div className="relative h-44 w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={title.image}
                    alt={title.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                    {title.status}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-yellow-400/80 mb-2">
                    {title.year}
                  </p>
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    {title.name}
                  </h3>
                  <p className="text-zinc-400 mb-4">{title.description}</p>
                  <div className="pt-4 border-t border-yellow-400/20">
                    <p className="text-sm text-zinc-500">{title.finalChampion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

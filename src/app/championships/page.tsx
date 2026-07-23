import Link from "next/link";
import Image from "next/image";
import StaticHero from "@/components/sections/StaticHero";
import { metadata } from "../layout";

export const generateMetadata = () => ({
  ...metadata,
  title: "Championships | LTW",
  description: "LTW Championship Titles and Champions",
});

export default function ChampionshipsPage() {
  const championships = [
    {
      id: 1,
      name: "World Heavyweight Championship",
      slug: "world-heavyweight",
      description: "The premier championship of Locked Target Wrestling",
      champion: "Current Champion TBD",
      image: "/images/championships/world-heavyweight.jpg",
    },
    {
      id: 2,
      name: "Intercontinental Championship",
      slug: "intercontinental",
      description: "A championship of true technical excellence",
      champion: "Current Champion TBD",
      image: "/images/championships/intercontinental.jpg",
    },
    {
      id: 3,
      name: "Tag Team Championship",
      slug: "tag-team",
      description: "For the best teams in professional wrestling",
      champion: "Current Champions TBD",
      image: "/images/championships/tag-team.jpg",
    },
    {
      id: 4,
      name: "Women's Championship",
      slug: "womens",
      description: "The pinnacle of women's wrestling in LTW",
      champion: "Current Champion TBD",
      image: "/images/championships/womens.jpg",
    },
  ];

  return (
    <main>
      <StaticHero
        backgroundImage="/images/hero/championship-hero.png"
        title="Championships"
        subtitle="Witness the Glory of LTW Champions"
      />

      {/* Current Champions Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            Our Titles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {championships.map((title) => (
              <Link key={title.id} href={`/championships/${title.slug}`}>
                <div className="bg-zinc-900 border border-yellow-400/30 rounded-lg overflow-hidden hover:border-yellow-400/60 transition-all hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer group">
                  {/* Championship Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                    <Image
                      src={title.image}
                      alt={title.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Championship History Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-8 text-center">
            Championship History
          </h2>

          <div className="bg-zinc-800 rounded-lg p-8 text-center">
            <p className="text-zinc-400 text-lg mb-4">
              From legendary champions to unforgettable moments, LTW
              championships represent the pinnacle of wrestling excellence.
            </p>
            <p className="text-zinc-500">
              Championship history and statistics coming soon...
            </p>
          </div>
        </div>
      </section>

      {/* Notable Achievements Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            Notable Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👑", stat: "15+", label: "Championship Reigns" },
              { icon: "⚔️", stat: "100+", label: "Title Matches" },
              { icon: "🏆", stat: "8", label: "Different Champions" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <p className="text-3xl font-bold text-yellow-400 mb-2">
                  {item.stat}
                </p>
                <p className="text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

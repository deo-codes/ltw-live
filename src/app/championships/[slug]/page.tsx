import Link from "next/link";
import Image from "next/image";
import StaticHero from "@/components/sections/StaticHero";
import { metadata } from "../../layout";

const championships = [
  {
    id: 1,
    name: "World Heavyweight Championship",
    slug: "world-heavyweight",
    description: "The premier championship of Locked Target Wrestling",
    champion: "Current Champion TBD",
    image: "/images/championships/world-heavyweight.jpg",
    history:
      "The World Heavyweight Championship represents the pinnacle of wrestling excellence in Locked Target Wrestling. This prestigious title has been held by some of the greatest wrestlers in the sport.",
    reigns: 0,
  },
  {
    id: 2,
    name: "Intercontinental Championship",
    slug: "intercontinental",
    description: "A championship of true technical excellence",
    champion: "Current Champion TBD",
    image: "/images/championships/intercontinental.jpg",
    history:
      "The Intercontinental Championship showcases technical wrestling at its finest. This title celebrates the art and science of professional wrestling.",
    reigns: 0,
  },
  {
    id: 3,
    name: "Tag Team Championship",
    slug: "tag-team",
    description: "For the best teams in professional wrestling",
    champion: "Current Champions TBD",
    image: "/images/championships/tag-team.jpg",
    history:
      "The Tag Team Championship honors the bonds between wrestlers and the teamwork required to excel in professional wrestling.",
    reigns: 0,
  },
  {
    id: 4,
    name: "Women's Championship",
    slug: "womens",
    description: "The pinnacle of women's wrestling in LTW",
    champion: "Current Champion TBD",
    image: "/images/championships/womens.jpg",
    history:
      "The Women's Championship celebrates the incredible athleticism, strength, and determination of women in professional wrestling.",
    reigns: 0,
  },
];

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const championship = championships.find((c) => c.slug === params.slug);
  return {
    ...metadata,
    title: `${championship?.name || "Championship"} | Locked Target Wrestling & Regal Brotherhood Wrestling`,
    description: championship?.description,
  };
};

export const generateStaticParams = () => {
  return championships.map((championship) => ({
    slug: championship.slug,
  }));
};

export default function ChampionshipDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const championship = championships.find((c) => c.slug === params.slug);

  if (!championship) {
    return (
      <main>
        <StaticHero
          backgroundImage="/images/championship/champions-hero.jpg"
          title="Championship Not Found"
          subtitle="Return to Championships"
        />
        <section className="py-20 px-4 bg-zinc-950">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-zinc-400 mb-8">
              The championship you're looking for doesn't exist.
            </p>
            <Link
              href="/championships"
              className="inline-block bg-yellow-400 text-black px-8 py-3 font-bold rounded hover:bg-yellow-500 transition-colors"
            >
              Back to Championships
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <StaticHero
        backgroundImage={championship.image}
        title={championship.name}
        subtitle={championship.description}
      />

      {/* Championship Details */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-yellow-400/30">
                <Image
                  src={championship.image}
                  alt={championship.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2">
              <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-6">
                {championship.name}
              </h2>

              <div className="bg-zinc-900 border border-yellow-400/30 rounded-lg p-8 mb-8">
                <div className="mb-6">
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">
                    Current Champion
                  </p>
                  <p className="text-2xl font-bold text-white">
                    {championship.champion}
                  </p>
                </div>

                <div className="border-t border-yellow-400/20 pt-6">
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">
                    Total Championship Reigns
                  </p>
                  <p className="text-3xl font-bold text-yellow-400">
                    {championship.reigns}
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Championship History
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                {championship.history}
              </p>

              <Link
                href="/championships"
                className="inline-block bg-yellow-400 text-black px-6 py-3 font-bold rounded hover:bg-yellow-500 transition-colors"
              >
                ← Back to All Championships
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Championships */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:var(--font-brand-condensed)] text-4xl uppercase tracking-wider font-bold text-yellow-400 mb-12 text-center">
            Other Championships
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {championships
              .filter((c) => c.slug !== championship.slug)
              .map((title) => (
                <Link
                  key={title.id}
                  href={`/championships/${title.slug}`}
                  className="group"
                >
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4 border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
                    <Image
                      src={title.image}
                      alt={title.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-yellow-400 font-bold hover:text-yellow-300">
                    {title.name}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import { roster } from "../../data/roster";
import Image from "next/image";

export default function WrestlerPage({
  params
}: {
  params: { slug: string };
}) {
  const wrestler = roster.find(
    (w) => w.slug === params.slug
  );

  if (!wrestler) notFound();

  return (
    <main>
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-10">

          <div className="relative h-[700px]">
            <Image
              src={wrestler.image}
              alt={wrestler.name}
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-6xl font-black">
              {wrestler.name}
            </h1>

            <p className="mt-6 text-zinc-300">
              {wrestler.bio}
            </p>

            <div className="mt-10 space-y-4">

              <p>
                <strong>Brand:</strong> {wrestler.brand}
              </p>

              <p>
                <strong>Hometown:</strong> {wrestler.hometown}
              </p>

              <p>
                <strong>Height:</strong> {wrestler.height}
              </p>

              <p>
                <strong>Weight:</strong> {wrestler.weight}
              </p>

              <p>
                <strong>Finisher:</strong> {wrestler.finisher}
              </p>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
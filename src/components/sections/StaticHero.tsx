import React from "react";
import Image from "next/image";

interface StaticHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

export default function StaticHero({
  backgroundImage,
  title,
  subtitle,
}: StaticHeroProps) {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover object-top"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="[font-family:var(--font-brand-condensed)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wider font-bold text-yellow-400 mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-200 drop-shadow-lg">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

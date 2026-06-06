"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeroSlide = {
  id: string;
  image: string;
  mobileImage?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
  logo?: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
};

const MOBILE_BREAKPOINT = 768;

const slides: HeroSlide[] = [
  {
    id: "home-main",
    image: "/images/hero/ltw-arena.jpg",
    logo: "/logos/ltw-logo.png",
    title: "The Next",
    highlight: "Generation",
    subtitle: "Of Wrestling",
    description:
      "Experience the future of wrestling with LTW's high-octane action, thrilling matches, and unforgettable moments.",
    primaryButton: {
      text: "▶ Watch Now",
      href: "/watch",
    },
    secondaryButton: {
      text: "📅 Upcoming Events",
      href: "/events",
    },
  },

  {
    id: "home-roster",
    image: "/images/hero/roster-banner.png",
    mobileImage: "/images/hero/roster-banner-mobile.jpg",
    mobileImagePosition: "58% center",
    title: "Meet The",
    highlight: "Roster",
    subtitle: "Of LTW & RBW",
    description:
      "Heroes. Villains. Champions. Legends.",
    primaryButton: {
      text: "👊 View Roster",
      href: "/roster",
    },
  },

  {
    id: "home-event",
    image: "/images/hero/DSC07348_4.JPG",
    mobileImage: "/images/hero/DSC08904_2.JPG",
    imagePosition: "50% 34%",
    mobileImagePosition: "52% 24%",
    title: "All-Out",
    highlight: "Mayhem",
    subtitle: "Live In-Ring",
    description:
      "From technical showcases to all-out brawls, LTW live events deliver nonstop action from bell to bell.",
    primaryButton: {
      text: "🎟 Get Tickets",
      href: "/shows",
    },
    secondaryButton: {
      text: "📺 Watch Highlights",
      href: "/watch",
    },
  },
];

export default function HeroCarosel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const current = slides[currentSlide];
  const backgroundImage = isMobile && current.mobileImage ? current.mobileImage : current.image;
  const backgroundPosition =
    isMobile && current.mobileImagePosition
      ? current.mobileImagePosition
      : (current.imagePosition ?? "50% 50%");

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onMediaChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", onMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", onMediaChange);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.01 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={backgroundImage}
            alt={current.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: backgroundPosition }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Gold Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full max-w-7xl px-3 sm:px-5 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current.id}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-4xl"
            >

            {/* Logo */}
            <div className="mb-8">
              {current.logo && (
                <Image
                  src={current.logo}
                  alt="LTW Logo"
                  width={220}
                  height={110}
                  className="drop-shadow-[0_0_20px_rgba(255,204,0,0.5)]"
                />
              )}
            </div>

            {/* Headline */}
            <motion.h1
              key={`heading-${current.id}`}
              initial={{ opacity: 0, y: 40}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, }}
              className="
                text-4xl
                font-black
                uppercase
                tracking-tight
                leading-none
                text-white
                sm:text-5xl
                md:text-7xl
                lg:text-8xl
              "
            >
              {current.title}
              <br />
              <span className="text-yellow-400 drop-shadow-[0_0_30px_rgba(255,204,0,0.7)]">
                {current.highlight}
              </span>
              <br />
              {current.subtitle}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${current.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
                mt-6
                max-w-2xl
                text-lg
                text-gray-300
                md:text-xl
              "
            >
                {current.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              key={`buttons-${current.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6}}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href={current.primaryButton.href}
                className="
                  rounded-lg
                  bg-yellow-400
                  px-8
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-yellow-300
                "
              >
                {current.primaryButton.text}
              </Link>
              {current.secondaryButton && (
                <Link
                  href={current.secondaryButton.href}
                  className="
                    rounded-lg
                    border
                  border-yellow-400
                  bg-black/40
                  px-8
                  py-4
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                {current.secondaryButton.text}
              </Link>
              )}
            </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === index ? "bg-yellow-400 scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>

         
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

const leftNav = [
  { label: "Home", href: "/" },
  { label: "Shows", href: "/shows" },
  { label: "Roster", href: "/roster" },
  { label: "Championships", href: "/championships" },
];

const rightNav = [
  { label: "Media", href: "/media" },
  { label: "History", href: "/history" },
  { label: "Store", href: "/store" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    if (mediaQuery.matches) {
      setIsMobileMenuOpen(false);
    }

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/95 backdrop-blur-md">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

    <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">

      {/* MOBILE HEADER */}
      <div className="flex h-16 items-center justify-between xl:hidden">

        <button
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-site-menu"
          onClick={() => setIsMobileMenuOpen(true)}
          className="rounded-full p-2 text-zinc-200 transition-colors hover:text-yellow-400"
        >
          <Menu className="size-6" strokeWidth={2.2} />
        </button>

        <Link href="/">
          <Image
            src="/branding/ltw-logo.png"
            alt="Locked Target Wrestling"
            width={240}
            height={100}
            priority
            className="h-auto w-[150px]"
          />
        </Link>

        <button
          aria-label="Search"
          className="rounded-full p-2 text-zinc-200 transition-colors hover:text-yellow-400"
        >
          <Search className="size-5" strokeWidth={2.2} />
        </button>

      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden xl:flex h-28 items-center">

        <nav className="flex flex-1 items-center gap-8 2xl:gap-12">
          {leftNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                [font-family:var(--font-brand-condensed)]
                text-[1.2rem]
                leading-none
                uppercase
                tracking-[0.08em]
                text-zinc-200
                transition-colors
                hover:text-yellow-400
                2xl:text-[1.35rem]
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="shrink-0 px-6">
          <Image
            src="/branding/ltw-logo.png"
            alt="Locked Target Wrestling"
            width={500}
            height={200}
            priority
            className="
              h-auto
              w-[330px]
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </Link>

        <div className="h-9 w-px bg-zinc-700/80" />

        <nav className="flex flex-1 items-center justify-end gap-8 2xl:gap-12">
          {rightNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                [font-family:var(--font-brand-condensed)]
                text-[1.2rem]
                leading-none
                uppercase
                tracking-[0.08em]
                text-zinc-200
                transition-colors
                hover:text-yellow-400
                2xl:text-[1.35rem]
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Search"
          className="ml-6 rounded-full p-2 text-zinc-200 transition-colors hover:text-yellow-400"
        >
          <Search className="size-5" strokeWidth={2.2} />
        </button>

      </div>
    </div>

    <div className="h-px w-full bg-yellow-500/45" />

    <MobileMenu
      isOpen={isMobileMenuOpen}
      onClose={() => setIsMobileMenuOpen(false)}
    />
    </header>
  );
}
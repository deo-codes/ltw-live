"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Shows", href: "/shows" },
  { label: "Roster", href: "/roster" },
  { label: "Championships", href: "/championships" },
  { label: "Media", href: "/media" },
  { label: "History", href: "/history" },
  { label: "Store", href: "/store" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/70 xl:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <div
        id="mobile-site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`
          fixed top-0 right-0 z-50 h-full w-full sm:w-[85vw] sm:max-w-[420px] overflow-y-auto xl:hidden
          bg-black border-l border-yellow-500/30
          transform transition-transform duration-300
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4 sm:px-6 sm:py-5">
          <h2 className="[font-family:var(--font-brand-condensed)] text-2xl text-yellow-400 tracking-[0.08em]">
            MENU
          </h2>

          <button onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col pb-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="
                [font-family:var(--font-brand-condensed)]
                px-5 py-4 sm:px-6 sm:py-4
                border-b border-zinc-900
                text-2xl leading-none uppercase tracking-[0.08em]
                text-zinc-300
                hover:text-yellow-400
                hover:bg-zinc-950
                transition
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
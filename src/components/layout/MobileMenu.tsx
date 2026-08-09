"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { label: "Home", href: "/" },
  { label: "Roster", href: "/roster" },
  { label: "Championships", href: "/championships" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Store", href: "/store" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <>
      <div
        className={`
          fixed inset-x-0 top-16 bottom-0 z-40 bg-black/70 xl:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        id="mobile-site-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`
          fixed inset-x-0 top-16 z-50 xl:hidden
          border-y border-zinc-800 bg-black/98 backdrop-blur-sm
          transition-all duration-300
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
        `}
      >
        <nav className="mx-auto flex w-full max-w-md flex-col items-center px-4 py-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="
                [font-family:var(--font-brand-condensed)]
                w-full border-b border-zinc-800/80 py-4 text-center
                text-4xl leading-none uppercase tracking-[0.08em]
                text-zinc-100
                hover:text-yellow-400
                hover:bg-zinc-950
                transition-colors
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
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { news } from "@/app/data/news";
import { roster } from "@/app/data/roster";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({
  isOpen,
  onClose,
}: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.style.overflow = "hidden";
    setQuery("");
    inputRef.current?.focus();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen, onClose]);

  const normalizedQuery = query.trim().toLowerCase();

  const rosterMatches = useMemo(() => {
    if (!normalizedQuery) {
      return roster.slice(0, 6);
    }

    return roster
      .filter((wrestler) => {
        const searchableText = [wrestler.name, wrestler.brand, wrestler.hometown]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 6);
  }, [normalizedQuery]);

  const newsMatches = useMemo(() => {
    if (!normalizedQuery) {
      return news.slice(0, 4);
    }

    return news
      .filter((article) => {
        const searchableText = [
          article.title,
          article.category,
          article.excerpt,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
      .slice(0, 4);
  }, [normalizedQuery]);

  if (!isOpen) {
    return null;
  }

  return (
    <div id="site-search-overlay" className="fixed inset-0 z-[60]">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative mx-auto flex min-h-full w-full max-w-5xl items-start px-4 pt-20 sm:px-6 xl:pt-32">
        <div className="w-full overflow-hidden rounded-[1.75rem] border border-yellow-400/20 bg-zinc-950/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-4 sm:px-6">
            <Search className="size-5 text-yellow-400" strokeWidth={2.2} />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search wrestlers and news..."
              className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
            />
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-zinc-400 transition hover:text-white"
              aria-label="Close search"
            >
              <X className="size-5" strokeWidth={2.2} />
            </button>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="border-b border-zinc-800 p-5 lg:border-b-0 lg:border-r sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
                  Wrestlers
                </h2>
                <Link
                  href="/roster"
                  onClick={onClose}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white"
                >
                  View Roster
                </Link>
              </div>

              <div className="space-y-3">
                {rosterMatches.length ? (
                  rosterMatches.map((wrestler) => (
                    <Link
                      key={wrestler.id}
                      href={`/roster/${wrestler.slug}`}
                      onClick={onClose}
                      className="block rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 transition hover:border-yellow-400/50 hover:bg-zinc-900"
                    >
                      <p className="font-bold uppercase tracking-[0.08em] text-white">
                        {wrestler.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {wrestler.brand} • {wrestler.hometown}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-400">
                    No wrestlers matched that search.
                  </p>
                )}
              </div>
            </section>

            <section className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
                  News
                </h2>
                <Link
                  href="/news"
                  onClick={onClose}
                  className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white"
                >
                  View News
                </Link>
              </div>

              <div className="space-y-3">
                {newsMatches.length ? (
                  newsMatches.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/news/${article.slug}`}
                      onClick={onClose}
                      className="block rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 transition hover:border-yellow-400/50 hover:bg-zinc-900"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                        {article.category}
                      </p>
                      <p className="mt-2 font-bold uppercase tracking-[0.05em] text-white">
                        {article.title}
                      </p>
                      <p className="mt-2 text-sm text-zinc-400">
                        {article.excerpt}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-400">
                    No news articles matched that search.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
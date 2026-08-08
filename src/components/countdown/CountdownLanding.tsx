"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CountdownLandingProps = {
  targetIso?: string;
  headline?: string;
  message?: string;
};

type RemainingTime = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getDefaultTargetIso(): string {
  const next = new Date();
  next.setDate(next.getDate() + 1);
  next.setHours(23, 59, 59, 0);
  return next.toISOString();
}

function getRemainingTime(targetDate: Date): RemainingTime {
  const totalMs = Math.max(targetDate.getTime() - Date.now(), 0);

  const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
  const seconds = Math.floor((totalMs / 1000) % 60);

  return {
    totalMs,
    days,
    hours,
    minutes,
    seconds,
  };
}

function TimeBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-center shadow-lg backdrop-blur">
      <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
        {String(value).padStart(2, "0")}
      </p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
        {label}
      </p>
    </div>
  );
}

export default function CountdownLanding({
  targetIso,
  headline = "Site relaunch in",
  message = "We are polishing the final details. Check back very soon.",
}: CountdownLandingProps) {
  const resolvedTarget = useMemo(() => {
    const fallback = getDefaultTargetIso();
    const raw = targetIso?.trim() || fallback;
    const parsed = new Date(raw);

    if (Number.isNaN(parsed.getTime())) {
      return new Date(fallback);
    }

    return parsed;
  }, [targetIso]);

  const [remaining, setRemaining] = useState<RemainingTime>({
    totalMs: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    setRemaining(getRemainingTime(resolvedTarget));

    const timer = window.setInterval(() => {
      setRemaining(getRemainingTime(resolvedTarget));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [resolvedTarget]);

  const isLive = isReady && remaining.totalMs <= 0;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0e1119] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#ff5a36]/35 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#2f6bff]/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ffd166]/20 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-14 sm:px-10">
        <div className="w-full rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="mx-auto mb-6 flex w-full justify-center sm:mb-8">
            <Image
              src="/logos/ltw-logo.png"
              alt="Locked Target Wrestling"
              width={700}
              height={467}
              priority
              className="h-auto w-full max-w-[340px] sm:max-w-[430px]"
            />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#ffd166]">
            Live Tomorrow
          </p>

          <h1 className="mt-4 font-[var(--font-brand-condensed)] text-5xl uppercase leading-none tracking-tight text-white sm:text-7xl">
            {isLive ? "We are live" : headline}
          </h1>

          <p className="mt-5 max-w-2xl text-sm text-white/75 sm:text-base">
            {isLive
              ? "The wait is over. Refresh to enter the latest version of the site."
              : message}
          </p>

          {isReady && !isLive && (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <TimeBlock label="Days" value={remaining.days} />
              <TimeBlock label="Hours" value={remaining.hours} />
              <TimeBlock label="Minutes" value={remaining.minutes} />
              <TimeBlock label="Seconds" value={remaining.seconds} />
            </div>
          )}

          <p className="mt-8 text-xs text-white/60">
            Target: {resolvedTarget.toLocaleString()}
          </p>
        </div>
      </section>
    </main>
  );
}

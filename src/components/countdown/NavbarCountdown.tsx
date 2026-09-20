"use client";

import { useEffect, useState } from "react";

type RemainingTime = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

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

export default function NavbarCountdown() {
  const [time, setTime] = useState<RemainingTime | null>(null);

  useEffect(() => {
    // DaniMania Pure Greatness: October 18, 2026 at 3:00 PM EDT
    const targetDate = new Date("2026-10-18T15:00:00-04:00");

    // Initial calculation
    setTime(getRemainingTime(targetDate));

    // Update every second
    const interval = setInterval(() => {
      setTime(getRemainingTime(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="flex items-center gap-4 rounded-lg border border-yellow-400/30 bg-black/40 px-4 py-2 backdrop-blur-sm">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
          DaniMania
        </p>
        <div className="mt-1 flex gap-2">
          <div className="text-center">
            <p className="text-lg font-black text-white">
              {String(time.days).padStart(2, "0")}
            </p>
            <p className="text-[0.6rem] uppercase tracking-wider text-zinc-400">
              Days
            </p>
          </div>
          <span className="text-white/40">:</span>
          <div className="text-center">
            <p className="text-lg font-black text-white">
              {String(time.hours).padStart(2, "0")}
            </p>
            <p className="text-[0.6rem] uppercase tracking-wider text-zinc-400">
              Hrs
            </p>
          </div>
          <span className="text-white/40">:</span>
          <div className="text-center">
            <p className="text-lg font-black text-white">
              {String(time.minutes).padStart(2, "0")}
            </p>
            <p className="text-[0.6rem] uppercase tracking-wider text-zinc-400">
              Min
            </p>
          </div>
          <span className="text-white/40">:</span>
          <div className="text-center">
            <p className="text-lg font-black text-white">
              {String(time.seconds).padStart(2, "0")}
            </p>
            <p className="text-[0.6rem] uppercase tracking-wider text-zinc-400">
              Sec
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

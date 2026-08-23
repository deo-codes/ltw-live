import type { Metadata } from "next";
import CountdownLanding from "@/components/countdown/CountdownLanding";

export const metadata: Metadata = {
  title: "Launching Soon | Locked Target Wrestling & Regal Brotherhood Wrestling",
  description: "Temporary countdown page while the site is finalized.",
};

export default function CountdownPage() {
  // Set in .env.local or hosting env vars as ISO-8601 with timezone offset.
  // Examples:
  // EST: 2026-08-09T23:59:59-05:00
  // CST: 2026-08-09T23:59:59-06:00
  // PST: 2026-08-09T23:59:59-08:00
  const launchAt = process.env.NEXT_PUBLIC_LAUNCH_AT;

  return (
    <CountdownLanding
      targetIso={launchAt}
      headline="New era starts in"
      message="We are tuning every detail. This countdown page is live while the full site is in final prep."
    />
  );
}

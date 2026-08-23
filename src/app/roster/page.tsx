import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import RosterHero from "@/components/roster/RosterHero";
import RosterGrid from "@/components/roster/RosterGrid";

export const metadata: Metadata = {
  title: "Roster | Locked Target Wrestling & Regal Brotherhood Wrestling",
  description: "Meet the athletes of Locked Target Wrestling and Regal Brotherhood Wrestling.",
};

export default function RosterPage() {
  return (
    <SiteShell transparentHeader>
      <RosterHero />
      <RosterGrid />
    </SiteShell>
  );
}
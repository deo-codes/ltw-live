import SiteShell from "@/components/layout/SiteShell";
import RosterHero from "@/components/roster/RosterHero";
import RosterGrid from "@/components/roster/RosterGrid";

export default function RosterPage() {
  return (
    <SiteShell transparentHeader>
      <RosterHero />
      <RosterGrid />
    </SiteShell>
  );
}
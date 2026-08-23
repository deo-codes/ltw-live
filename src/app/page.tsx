import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import FeaturedShow from "@/components/home/FeaturedShow";
import RosterSpotlight from "@/components/home/RosterSpotlight";
import LatestVideos from "@/components/home/LatestVideos";
import LatestNews from "@/components/home/LatestNews";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import HeroCarosel from "@/components/home/HeroCarosel";
import CountdownLanding from "@/components/countdown/CountdownLanding";

export const metadata: Metadata = {
  title: "The Official Site of Locked Target Wrestling & Regal Brotherhood Wrestling",
  description: "Locked Target Wrestling and Regal Brotherhood Wrestling.",
};

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_SHOW_COUNTDOWN === "true") {
    return (
      <CountdownLanding
        targetIso={process.env.NEXT_PUBLIC_LAUNCH_AT}
        headline="New era starts in"
        message="We are tuning every detail. Full launch drops tomorrow."
      />
    );
  }

  return (
    <SiteShell>
      <HeroCarosel />

      <FeaturedShow />
    
      <LatestVideos />

      <RosterSpotlight />
      <LatestNews />
      <UpcomingEvents />
    </SiteShell>
  );
}
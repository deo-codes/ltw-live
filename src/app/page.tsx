import SiteShell from "@/components/layout/SiteShell";
import FeaturedShow from "@/components/home/FeaturedShow";
import RosterSpotlight from "@/components/home/RosterSpotlight";
import LatestVideos from "@/components/home/LatestVideos";
import LatestNews from "@/components/home/LatestNews";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import HeroCarosel from "@/components/home/HeroCarosel";

export default function HomePage() {
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
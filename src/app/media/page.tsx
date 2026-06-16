import SiteShell from "@/components/layout/SiteShell";
import MediaHero from "@/components/media/MediaHero";
import MediaArchive from "@/components/media/MediaArchive";

export default function MediaPage() {
  return (
    <SiteShell transparentHeader>
      <MediaHero />
      <MediaArchive />
    </SiteShell>
  );
}
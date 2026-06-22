import SiteShell from "@/components/layout/SiteShell";
import MediaHero from "@/components/media/MediaHero";
import MediaArchive from "@/components/media/MediaArchive";

export default function MediaPage() {
  return (
    <SiteShell transparentHeader>
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[52vh] bg-[url('/images/hero/media-hero-banner.png')] bg-cover bg-[center_30%] opacity-75 md:h-[66vh]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.88)_46%,#000_76%)]"
        />

        <div className="relative z-10">
          <MediaHero />
          <MediaArchive />
        </div>
      </div>
    </SiteShell>
  );
}
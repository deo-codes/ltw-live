export type SocialPlatform =
  | "YouTube"
  | "Instagram"
  | "Facebook"
  | "X"
  | "Twitter"
  | "TikTok";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Wrestler {
  id: string;
  name: string;
  slug: string;
  image: string;
  heroBanner?: string;
  alumni?: boolean;

  brand: "LTW" | "RBW";

  hometown: string;
  height: string;
  weight: string;

  finisher?: string;

  championships: string[];
  socials?: SocialLink[];
  matches?: {
    title: string;
    thumbnail: string;
    url: string;
    event?: string;
  }[];

  bio: string;
}
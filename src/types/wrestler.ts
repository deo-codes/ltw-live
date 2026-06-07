export interface Wrestler {
  id: string;
  name: string;
  slug: string;
  image: string;
  heroBanner?: string;

  brand: "LTW" | "RBW";

  hometown: string;
  height: string;
  weight: string;

  finisher?: string;

  championships: string[];
  socials?: {
    platform: string;
    url: string;
  }[];
  matches?: {
    title: string;
    thumbnail: string;
    url: string;
    event?: string;
  }[];

  bio: string;
}
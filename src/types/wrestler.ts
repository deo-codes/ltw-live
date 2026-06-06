export interface Wrestler {
  id: string;
  name: string;
  slug: string;
  image: string;

  brand: "LTW" | "RBW";

  hometown: string;
  height: string;
  weight: string;

  finisher: string;

  championships: string[];

  bio: string;
}
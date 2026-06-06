import { Wrestler } from "@/types/wrestler";

export const roster: Wrestler[] = [
  {
    id: "1",
    name: "Darius Black",
    slug: "darius-black",
    image: "/roster/darius.jpg",

    brand: "LTW",

    hometown: "Atlanta, Georgia",
    height: "6'2",
    weight: "235 lbs",

    finisher: "Blackout Driver",

    championships: [
      "LTW World Champion"
    ],

    bio: "One of the most dominant stars in LTW."
  },

  {
    id: "2",
    name: "King Saint",
    slug: "king-saint",
    image: "/roster/saint.jpg",

    brand: "RBW",

    hometown: "Philadelphia, PA",
    height: "6'4",
    weight: "250 lbs",

    finisher: "Royal Verdict",

    championships: [
      "RBW Heavyweight Champion"
    ],

    bio: "Leader of the Regal Brotherhood."
  }
];
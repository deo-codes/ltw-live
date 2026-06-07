import { Wrestler } from "@/types/wrestler";

const newLocal = "/images/roster/dante-black.png";
export const roster: Wrestler[] = [
  {
    id: "1",
    name: "AJ Anderson",
    slug: "aj-anderson",
    image: "/images/roster/aj-anderson.png",

    brand: "RBW",

    hometown: "Brick, NJ",
    height: "6'4",
    weight: "233 lbs",

    finisher: "Ripcord Clothesline",

    championships: [
      "LTW Internet Champion",
      "LTW/RBW Key to the Kingdom Champion",
      "RBW Heavyweight Champion"
    ],

    matches: [
      {
        title: "AJ Anderson vs. The Field",
        thumbnail: "/images/videos/video1.jpg",
        url: "https://www.youtube.com/watch?v=rBzyqGuBHtM",
        event: "Cadillacs and Beatdowns"
      },
      {
        title: "AJ Anderson Championship Showcase",
        thumbnail: "/images/videos/video2.jpg",
        url: "https://www.youtube.com/watch?v=7NxgAlR3_aI",
        event: "Moving Day"
      }
    ],

    bio: "cocky, arrogant kid who thinks he should just be handed title matches",
    heroBanner: "/images/hero/aj-anderson-hero.jpg"
  },

  {
    id: "2",
    name: "\"Mr.Hyde\" Lawerence Spiral",
    slug: "mr-hyde-lawerence-spiral",
    image: "/images/roster/lawerence-spiral.png",

    brand: "LTW",

    hometown: "Freehold, NJ",
    height: "5'8",
    weight: "185 lbs",

    finisher: "Something Rotten (Bicycle Kick) & Zydrate (Impaler DDT)",

    championships: [
      "LTW Light Heavyweight Champion",
      "LTW Internet Champion",
      "LTW Tag Team Champion",
      "LTW Underground Champion",
      "LTW 24/7 Champion",
      "RBW Regal Champion"
    ],

    matches: [
      {
        title: "Mr. Hyde Feature Match",
        thumbnail: "/images/videos/video3.jpg",
        url: "https://www.youtube.com/watch?v=WkK4nclk_WU&pp=0gcJCSgLAYcqIYzv",
        event: "Special Appearance"
      },
      {
        title: "Lawerence Spiral Main Event",
        thumbnail: "/images/videos/video4.jpg",
        url: "https://www.youtube.com/watch?v=E0NdbrEZU3Q",
        event: "Final Confrontation"
      }
    ],

    bio: "A real life Jekyll and Hyde his twisted split personality has people on their feet every-time he walks through that curtain he’s not afraid to put his body on the line for the prize.",
    heroBanner: "/images/hero/lawerence-spiral-hero.jpg"
  },

  {
    id: "3",
    name: "Gangsta X",
    slug: "gangsta-x",
    image: "/images/roster/gangsta-x.png",


    brand: "LTW",
    hometown: "West Philadelphia, PA",
    height: "5'9",
    weight: "215 lbs",

    // finisher: "Gangsta Slam",

    championships: [
      "LTW 24/7 Champion",
      "LTW Internet Champion"
    ],

    matches: [
      {
        title: "Gangsta X vs. Prince Malcolm III: LTW Internet Championship Match",
        thumbnail: "/images/videos/video1.jpg",
        url: "https://www.youtube.com/watch?v=rBzyqGuBHtM",
        event: "Cadillacs and Beatdowns"
      }
    ],

    bio: "Gangsta X is a street savy Brawler from Philly who is looking to make it out the mud by any means necessary,A powerhouse in his own right and a very dangerous striker, Can take a lickin' and keep on kickin', Make sure your never In X's Crosshairs or otherwise You'll Be X'D Out!!!",
    heroBanner: "/images/hero/gangsta-x-hero.jpg"
  },

    {
      id: "4",
      name: "Jack Tradzz",
      slug: "jack-tradzz",
      image: "/images/roster/jack-tradzz.png",
      
      brand: "RBW",
      hometown: "Toms River, NJ",
      height: "5'11",
      weight: "215 lbs",
      championships: [
        "LTW 24/7 Champion",
        "RBW Intercontinental Champion",
        
      ],
      bio: "I'm unpredictable, I'm hardworking, I'm resilient.",
      heroBanner: "/images/hero/jack-tradzz-hero.jpg"
    },

      {
      id: "5",
      name: "Adam Wolf",
      slug: "adam-wolf",
      image: "/images/roster/adam-wolf.png",
      
      brand: "RBW",
      hometown: "Philadelphia, PA",
      height: "5'8",
      weight: "160 lbs",
      championships: [
        "LTW 24/7 Champion",
        "RBW Hardcore Champion",
        "LTW Light Heavyweight Champion"
        
      ],
      bio: "Has a tendency to fly off the handle when he feels like theres an inequality within the Company. This gets him into situations he probably could have avoided. May not be the strongest or the fastest, but that wont stop him from standing up for what he feels is right.",
      heroBanner: "/images/hero/adam-wolf-hero.jpg"
    },

      {
      id: "6",
      name: "Decay",
      slug: "decay",
      image: "/images/roster/decay.png",
      
      brand: "LTW",
      hometown: "Middletown, NJ",
      height: "6'2",
      weight: "280 lbs",
      championships: [
        "LTW Heavyweight Champion",
        "RBW Hardcore Champion",
        "LTW Internet Champion",
        "LTW Tag Team Champion",
        "LTW 24/7 Champion",
        "LTW Wild Card Champion"
        
      ],
      bio: "Loner, never handed anything, had to work for everything he’s gotten.",
      heroBanner: "/images/hero/decay-hero2.jpg"
    },




  

  
];
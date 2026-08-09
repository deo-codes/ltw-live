export type NewsArticle = {
  category: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const news: NewsArticle[] = [
  {
    category: "Announcement",
    title: "Tommy Vieira Memorial Battle Royal",
    date: "June 5, 2026",
    excerpt:
      "At DaniMania 2026, the Tommy Vieira Memorial Battle Royal will take place to honor his legacy.",
    slug: "tommy-vieira-memorial-battle-royal",
    image: "/images/events/tommy-vieira-memorial-battle-royal.jpg",
    imageAlt: "LTW ring under dramatic event lighting",
    content: [
      "Locked Target Wrestling will honor Tommy Vieira with a special Memorial Battle Royal at Danimania: Pure Greatness.",
      "This match is designed to celebrate his impact on the LTW community and give the roster a chance to compete in his memory.",
      "More participant announcements and match details will be released as we get closer to showtime.",
    ],
  },
  {
    category: "In Memoriam",
    title: "Daniel \"Sorrows\" Pryer Passes Away",
    date: "July 25, 2026",
    excerpt:
      "Daniel \"Sorrows\" Pyder, a beloved figure in the LTW community, has passed away.",
    slug: "daniel-sorrows-pyder-passes-away",
    image: "/images/events/daniel-sorrows-passed-away.jpg",
    imageAlt: "Memorial image for Daniel \"Sorrows\" Pyder",
    content: [
      "The LTW community mourns the loss of Daniel \"Sorrows\" Pyder, who made a significant impact both inside and outside the ring.",
      "Fans and fellow wrestlers alike remember his contributions to the promotion and the memorable moments he created.",
      "In honor of his memory, the LTW community will come together to celebrate his life and contributions.",
    ],
  },
  {
    category: "Danimania 2026",
    title: "Danimania: Pure Greatness",
    date: "May 28, 2026",
    excerpt:
      "LTW's annual summer event returns. Stay tuned for more details on date, location, and match card.",
    slug: "2026-danimania",
    image: "/images/events/2026-danimania.png",
    imageAlt: "2026 Danimania event promotion graphic",
    content: [
      "Danimania: Pure Greatness returns as LTW's signature summer event and promises one of the biggest cards of the year.",
      "Fans can expect championship stakes, personal grudges, and high-impact matches featuring stars from across LTW and RBW.",
      "Additional match announcements, bell time updates, and ticket information will be shared on the LTW site and social platforms.",
    ],
  },
];

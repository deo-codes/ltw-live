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
    category: "RBW Announcement",
    title: "RBW: Destruction of Parliament",
    date: "September 26, 2026",
    excerpt:
      "Regal Brotherhood Wrestling presents Destruction of Parliament on Sunday, October 11, 2026, at The Silverton Volunteer Fire Company in Toms River, New Jersey.",
    slug: "rbw-destruction-of-parliament",
    image: "/images/events/Destruction-Parliament-Banner.jpg",
    imageAlt: "Destruction of Parliament event banner",
    content: [
      "Regal Brotherhood Wrestling is bringing Destruction of Parliament to The Silverton Volunteer Fire Company on Sunday, October 11, 2026.",
      "Join RBW at 15 Kittle Creek Road, Toms River, NJ 08753, one week before Danimania: Pure Greatness.",
    ],
  },
  {
    category: "Announcement",
    title: "Danimania: Pure Greatness Date Confirmed - Tickets on Sale",
    date: "September 9, 2026",
    excerpt:
      "Danimania: Pure Greatness is confirmed for Sunday, October 18, 2026. Tickets are now available to order online via PayPal.",
    slug: "danimania-date-confirmed-tickets-on-sale",
    image: "/images/events/LTWDANIMANIA2026V2.jpg",
    imageAlt: "Danimania Pure Greatness Live Pro Wrestling Event Poster",
    content: [
      "Locked Target Wrestling is excited to announce that Danimania: Pure Greatness is officially scheduled for Sunday, October 18, 2026.",
      "Doors will open at 3:00 PM with belltime at 4:00 PM. Tickets are now available to purchase online via PayPal.",
      "Get your tickets today and join us for an evening of championship stakes, personal grudges, and high-impact matches featuring stars from across LTW and RBW. We look forward to seeing you there!",
    ],
  },
  {
    category: "Announcement",
    title: "Danimania: Pure Greatness Postponed",
    date: "August 22, 2026",
    excerpt:
      "Danimania: Pure Greatness has been postponed. LTW will share the new event date as soon as it is confirmed.",
    slug: "danimania-pure-greatness-postponed",
    image: "/images/events/2026danimania-pure-greatness.jpg",
    imageAlt: "Danimania Pure Greatness event poster",
    content: [
      "Locked Target Wrestling announces that Danimania: Pure Greatness has been postponed from its previously scheduled date.",
      "The event will not take place on Sunday, August 30, 2026. A new date and updated event details will be announced once they are confirmed.",
      "Thank you to the LTW and RBW community for your patience and continued support. Please follow LTW's official channels for the next announcement.",
    ],
  },
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

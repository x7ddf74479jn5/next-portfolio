export type LinkMapIndex =
  | "home"
  | "about"
  | "contact"
  | "terms"
  | "privacy"
  | "samples"
  | "portfolio"
  | "chat"
  | "ec"
  | "blog"
  | "twitter"
  | "github";

type ImageMapIndex = "pandashark_icon" | "pandashark_rec" | "ec" | "chat" | "portfolio" | "robot";

type PathMap<T extends string> = {
  [key in T]: string;
};

export const links: PathMap<LinkMapIndex> = {
  home: "/",
  about: "/about/",
  contact: "/contact/",
  terms: "/terms/",
  privacy: "/privacy/",
  samples: "/samples/",
  portfolio: "/samples/portfolio/",
  chat: "/samples/chat/",
  ec: "/samples/ec/",
  blog: "",
  twitter: "https://twitter.com/pandashark6",
  github: "https://github.com/x7ddf74479jn5",
} as const;

export const images: PathMap<ImageMapIndex> = {
  pandashark_icon: "/img/icons/pandashark_icon.png",
  pandashark_rec: "/img/icons/pandashark_logo_rectangle.webp",
  ec: "/img/samples/ec-app-eyecatch.webp",
  chat: "/img/samples/chat-bot-eyecatch.webp",
  portfolio: "/img/samples/portfolio-eyecatch.webp",
  robot: "/img/icons/robot.png",
} as const;

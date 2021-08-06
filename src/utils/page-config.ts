import { internalLinks } from "src/utils/paths";

import { identity } from "./helper";

type PageConfigCollection = Readonly<{
  [key: string]: PageConfig;
}>;

export type PageConfig = {
  path: string;
  title: string;
  titleArea?: { title: string; caption: string };
};

export const pageConfigCollection: PageConfigCollection = identity({
  home: { path: internalLinks.home, title: "Home | Pandashark Web" },
  about: {
    path: internalLinks.about,
    title: "About | Pandashark Web",
    titleArea: {
      title: "About",
      caption: "自己紹介",
    },
  },

  contact: {
    path: internalLinks.contact,
    title: "Contact | Pandashark Web",
    titleArea: {
      title: "Contact",
      caption: "お問い合わせ",
    },
  },
  terms: {
    path: internalLinks.terms,
    title: "Terms | Pandashark Web",
    titleArea: {
      title: "Terms",
      caption: "利用規約",
    },
  },
  privacy: {
    path: internalLinks.privacy,
    title: "Privacy Policy | Pandashark Web",
    titleArea: {
      title: "Privacy Policy",
      caption: "プライバシーポリシー",
    },
  },
  samples: {
    path: internalLinks.samples,
    title: "Samples | Pandashark Web",
    titleArea: {
      title: "Samples",
      caption: "制作事例",
    },
  },
  portfolio: {
    path: internalLinks.portfolio,
    title: "Portfolio | Pandashark Web",
    titleArea: {
      title: "Portfolio",
      caption: "ポートフォリオ",
    },
  },
  myFavoriteGear: {
    path: internalLinks.myFavoriteGear,
    title: "My Favorite Gear | Pandashark Web",
    titleArea: {
      title: "My Favorite Gear",
      caption: "My Favorite Gear",
    },
  },
  chat: {
    path: internalLinks.chat,
    title: "Chat Bot | Pandashark Web",
    titleArea: {
      title: "Chat Bot",
      caption: "チャットボット",
    },
  },
  ec: {
    path: internalLinks.ec,
    title: "EC App | Pandashark Web",
    titleArea: {
      title: "EC App",
      caption: "ECアプリ",
    },
  },
});

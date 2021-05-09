import { links } from "src/utils/paths";

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
  home: { path: links.home, title: "Home | Pandashark Web" },
  about: {
    path: links.about,
    title: "About | Pandashark Web",
    titleArea: {
      title: "About",
      caption: "自己紹介",
    },
  },

  contact: {
    path: links.contact,
    title: "Contact | Pandashark Web",
    titleArea: {
      title: "Contact",
      caption: "お問い合わせ",
    },
  },
  terms: {
    path: links.terms,
    title: "Terms | Pandashark Web",
    titleArea: {
      title: "Terms",
      caption: "利用規約",
    },
  },
  privacy: {
    path: links.privacy,
    title: "Privacy Policy | Pandashark Web",
    titleArea: {
      title: "Privacy Policy",
      caption: "プライバシーポリシー",
    },
  },
  samples: {
    path: links.samples,
    title: "Samples | Pandashark Web",
    titleArea: {
      title: "Samples",
      caption: "制作事例",
    },
  },
  portfolio: {
    path: links.portfolio,
    title: "Portfolio | Pandashark Web",
    titleArea: {
      title: "Portfolio",
      caption: "ポートフォリオ",
    },
  },
  chat: {
    path: links.chat,
    title: "Chat Bot | Pandashark Web",
    titleArea: {
      title: "Chat Bot",
      caption: "チャットボット",
    },
  },
  ec: {
    path: links.ec,
    title: "EC App | Pandashark Web",
    titleArea: {
      title: "EC App",
      caption: "ECアプリ",
    },
  },
});

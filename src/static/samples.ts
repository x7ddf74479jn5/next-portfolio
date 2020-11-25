type Sample = {
  img: {
    src: string;
    alt: string;
  };
  category: string;
  href: string;
  title: string;
  description: string;
};

import { images, links } from "./links";

export const samples: Sample[] = [
  {
    title: "ポートフォリオ",
    category: "Web制作｜デザイン｜レスポンシブ｜アニメーション",
    description: "現在閲覧してくださっているサイトです。",
    href: "/samples/portfolio/",
    img: {
      src: images.portfolio,
      alt: "Thumbnail of portfolio",
    },
  },
  {
    title: "チャットボット",
    category: "Webアプリ開発｜チャット｜SPA",
    description: "事前に用意したQAを使って自動応答するチャットボットです。",
    href: "/samples/chat/",
    img: {
      src: images.chat,
      alt: "Thumbnail of Chat Bot",
    },
  },
  {
    title: "ECサイト(開発中)",
    category: "Webアプリ開発｜EC｜SPA",
    description: "React学習用に開発しているデモサイトです。",
    href: "/samples/ec/",
    img: {
      src: images.ec,
      alt: "Thumbnail of EC site",
    },
  },
];

export type SampleDetail = {
  id: string;
  img: string;
  alt: string;
  abstract: string;
  purpose: string[];
  point: string[];
  lang: string;
  tech: string;
  link: { href: string; label: string } | string;
  title: string;
  caption: string;
};

export const samplesDetail: SampleDetail[] = [
  {
    id: "portfolio",
    img: images.portfolio,
    alt: "Eye-catch of portfolio",
    abstract: "ポートフォリオサイトです。",
    purpose: ["Next.js/Typescriptの学習", "転職活動のため", "案件獲得のため"],
    point: [
      "Webサイト制作に必要不可欠な要素は抑えた",
      "CSSはなるべくシンプルに",
      "JavaScriptの使用も最小限に",
      "見ていて飽きさせないためのCSSアニメーション",
      "SEOを意識したHTML構造",
    ],
    lang: "HTML5, CSS3, JavaScript(ES6) Typescript ",
    tech: "React Next.js Vercel Sass",
    link: "このサイトなので省略",
    title: "Portfolio",
    caption: "",
  },
  {
    id: "chat-bot",
    img: images.chat,
    alt: "Eye-catch of chat-bot",
    abstract: "ユーザーに質問を投げて自動で応答するチャットボット",
    purpose: ["カジュアルにWebサイトへのお問い合わせをしてもらうため"],
    point: ["SPAらしい画面描画の切り替わり", "問い合わせ結果をSlackへ通知", "チャット風のデザインとアニメーション"],
    lang: "JavaScript(React), JSX",
    tech: "Sass, React, Material-ui, Firebase Hosting, Firestore, Cloud Functions",
    link: { href: "chatbot-demo-70752.web.app", label: "チャットボット" },
    title: "Chat App",
    caption: "",
  },
  {
    id: "EC-app",
    img: images.ec,
    alt: "Eye-catch of EC-app",
    abstract: "ECアプリ（開発中です）",
    purpose: ["React-ReduxでWebアプリケーションの作り方を学習するため"],
    point: ["SPAらしい画面描画の切り替わり", "ECアプリとしての機能を順次追加中"],
    lang: "JavaScript(React), JSX",
    tech: "Sass, React, Redux, Material-ui, Firebase Hosting, Firestore, Cloud Functions",
    link: { href: "https://ec-app-a2f5e.web.app/", label: "ECアプリ" },
    title: "Chat App",
    caption: "",
  },
];

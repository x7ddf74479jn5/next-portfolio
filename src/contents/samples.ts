import { images, links } from "../utils/paths";

export type Sample = {
  id: string;
  imgSrc: string;
  imgAlt: string;
  category: string;
  link: string;
  title: string;
  description: string;
};

export const samples: Sample[] = [
  {
    id: "portfolio",
    title: "ポートフォリオ",
    category: "Web制作｜デザイン｜レスポンシブ｜アニメーション",
    description: "現在閲覧してくださっているサイトです。",
    link: links.portfolio,
    imgSrc: images.portfolio,
    imgAlt: "Thumbnail of portfolio",
  },
  {
    id: "chat-bot",
    title: "チャットボット",
    category: "Webアプリ開発｜チャット｜SPA",
    description: "事前に用意したQAを使って自動応答するチャットボットです。",
    link: links.chat,
    imgSrc: images.chat,
    imgAlt: "Thumbnail of Chat Bot",
  },
  {
    id: "ec-app",
    title: "ECサイト(開発中)",
    category: "Webアプリ開発｜EC｜SPA",
    description: "React学習用に開発しているデモサイトです。",
    link: links.ec,
    imgSrc: images.ec,
    imgAlt: "Thumbnail of EC site",
  },
];

export type SampleDetail = {
  id: string;
  img: string;
  alt: string;
  summary: string;
  purposes: string[];
  points: string[];
  langs: string;
  techs: string;
  link: {
    href?: string;
    label?: string;
    description?: string;
  };
  note?: string;
};

export const sampleDetails: SampleDetail[] = [
  {
    id: "portfolio",
    img: images.portfolio,
    alt: "Eye-catch of portfolio",
    summary: "ポートフォリオサイトです。",
    purposes: ["Next.js/Typescriptの学習", "転職活動のため"],
    points: [
      "Webサイト制作に必要不可欠な要素は抑えた",
      "CSSはなるべくシンプルに",
      "JavaScriptの使用も最小限に",
      "見ていて飽きさせないためのCSSアニメーション",
      "SEOを意識したHTML構造",
    ],
    langs: "HTML5, CSS3, JavaScript(ES6) Typescript ",
    techs: "React Next.js Vercel Sass",
    link: {
      description: "このサイトなので省略。",
    },
    note:
      " 実験的な変更を含め、日々改良中です。もしデザイン崩れや機能不調が確認できましたら、お問い合わせページからご一報くださると助かります。",
  },
  {
    id: "chat",
    img: images.chat,
    alt: "Eye-catch of chat-bot",
    summary: "ユーザーに質問を投げて自動で応答するチャットボット",
    purposes: ["カジュアルにWebサイトへのお問い合わせをしてもらうため"],
    points: ["SPAらしい画面描画の切り替わり", "問い合わせ結果をSlackへ通知", "チャット風のデザインとアニメーション"],
    langs: "JavaScript(React), JSX",
    techs: "Sass, React, Material-ui, Firebase Hosting, Firestore, Cloud Functions",
    link: {
      href: "https://chatbot-demo-70752.web.app/",
      label: "チャットボット",
    },
    note: "ヘッダーメニューのロボットアイコンからお試しいただけます。",
  },
  {
    id: "ec",
    img: images.ec,
    alt: "Eye-catch of EC-app",
    summary: "ECアプリ（開発中です）",
    purposes: ["React-ReduxでWebアプリケーションの作り方を学習するため"],
    points: ["SPAらしい画面描画の切り替わり", "ECアプリとしての機能を順次追加中"],
    langs: "JavaScript(React), JSX",
    techs: "Sass, React, Redux, Material-ui, Firebase Hosting, Firestore, Cloud Functions",
    link: {
      href: "https://ec-app-a2f5e.web.app/",
      label: "ECアプリ",
    },
    note: "途中まで。TypeScriptにリファクタリング予定。",
  },
];

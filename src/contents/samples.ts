import { identity } from "../utils/helper";
import { images } from "../utils/images";
import { externalLinks, internalLinks } from "../utils/paths";

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
  identity({
    id: "portfolio",
    title: "ポートフォリオ",
    category: "Web制作｜デザイン｜レスポンシブ｜アニメーション",
    description: "現在閲覧してくださっているサイトです。",
    link: internalLinks.portfolio,
    imgSrc: images.portfolio.path,
    imgAlt: images.portfolio.alt,
  }),
  identity({
    id: "chat-bot",
    title: "チャットボット",
    category: "Webアプリ開発｜チャット｜SPA",
    description: "事前に用意したQAを使って自動応答するチャットボットです。",
    link: internalLinks.chat,
    imgSrc: images.chat.path,
    imgAlt: images.chat.alt,
  }),
  identity({
    id: "ec-app",
    title: "ECサイト(開発中)",
    category: "Webアプリ開発｜EC｜SPA",
    description: "React学習用に開発しているデモサイトです。",
    link: internalLinks.ec,
    imgSrc: images.ec.path,
    imgAlt: images.ec.alt,
  }),
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
  identity({
    id: "portfolio",
    img: images.portfolio.path,
    alt: images.portfolio.alt,
    summary: "ポートフォリオサイトです。",
    purposes: ["Next.js/TypeScriptの学習", "転職活動のため"],
    points: [
      "Webサイト制作に必要不可欠な要素は抑えた",
      "CSSはなるべくシンプルに",
      "JavaScriptの使用も最小限に",
      "見ていて飽きさせないためのCSSアニメーション",
      "SEOを意識したHTML構造",
      "StorybookやCIを使ったモダンな開発環境",
    ],
    langs: "React, TypeScript, Sass",
    techs: "Next.js, Vercel, CSS Modules, Storybook, GitHub Actions",
    link: {
      description: "このサイトなので省略。",
    },
    note: " 実験的な変更を含め、日々改良中です。もしデザイン崩れや機能不調が確認できましたら、お問い合わせページからご一報くださると助かります。",
  }),
  identity({
    id: "chat",
    img: images.chat.path,
    alt: images.chat.alt,
    summary: "ユーザーに質問を投げて自動で応答するチャットボット",
    purposes: ["カジュアルにWebサイトへのお問い合わせをしてもらうため"],
    points: ["SPAらしい画面描画の切り替わり", "問い合わせ結果をSlackへ通知", "チャット風のデザインとアニメーション"],
    langs: "React, Sass",
    techs: "Material-UI, Firebase Hosting, Firestore, Cloud Functions",
    link: {
      href: externalLinks.chat,
      label: "チャットボット",
    },
    note: "ヘッダーメニューのロボットアイコンからお試しいただけます。",
  }),
  identity({
    id: "ec",
    img: images.ec.path,
    alt: images.ec.alt,
    summary: "ECアプリ（開発中です）",
    purposes: ["React-ReduxでWebアプリケーションの作り方を学習するため"],
    points: ["SPAらしい画面描画の切り替わり", "ECアプリとしての機能を順次追加中"],
    langs: "React, Sass",
    techs: "Redux, Material-UI, Firebase Hosting, Firestore, Cloud Functions",
    link: {
      href: externalLinks.ec,
      label: "ECアプリ",
    },
    note: "ログイン時に入力してください。\nemail: psexample86@gmail.com\npassword: 8ox2lkmw",
  }),
];

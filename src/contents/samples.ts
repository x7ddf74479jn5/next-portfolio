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
    id: "food-blog",
    title: "Food Blog",
    category: "Web制作｜デザイン",
    description: "Next.js, MDX, microCMSを使ったレシピブログです。",
    link: internalLinks["food-blog"],
    imgSrc: images.foodBlog.path,
    imgAlt: images.foodBlog.alt,
  }),
  identity({
    id: "portfolio",
    title: "ポートフォリオ",
    category: "Web制作｜デザイン",
    description: "現在閲覧してくださっているサイトです。",
    link: internalLinks.portfolio,
    imgSrc: images.portfolio.path,
    imgAlt: images.portfolio.alt,
  }),
  identity({
    id: "my-favorite-gear",
    title: "My Favorite Gear",
    category: "Webアプリ開発|twitter",
    description: "自分のお気に入りのアイテムを8つ選んでTwitterに投稿できます。",
    link: internalLinks["my-favorite-gear"],
    imgSrc: images.myFavoriteGear.path,
    imgAlt: images.myFavoriteGear.alt,
  }),
  identity({
    id: "chat-bot",
    title: "チャットボット",
    category: "Webアプリ開発｜チャット",
    description: "事前に用意したQAを使って自動応答するチャットボットです。",
    link: internalLinks.chat,
    imgSrc: images.chat.path,
    imgAlt: images.chat.alt,
  }),
  identity({
    id: "ec-app",
    title: "ECサイト",
    category: "Webアプリ開発｜EC",
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
    id: "foodBlog",
    img: images.foodBlog.path,
    alt: images.foodBlog.alt,
    summary: "Next.js, MDX, microCMSを使ったレシピブログです。",
    purposes: ["フロントエンドの学習"],
    points: [
      "CMS側から非エンジニアがコンテンツの投稿とサイトの基本設定ができる",
      "Atomic Design, Tailwind CSSで設計",
      "SWRを使ったキャッシュの最適化",
      "SEO/Core Web Vitalの向上を意識した",
      "Storybookや自動テストを使ったモダンな開発環境",
    ],
    langs: "React, TypeScript",
    techs: "Next.js, MDX, Atomic Design, Tailwind CSS, Vercel, microCMS, Storybook, Jest",
    link: {
      href: externalLinks.FoodBlog,
      label: "Food Blog",
    },
    note: "",
  }),
  identity({
    id: "portfolio",
    img: images.portfolio.path,
    alt: images.portfolio.alt,
    summary: "ポートフォリオサイトです。",
    purposes: ["Next.js/TypeScriptの学習", "転職活動のため"],
    points: [
      "Webサイト制作に必要不可欠な要素は抑えた",
      "CSSはなるべくシンプルに",
      "SPAらしい画面描画の切り替わり",
      "見ていて飽きさせないためのCSSアニメーション",
      "SEOを意識したHTML構造",
      "Storybookや自動テストを使ったモダンな開発環境",
    ],
    langs: "React, TypeScript, Sass",
    techs: "Next.js, Vercel, CSS Modules, Storybook, Jest, GitHub Actions",
    link: {
      description: "このサイトなので省略。",
    },
    note: "Next.jsとTypeScriptを学習したての頃開発したため実装が汚くなってしまいました。刷新予定。",
  }),
  identity({
    id: "myFavoriteGear",
    img: images.myFavoriteGear.path,
    alt: images.myFavoriteGear.alt,
    summary: "自分のお気に入りのアイテムを8つ選んでTwitterに投稿できます。",
    purposes: ["環境構築の練習", "Firebaseの理解を深めるため"],
    points: [
      "Twitter・アプリケーション・商品サイトへの導線を構築",
      "webpack 5を使った複数環境をマニュアルで構築した",
      "Firestoreを含む複雑なテストを書いた",
    ],
    langs: "React, TypeScript",
    techs: "Material-UI, Firebase Hosting, Firestore, Cloud Functions, webpack 5, Jest",
    link: {
      href: externalLinks.myFavoriteGear,
      label: "My Favorite Gear",
    },
    note: "Twitterアカウントが必要です。",
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
    note: "ヘッダーメニューのチャットアイコンからお試しいただけます。",
  }),
  identity({
    id: "ec",
    img: images.ec.path,
    alt: images.ec.alt,
    summary: "ECアプリ",
    purposes: ["React-ReduxでWebアプリケーションの作り方を学習するため"],
    points: ["SPAらしい画面描画の切り替わり", "Reduxでの状態管理とキャッシュ機構の実装"],
    langs: "React, Sass",
    techs: "Redux, Material-UI, Firebase Hosting, Firestore, Cloud Functions",
    link: {
      href: externalLinks.ec,
      label: "ECアプリ",
    },
    note: "【一般ユーザー】\nemail: psexample86@gmail.com\npassword: 8ox2lkmw\n【管理者】\nemail: psexample86+admin@gmail.com\npassword: 8ox2lkmw",
  }),
];

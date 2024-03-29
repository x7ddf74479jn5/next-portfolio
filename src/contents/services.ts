import { identity } from "../utils/helper";
import { images } from "../utils/images";

export type Service = {
  title: string;
  caption: string;
  img: {
    src: string;
    alt: string;
  };
  description: string;
};

export const services: Service[] = [
  identity({
    title: "WEBサイト制作",
    caption: "Website Production",
    img: {
      src: images.websiteProduction.path,
      alt: images.websiteProduction.alt,
    },
    description:
      "コーポレートサイト、個人ポートフォリオ、ランディングページなどWebサイト制作全般を承ります。検索流入やSNS流入を強化する「SEOを意識したサイト」を作成できます。",
  }),
  identity({
    title: "WordPress",
    caption: "WordPress",
    img: {
      src: images.wordPress.path,
      alt: images.wordPress.alt,
    },
    description: "WordPress導入サポートやカスタマイズ、その他お困り事のご相談にも対応いたします。",
  }),
  identity({
    title: "チャットアプリ開発",
    caption: "Chat APP",
    img: {
      src: images.webApp.path,
      alt: images.webApp.alt,
    },
    description:
      "リアルタイム性が重視されるSNSアプリやチャットアプリなどを開発できます。これまで開発してきたWebアプリの一部を制作事例として公開しています。",
  }),
];

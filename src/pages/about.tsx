import { NextPage } from "next";
import Head from "next/head";
import Spacer from "src/components/common/Spacer";
import { services } from "src/contents/services";
import { Layout } from "src/layout/layout";
import { AriaTitle } from "../components/common/AriaTitle";

type Timeline = {
  datetime: string;
  title: string;
  description: string;
};

const timelines: Timeline[] = [
  {
    datetime: "2012-10",
    title: "新卒で大手外食チェーン店に入社",
    description:
      "店長候補として入社し、都内拠点で店舗オペレーションを学んでいました。従業員マネジメントに力を入れ、アルバイトの離職率改善へ取り組みました。",
  },
  {
    datetime: "2016-04",
    title: "地元に戻り、喫茶店の調理職へ",
    description:
      "地元食材を用いた付加価値の高い商品を提供しています。自分が独学したもののもうひとつが料理で、それが嵩じて調理職に。",
  },
  {
    datetime: "2016-07",
    title: "プログラミングを独学",
    description:
      "以前よりクラウドソーシングでWebライティングの経験があり、よりスキルアップするためプログラミングの勉強を始めました。Javascript > jQuery > PHP > WordPress > ...",
  },
  {
    datetime: "2017-01",
    title: "Web制作の仕事を開始",
    description: `クラウドソーシングを利用して案件を受注できるようになり、本格的にWeb制作の仕事を開始。`,
  },
  {
    datetime: "Now",
    title: "現在",
    description:
      "React及びモダンフロントエンド開発のエコシステム、応用情報技術者試験などの学習を継続しながら転職活動を進めています。",
  },
];

const About: NextPage = () => {
  const timelineItems: JSX.Element[] = timelines.map((timeline: Timeline, index: number) => (
    <li key={index}>
      <time dateTime="timeline.datetime">{timeline.datetime}</time>
      <div className="timeline__icon"></div>
      <div className="timeline__box">
        <h3> {timeline.title} </h3>
        <p> {timeline.description} </p>
      </div>
    </li>
  ));

  const serviceItems = services.map((service, index) => (
    <article className="p-grid__list-item-floated" key={index}>
      <h3>{service.title}</h3>
      <small>{service.caption}</small>
      {/* <Image layout="fill" className="p-media__thumb" src={service.img.src} alt={service.img.alt} /> */}
      <img className="p-media__thumb" src={service.img.src} alt={service.img.alt} />
      <p>{service.description}</p>
    </article>
  ));

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <section>
        <Spacer size="md" />
      </section>
      <AriaTitle title="About" caption="自己紹介" />

      {/* <section className="c-section">
        <div className="c-section__area-title animated fadeInLeft">
          <div className="p-headline__sub animated fadeInUp fast delay-1s">
            <h2>About</h2>
            <p>自己紹介</p>
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <ul className="u-text__breadcrumbs">
              <li>
                <a href="/" target="_self">
                  HOME
                </a>
                <span>＞</span>
              </li>
              <li>
                <a href="/about/" target="_self">
                  ABOUT
                </a>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section className="c-section" id="vision">
        <div className="c-section-wrapin">
          <h2 className="p-headline__about">Vision</h2>
          <div className="p-grid__about">
            <div className="left">
              <h3>
                人性の善なるは、
                <br />
                猶水の下きに就くがごときなり。
              </h3>
              <p className="sub">孟子 『性猶湍水也』</p>
              <p>
                孟子は人の生き様を川の流れに喩え、外部の不可抗力によって悪を為すと説明します。
                <br />
                手前の解釈ですが、人生の過程をどのように生きていきたいのか、それを考えさせられる言葉です。
              </p>
              <p>
                <b>生涯学習。</b>
                <br />
                たとえば、私がプログラミングの勉強を始めた契機でもあります。
                <br />
                一生を通して何かを学び続けていたい。
              </p>
              <p>
                失敗と挫折を繰り返してきました。
                <br />
                中には途中でやめてしまったものも少なくありません。
                <br />
                それでも、どこかの方角に向かって日々学びを欠かさずに過ごしています。
              </p>
              <p>
                私は私の人生の過程において学んだこと、その結果から生み出された価値を周りの誰かに提供できる人間になりたいと思っています。
                <br />
                私は直接お取引させていただくクライアント様だけでなく、
                画面の向こう側にいるエンドユーザーのためにサービスを作ります。
                <br />
                調理職として厨房で働いていたときから、お客様の顔は見えませんがずっと心掛けてきました。
              </p>
            </div>
            {/* <div className="left">
              <h3>
                一個人の利益になる仕事より、
                <br />
                多くの人や社会全体の利益になる仕事を
              </h3>
              <p className="sub">渋沢栄一 『論語と算盤』</p>
              <p>
                令和は、新1万円札に描かれる渋沢栄一が『論語と算盤』の中で語るような時代になるでしょう。
                <br />
                利己的な企業は排他され、<b>社会全体の利益になるサービスを提供する企業が生き残ります。</b>
              </p>
              <p>
                トラハックは、直接お取引させていただくクライアント様だけでなく、
                画面の向こう側にいるエンドユーザーのためにサービスを作ります。
              </p>
              <p>
                また、エンジニアの育成にも力を入れています。
                <br />
                優秀なエンジニアが増えると、世の中に優れたサービスを開発する企業が増えるからです。
              </p>
              <p>
                そのサービスが広まることで、社会全体が豊かになります。
                <br />
                そして、エンジニアたちは報酬を受けとり、生活が豊かになります。
              </p>
              <p>
                <b>「この好循環の作り手になりたい」</b>
              </p>
              <p>
                そんな思いで、Webエンジニアを目指したい方向けのコミュニティを作りました。参加費は<b>無料</b>です。
                <br />
              </p>
            </div> */}
            {/* <div className="right">
          <Image src="" />
        </div> */}
          </div>
        </div>
      </section>

      <section className="c-section c-bg-primary" id="profile">
        <div className="c-section-wrapin">
          <h2 className="p-headline__about-white">Profile</h2>
          <div className="p-grid__profile">
            <div className="left p-media__profile">
              <img src="/img/icons/pandashark_icon.png" alt="Pandashark's Icon" />
              <p>パンダシャーク</p>
            </div>
            <div className="right">
              <p>喫茶店の調理職×Webエンジニア。</p>
              <p>
                珈琲と美味しい料理が好き。
                <br />
                得意な料理ジャンルはイタリアンです。
              </p>
              <p>現在、プログラミング・情報技術者資格試験の勉強と転職活動を行っています。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="c-section" id="career">
        <div className="c-section-wrapin">
          <h2 className="p-headline__about">Career</h2>
          <ul className="p-list__timeline">
            {timelineItems}

            {/* {timelines.map((timeline, index) => (
              <li key={index}>
                <time dateTime="timeline.datetime">{timeline.datetime}</time>
                <div className="timeline__icon"></div>
                <div className="timeline__box">
                  <h3> {timeline.title} </h3>
                  <p> {timeline.description} </p>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
      </section>

      <section className="c-section" id="skills">
        <div className="c-section-wrapin">
          <h2 className="p-headline__about">Skills</h2>
          <p>技術と開発物は以下の通りです。</p>
          <div className="p-grid__list">
            {serviceItems}
            {/* <article className="p-grid__list-item-floated">
              <h3>WEBサイト制作</h3>
              <small>Website Production</small>
              <img className="p-media__thumb" src="/img/view/website-production.jpeg" alt={""} />
              <p>
                コーポレートサイト、個人ポートフォリオ、ランディングページなどWebサイト制作全般を承ります。
                検索流入やSNS流入を強化する「SEOを考慮したサイト」を作成できます。
              </p>
            </article>
            <article className="p-grid__list-item-floated">
              <h3>WordPress</h3>
              <small>WordPress</small>
              <img className="p-media__thumb" src="/img/view/website-production.jpeg" alt={""} />
              <p>WordPress導入サポートやカスタマイズ、その他お困り事のご相談にも対応いたします。</p>
            </article>
            <article className="p-grid__list-item-floated">
              <h3>チャットアプリ開発</h3>
              <small>Chat APP</small>
              <img className="p-media__thumb" src="/img/view/web-app.jpeg" alt="" />
              <p>
                リアルタイム性が重視されるSNSアプリやチャットアプリなどを開発できます。
                これまで開発してきたWebアプリの一部を制作事例として公開しています。
              </p>
            </article> */}
          </div>
          <ul className="p-grid__table">
            <li>
              <h3 className="head">マークアップ</h3>
              <div className="data">HTML5, CSS3, BootStrap4</div>
            </li>
            <li>
              <h3 className="head">フロントエンド</h3>
              <div className="data">
                JavaScript(ES6), jQuery, WordPress, Sass, Webpack, Babel | 学習中：React, TypeScript, Next.js
              </div>
            </li>
            <li>
              <h3 className="head">バックエンド</h3>
              <div className="data">PHP, MySQL(MariaDB) | 学習中：Node.js, Firebase</div>
            </li>
            <li>
              <h3 className="head">その他ツール</h3>
              <div className="data">git, npm, Dockerなど</div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;

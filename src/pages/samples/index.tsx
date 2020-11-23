import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "src/layout/layout";

import { sampleRoute } from "src/static/breadcrumbs";
import { AriaTitle } from "../../components/AriaTitle";
import { samples } from "../../static/samples";
import { NextPage } from "next";

const Samples: NextPage = () => {
  const sampleItems = samples.map((sample, index) => (
    <li key={index}>
      <Link href={sample.href}>
        <a className="u-text__line-none">
          <div className="p-media__thumb">
            {/* <img src={sample.img.src} alt={sample.img.alt}  /> */}
            <Image src={sample.img.src} alt={sample.img.alt} layout="fill" />
          </div>
          <div className="p-list__works-detail">
            <h3 className="title">{sample.title}</h3>
            <p className="category">{sample.category}</p>
            <span className="icon"></span>
          </div>
        </a>
      </Link>
    </li>
  ));

  return (
    <Layout>
      <Head>
        <title>Samples</title>
      </Head>
      <section>
        <div className="module-spacer--medium"></div>
      </section>
      <AriaTitle title="Samples" caption="制作事例" breadcrumbs={sampleRoute} />

      {/* <section className="c-section">
        <div className="c-section__area-title animated fadeInLeft">
          <div className="p-headline__sub animated fadeInUp fast delay-1s">
            <h2>Works</h2>
            <p>制作事例</p>
            <ul className="u-text__breadcrumbs">
              <li>
                <a href="/" target="_self">
                  HOME
                </a>
                <span>＞</span>
              </li>
              <li>
                <a href="/works/" target="_self">
                  WORKS
                </a>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      <section>
        <div className="module-spacer--medium"></div>
      </section>

      <section className="c-section">
        <div className="c-section-wrapin-wide">
          <ul className="p-list__works">
            {sampleItems}
            {/* <li>
              <a className="u-text__line-none" href="/works/asw/">
                <p className="p-media__thumb">
                  <img src="/img/works/asw-eyecatch.png" alt="Thumbnail of Auto suggest words" />
                </p>
                <div className="p-list__works-detail">
                  <h3 className="title">Auto Suggest Words</h3>
                  <p className="category">Webサービス｜システム開発｜自動化｜スクレイピング</p>
                  <span className="icon"></span>
                </div>
              </a>
            </li>
            <li>
              <a className="u-text__line-none" href="/works/portfolio/">
                <p className="p-media__thumb">
                  <img src="/img/works/portfolio-eyecatch.png" alt="Thumbnail of Torahack's portfolio" />
                </p>
                <div className="p-list__works-detail">
                  <h3 className="title">トラハックのポートフォリオ</h3>
                  <p className="category">Web制作｜デザイン｜レスポンシブ｜アニメーション</p>
                  <span className="icon"></span>
                </div>
              </a>
            </li>
            <li>
              <a className="u-text__line-none" href="/works/jishuku/">
                <p className="p-media__thumb">
                  <img src="/img/works/jishuku.jpeg" alt="Thumbnail of Jishuku No Susume" />
                </p>
                <div className="p-list__works-detail">
                  <h3 className="title">ジシュクのススメ</h3>
                  <p className="category">Webアプリ開発｜SNS｜SPA</p>
                  <span className="icon"></span>
                </div>
              </a>
            </li>
            <li>
              <a className="u-text__line-none" href="/works/chat/">
                <p className="p-media__thumb">
                  <img src="/img/works/chat.jpeg" alt="Thumbnail of Chat Bot" />
                </p>
                <div className="p-list__works-detail">
                  <h3 className="title">チャットボット</h3>
                  <p className="category">Webアプリ開発｜チャット｜SPA</p>
                  <span className="icon"></span>
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Samples;

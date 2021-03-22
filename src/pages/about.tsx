import type { NextPage } from "next";
import Head from "next/head";
import { services } from "src/contents/services";
import { Timeline, timelines } from "src/contents/timelines";
import { Layout } from "src/layouts/layout";
import Spacer from "src/layouts/Spacer";
import { AriaTitle } from "../components/common/AriaTitle";

const About: NextPage = () => {
  const timelineItems: JSX.Element[] = timelines.map((timeline: Timeline, index: number) => {
    return (
      <li key={index}>
        <time dateTime="timeline.datetime">{timeline.datetime}</time>
        <div className="timeline__icon"></div>
        <div className="timeline__box">
          <h3> {timeline.title} </h3>
          <p> {timeline.description} </p>
        </div>
      </li>
    );
  });

  const serviceItems = services.map((service, index) => {
    return (
      <article className="p-grid__list-item-floated" key={index}>
        <h3>{service.title}</h3>
        <small>{service.caption}</small>
        {/* <Image layout="fill" className="p-media__thumb" src={service.img.src} alt={service.img.alt} /> */}
        <img className="p-media__thumb" src={service.img.src} alt={service.img.alt} />
        <p>{service.description}</p>
      </article>
    );
  });

  return (
    <Layout>
      <Head>
        <title>About | Pandashark Web</title>
      </Head>
      <Spacer size="md" />
      <AriaTitle title="About" caption="自己紹介" />
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
          <ul className="p-list__timeline">{timelineItems}</ul>
        </div>
      </section>

      <section className="c-section" id="skills">
        <div className="c-section-wrapin">
          <h2 className="p-headline__about">Skills</h2>
          <p>技術と開発物は以下の通りです。</p>
          <div className="p-grid__list">{serviceItems}</div>
          <ul className="p-grid__table">
            <li>
              <h3 className="head">マークアップ</h3>
              <div className="data">HTML5, CSS3</div>
            </li>
            <li>
              <h3 className="head">フロントエンド</h3>
              <div className="data">JavaScript(ES6), TypeScript, React, jQuery, Sass, Webpack, Babel</div>
            </li>
            <li>
              <h3 className="head">バックエンド</h3>
              <div className="data">PHP, MySQL, Node.js, Firebase</div>
            </li>
            <li>
              <h3 className="head">その他ツール</h3>
              <div className="data">Git, npm, Dockerなど</div>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default About;

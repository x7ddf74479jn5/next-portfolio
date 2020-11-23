import { NextPage } from "next";
import { Layout } from "src/layout/layout";
import { samplesDetail } from "src/static/samples";

const Chat = () => {
  const sample = samplesDetail.find((sample) => sample.id === "chat-bot");

  if (!sample) {
    return;
  }

  const content = (
    <section className="c-section">
      <div className="c-section-wrapin p-grid__works">
        <img src={sample.img} />
        <div className="p-grid__works__row">
          <h3>概要</h3>
          <p>{sample.abstract}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>用途・目的</h3>
          <ul>
            {sample.purpose.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="p-grid__works__row">
          <h3>こだわり</h3>
          <ul>
            {sample.point.map((p, index) => (
              <li key={index}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="p-grid__works__row">
          <h3>使用言語</h3>
          <p>{sample.lang}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>技術</h3>
          <p>{sample.tech}</p>
        </div>
        <div className="p-grid__works__row">
          <h3>リンク</h3>
          {typeof sample.link === "string" ? (
            <p>{sample.link}</p>
          ) : (
            <p>
              <a href={sample.link.href} target="_blank">
                {sample.link.label}
                <i className="fas fa-external-link-alt"></i>
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <Layout>
      <section>
        <div className="module-spacer--medium"></div>
      </section>

      {/* <section className="c-section">
        <div className="c-section__area-title animated fadeInLeft">
          <div className="p-headline__sub animated fadeInUp fast delay-1s">
            <h2>Portfolio</h2>
            <p></p>
            <ul className="u-text__breadcrumbs">
              <li>
                <a href="/" target="_self">
                  HOME
                </a>
                <span>＞</span>
              </li>
              <li>
                <a href="/samples/" target="_self">
                  SAMPLES
                </a>
                <span>＞</span>
              </li>
              <li>
                <a href="/samples/portfolio/" target="_self">
                  PORTFOLIO
                </a>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {content}

      {/* <section className="c-section">
        <div className="c-section-wrapin p-grid__works">
          <img src="jpeg/img/works/chat." />
          <div className="p-grid__works__row">
            <h3>概要</h3>
            <p>ユーザーに質問を投げて自動で応答するチャットボット</p>
          </div>
          <div className="p-grid__works__row">
            <h3>用途・目的</h3>
            <p>カジュアルにWebサイトへのお問い合わせをしてもらうため</p>
          </div>
          <div className="p-grid__works__row">
            <h3>こだわり</h3>
            <ul>
              <li>SPAらしい画面描画の切り替わり</li>
              <li>問い合わせ結果をSlackへ通知</li>
              <li>チャット風のデザインとアニメーション</li>
            </ul>
          </div>
          <div className="p-grid__works__row">
            <h3>使用言語</h3>
            <p>JavaScript(React), JSX</p>
          </div>
          <div className="p-grid__works__row">
            <h3>技術</h3>
            <p>Sass, React, Material-ui, Firebase Hosting, Firestore, Cloud Functions</p>
          </div>
          <div className="p-grid__works__row">
            <h3>リンク</h3>
            <p>
              <a href="https://chatbot-demo-1bc98.web.app/" target="_blank">
                チャットボット<i className="fas fa-external-link-alt"></i>
              </a>
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="c-section">
        <div className="c-section-wrapin p-grid__works">
          <img src="/img/samples/portfolio-eyecatch.png" />
          <div className="p-grid__works__row">
            <h3>概要</h3>
            <p>ポートフォリオサイトです。</p>
          </div>
          <div className="p-grid__works__row">
            <h3>用途・目的</h3>
            <ul>
              <li>開発案件の獲得のため</li>
              <li>エンジニア教育事業の教材とするため</li>
            </ul>
          </div>
          <div className="p-grid__works__row">
            <h3>こだわり</h3>
            <ul>
              <li>教材用に作ったので、Webサイト制作に必要不可欠な要素は抑えた</li>
              <li>CSSはなるべくシンプルに</li>
              <li>JavaScriptの使用も最小限に</li>
              <li>見ていて飽きさせないためのCSSアニメーション</li>
              <li>SEOを意識したHTML構造</li>
            </ul>
          </div>
          <div className="p-grid__works__row">
            <h3>使用言語</h3>
            <p>HTML5, CSS3, JavaScript(ES6)</p>
          </div>
          <div className="p-grid__works__row">
            <h3>技術</h3>
            <p>Firebase Hosting, Cloud Functions, Express, EJS, Sass</p>
          </div>
          <div className="p-grid__works__row">
            <h3>リンク</h3>
            <p>このサイトなので省略</p>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Chat;

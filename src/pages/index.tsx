import Head from "next/head";
import { Layout } from "src/components/layout";

const samples = [
  {
    title: "ポートフォリオ",
    description: "現在閲覧してくださっているサイトです。",
    href: "/samples/portfolio/",
    img: {
      src: "/img/samples/portfolio-eyecatch.png",
      alt: "Thumbnail of portfolio",
    },
  },
  {
    title: "チャットボット",
    description: "事前に用意したQAを使って自動応答するチャットボットです。",
    href: "/samples/chat/",
    img: {
      src: "/img/samples/chat.jpeg",
      alt: "Thumbnail of Chat Bot",
    },
  },
  {
    title: "ECサイト(開発中)",
    description: "React学習用に開発しているデモサイトです。",
    href: "/samples/ec/",
    img: {
      src: "/img/samples/ec-app.jpeg",
      alt: "Thumbnail of EC site",
    },
  },
];

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <h2>Home</h2>
    <button onClick={() => window.alert("Hello, World!")}>Button</button>
  */}

    <section>
      <div className="p-grid__view-first" data-label="first-view">
        <div>
          <h2>Pandashark</h2>
          <p>Web Engineer</p>
          <a className="p-btn-round-on-dark p-icon__arrow-next" role="button" href="/contact/">
            Contact
          </a>
        </div>
        <img src="/img/view/first-view.jpeg" alt="sea coast in RJ" />
      </div>
    </section>

    <section>
      <div className="module-spacer--medium"></div>
    </section>

    <section className="c-section">
      <div className="c-section-wrapin p-grid__vision">
        <h2 className="animated slow" data-animate="fadeInUp">
          一個人の利益になる仕事より、
          <br />
          多くの人や社会全体の利益になる仕事を
        </h2>
        <p className="sub animated slow" data-animate="fadeInUp">
          渋沢栄一 『論語と算盤』
        </p>
        <div data-label="description">
          <p className="animated slow" data-animate="fadeInUp">
            トラハックが仕事をする上で、
            <br />
            もっとも大切にしている理念です。
          </p>
          <p className="animated slow" data-animate="fadeInUp">
            技術屋は楽しいし、稼ぎもいい。
            <br />
            だけど、自分が楽しいだけじゃ物足りない。
          </p>
          <p className="animated slow" data-animate="fadeInUp">
            クライアントのために、
            <br />
            画面の向こうのユーザーのために、
          </p>
          <p className="animated slow" data-animate="fadeInUp">
            社会を豊かにするために技術を提供します。
          </p>
        </div>
      </div>
    </section>

    <section className="c-section c-bg-primary">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Services</h2>
        <hr className="c-section__line" />
        <div className="module-spacer--small"></div>
        <a className="p-btn-round p-icon__arrow-next" href="/about/#skills" role="button">
          事業内容
        </a>
        <div className="module-spacer--medium"></div>
        <div className="p-grid__list">
          <article className="p-grid__list-item-floated animated slow" data-animate="slideInLeft">
            <h3>WEBサイト制作</h3>
            <small>Website Production</small>
            <img className="p-media__thumb" src="/img/view/website-production.jpeg" alt="Website Production" />
            <p>
              企業サイト、個人ポートフォリオ、LPなどWebサイト制作全般を承ります。
              WordPressのカスタマイズ、お困り事のご相談にも対応いたします。
            </p>
          </article>
        </div>
      </div>
    </section>

    <section>
      <div className="module-spacer--medium"></div>
    </section>

    <section className="c-section">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Samples</h2>
        <hr className="c-section__line" />
        <div className="module-spacer--small"></div>
        <div className="module-spacer--medium"></div>
        <section className="p-grid__list swiper-container">
          <div className="swiper-wrapper">
            (sample of samples)
            <article className="p-grid__list-item swiper-slide">
              <a className="u-text__line-none" href={"sample.href"} target="_self">
                <h3>sample.title</h3>
                <p className="p-media__thumb">
                  <img src="<%= sample.img.src %>" alt="<%= sample.img.alt %>" />
                </p>
                <p>sample.description</p>
              </a>
            </article>
            <article className="p-grid__list-item swiper-slide">
              <a className="u-text__line-none" href="/" target="_self">
                <h3>Portfolio</h3>
                <p className="p-media__thumb">
                  <img src="/img/works/portfolio-eyecatch.png" alt="Thumbnail of Torahack's portfolio" />
                </p>
                <p>現在閲覧してくださっているサイトです。</p>
              </a>
            </article>
            <article className="p-grid__list-item swiper-slide">
              <a className="u-text__line-none" href="/works/chat/" target="_self">
                <h3>チャットボット</h3>
                <p className="p-media__thumb">
                  <img src="/img/works/chat.jpeg" alt="Thumbnail of Chat Bot" />
                </p>
                <p>事前に用意したQAを使って自動応答するチャットボットです。</p>
              </a>
            </article>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </section>
        <div className="module-spacer--medium"></div>
        <a className="p-btn-round p-icon__arrow-next" href="/works/" target="_self" role="button">
          全ての事例を見る
        </a>
      </div>
    </section>

    <section className="c-section c-bg-primary">
      <div className="c-section-wrapin p-grid__contact">
        <h2>お仕事のご依頼・ご相談</h2>
        <hr className="c-section__line" />
        <div className="module-spacer--medium"></div>
        <p>
          企業HPなどのWebサイト制作、アプリ開発、システム開発などのお見積もり、ご相談はお気軽にご連絡ください。
          お客様だけでなく、エンドユーザーにも喜んでいただけるよう技術を提供します。
        </p>
        <div className="module-spacer--small"></div>
        <a className="p-btn-round p-icon__arrow-next" href="/contact/" role="button">
          お問い合わせ
        </a>
        <div className="module-spacer--medium"></div>
      </div>
    </section>
  </Layout>
);

export default Home;

import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNext } from "src/components/IconArrowNext";
import { ImageSwiper } from "src/components/ImageSwiper";
import { SampleSwiper } from "src/components/SampleSwiper";
import { SapmleSwiper } from "src/components/SapmleSwiper";
import { Layout } from "src/layout/layout";
import { samples } from "src/static/samples";
import { Service, services } from "src/static/services";

type SlideAnimate = {
  class: string;
  dataAnimate: string;
};

const Home: NextPage = () => {
  const slideInLeft: SlideAnimate = {
    class: "p-grid__list-item-floated animated slow slideInLeft",
    dataAnimate: "slideInLeft",
  };
  const slideInRight: SlideAnimate = {
    class: "p-grid__list-item-floated animated slow slideInRight",
    dataAnimate: "slideInRight",
  };

  const serviceItems: JSX.Element[] = services.map((service: Service, index: number) => (
    <article
      key={index}
      className={index % 2 === 0 ? slideInLeft.class : slideInRight.class}
      data-animate={index % 2 === 0 ? slideInLeft.dataAnimate : slideInRight.dataAnimate}
    >
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
        <title>Home</title>
      </Head>

      <section>
        <div className="p-grid__view-first" data-label="first-view">
          {/* <Image src={"/img/view/first-view.jpg"} alt="Ocean" layout="fill" /> */}
          <div className="child">
            <div>
              <h2>Pandashark</h2>
              <p>Web Engineer</p>
              <IconArrowNext label="Contact" href="/contact/" />
              {/* <Link href="/contact/">
              <a className="p-btn-round-on-dark p-icon__arrow-next" role="button" href="/contact/">
                Contact
              </a>
              </Link> */}
            </div>
          </div>
          <picture>
            <source type="image/webp" srcSet="/img/view/first-view.webp" />
            <img src="/img/view/first-view.jpg" />
          </picture>
          {/* <img src="/img/view/first-view.webp" alt="sea coast in RJ" /> */}
        </div>
        {/* <div className="p-grid__view-first-img">
          <Image src={"/img/view/first-view.jpeg"} alt="sea coast in RJ" width={1440} height={810} />
          </div> */}
      </section>

      <section>
        <div className="module-spacer--medium"></div>
      </section>

      <section className="c-section">
        <div className="c-section-wrapin p-grid__vision">
          <h2 className="animated slow" data-animate="fadeInUp">
            人性の善なるは、
            <br />
            猶水の下きに就くがごときなり。
          </h2>
          <p className="sub animated slow" data-animate="fadeInUp">
            孟子 『性猶湍水也』
          </p>
          <div data-label="description">
            <p className="animated slow" data-animate="fadeInUp">
              私が生きる上で、
              <br />
              もっとも大切にしている言葉です。
            </p>
            <p className="animated slow" data-animate="fadeInUp">
              生涯学び、生涯価値を生み出し続ける。
              <br />
              そして、
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
          <IconArrowNext label="事業内容" href="/about/#skills" />
          {/* <Link href="/about/#skills">
          <a className="p-btn-round p-icon__arrow-next"  role="button">
            事業内容
          </a>
          </Link> */}
          <div className="module-spacer--medium"></div>
          <div className="p-grid__list">
            {serviceItems}

            {/* <article className="p-grid__list-item-floated animated slow" data-animate="slideInLeft">
              <h3>WEBサイト制作</h3>
              <small>Website Production</small>
              <img className="p-media__thumb" src="/img/view/website-production.jpeg" alt="Website Production" />
              <p>
                企業サイト、個人ポートフォリオ、LPなどWebサイト制作全般を承ります。
                WordPressのカスタマイズ、お困り事のご相談にも対応いたします。
              </p>
            </article> */}
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

          {/* <SapmleSwiper samples={samples} /> */}
          <SampleSwiper samples={samples} />
          {/* <ImageSwiper samples={samples} /> */}

          <div className="module-spacer--medium"></div>
          <IconArrowNext label="全ての事例を見る" href="/samples/" />
        </div>
      </section>

      <section className="c-section c-bg-primary">
        <div className="c-section-wrapin p-grid__contact">
          <h2>お仕事のご依頼・ご相談</h2>
          <hr className="c-section__line" />
          <div className="module-spacer--medium"></div>
          <p>
            企業HPなどのWebサイト制作、チャットボット開発、WordPress導入・カスタマイズなどのお見積もり、ご相談はお気軽にご連絡ください。
            お客様だけでなく、エンドユーザーにも喜んでいただけるよう技術を提供します。
          </p>
          <div className="module-spacer--small"></div>
          <IconArrowNext label="お問い合わせ" href="/contact/" />
          {/* <Link href="/contact/">
          <a className="p-btn-round p-icon__arrow-next"  role="button">
            お問い合わせ
          </a>
          </Link> */}
          <div className="module-spacer--medium"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

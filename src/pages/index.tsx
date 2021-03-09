import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IconArrowNext } from "src/components/common/IconArrowNext";
import Spacer from "src/components/common/Spacer";
import { SampleSwiper } from "src/components/SampleSwiper";
import { samples } from "src/contents/samples";
import { Service, services } from "src/contents/services";
import { Layout } from "src/layout/layout";

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
        <title>Pandashark web | Top</title>
      </Head>

      <section>
        <div className="p-grid__view-first" data-label="first-view">
          <Image src="/img/view/first-view.webp" alt="Ocean" layout="fill" priority={true} />
          <div className="child">
            <div>
              <h2>Pandashark</h2>
              <p>Web Engineer</p>
              <IconArrowNext label="Contact" href="/contact/" />
            </div>
          </div>
          {/* <picture>
            <source type="image/webp" srcSet="/img/view/first-view.webp" />
            <img src="/img/view/first-view.jpg" />
          </picture> */}
          {/* <img src="/img/view/first-view.webp" alt="ocean" /> */}
        </div>
        {/* <div className="p-grid__view-first-img">
          <Image src={"/img/view/first-view.jpeg"} alt="sea coast in RJ" layout="fill" />
        </div> */}
      </section>

      <section>
        <Spacer size="md" />
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
          <Spacer size="sm" />
          <IconArrowNext label="事業内容" href="/about/#skills" />
          <Spacer size="md" />
          <div className="p-grid__list">{serviceItems}</div>
        </div>
      </section>

      <section>
        <Spacer size="md" />
      </section>

      <section className="c-section">
        <div className="c-section-wrapin">
          <h2 className="p-headline__top">Samples</h2>
          <hr className="c-section__line" />
          <Spacer size="sm" />
          <Spacer size="md" />

          {/* <SapmleSwiper samples={samples} /> */}
          <SampleSwiper samples={samples} />
          {/* <ImageSwiper samples={samples} /> */}

          <Spacer size="md" />
          <IconArrowNext label="全ての事例を見る" href="/samples/" />
        </div>
      </section>

      <section className="c-section c-bg-primary">
        <div className="c-section-wrapin p-grid__contact">
          <h2>お仕事のご依頼・ご相談</h2>
          <hr className="c-section__line" />
          <Spacer size="md" />
          <p>
            企業HPなどのWebサイト制作、チャットボット開発、WordPress導入・カスタマイズなどのお見積もり、ご相談はお気軽にご連絡ください。
            お客様だけでなく、エンドユーザーにも喜んでいただけるよう技術を提供します。
          </p>
          <Spacer size="sm" />
          <IconArrowNext label="お問い合わせ" href="/contact/" />
          <Spacer size="md" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;

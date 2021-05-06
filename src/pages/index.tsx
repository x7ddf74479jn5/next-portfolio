import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextArrowButton } from "src/components/common/NextArrowButton";
import SampleCarousel from "src/components/home/SampleCarousel";
import { Layout } from "src/components/layouts/Layout";
import Spacer from "src/components/layouts/Spacer";
import { samples } from "src/contents/samples";
import type { Service } from "src/contents/services";
import { services } from "src/contents/services";

import { configPage } from "../utils/page-configure";

type SlideAnimate = {
  class: string;
  dataAnimate: string;
};

const FirstView = () => {
  return (
    <section>
      <div className="p-grid__view-first" data-label="first-view">
        <Image src="/img/view/first-view.webp" alt="first-view" layout="fill" priority={true} />
        <div className="child">
          <div>
            <h2>Pandashark</h2>
            <p>Web Engineer</p>
            <NextArrowButton label="Contact" href="/contact/" onDark />
          </div>
        </div>
      </div>
    </section>
  );
};

const Vision = () => {
  return (
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
  );
};

const Services = () => {
  const slideInLeft: SlideAnimate = {
    class: "p-grid__list-item-floated animated slow slideInLeft",
    dataAnimate: "slideInLeft",
  };
  const slideInRight: SlideAnimate = {
    class: "p-grid__list-item-floated animated slow slideInRight",
    dataAnimate: "slideInRight",
  };
  return (
    <section className="c-section c-bg-primary">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Services</h2>
        <hr className="c-section__line" />
        <Spacer size="sm" />
        <NextArrowButton label="事業内容" href="/about/#skills" />
        <Spacer size="md" />
        <div className="p-grid__list">
          {services.map((service: Service, index: number) => {
            return (
              <article
                key={index}
                className={index % 2 === 0 ? slideInLeft.class : slideInRight.class}
                data-animate={index % 2 === 0 ? slideInLeft.dataAnimate : slideInRight.dataAnimate}
              >
                <h3>{service.title}</h3>
                <small>{service.caption}</small>
                <img className="p-media__thumb" src={service.img.src} alt={service.img.alt} />
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Samples = () => {
  return (
    <section className="c-section">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Samples</h2>
        <hr className="c-section__line" />
        <Spacer size="sm" />
        <Spacer size="md" />
        <SampleCarousel samples={samples} />
        <Spacer size="md" />
        <NextArrowButton label="全ての事例を見る" href="/samples/" />
      </div>
    </section>
  );
};

const Contact = () => {
  return (
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
        <NextArrowButton label="お問い合わせ" href="/contact/" />
        <Spacer size="md" />
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  const pageConfig = configPage("home");

  // const serviceItems: JSX.Element[] = services.map((service: Service, index: number) => {
  //   return (
  //     <article
  //       key={index}
  //       className={index % 2 === 0 ? slideInLeft.class : slideInRight.class}
  //       data-animate={index % 2 === 0 ? slideInLeft.dataAnimate : slideInRight.dataAnimate}
  //     >
  //       <h3>{service.title}</h3>
  //       <small>{service.caption}</small>
  //       {/* <Image layout="fill" className="p-media__thumb" src={service.img.src} alt={service.img.alt} /> */}
  //       <img className="p-media__thumb" src={service.img.src} alt={service.img.alt} />
  //       <p>{service.description}</p>
  //     </article>
  //   );
  // });

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <FirstView />
      <Spacer size="md" />
      <Vision />
      <Services />
      <Spacer size="md" />
      <Samples />
      <Contact />
    </Layout>
  );
};

export default Home;

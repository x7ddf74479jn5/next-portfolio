import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Spacer from "src/components/common/Spacer";
import { Layout } from "src/layout/layout";

import { AriaTitle } from "../../components/common/AriaTitle";
import { samples } from "../../contents/samples";

const Samples: NextPage = () => {
  const sampleItems = samples.map((sample, index) => {
    return (
      <li key={index}>
        <Link href={sample.href}>
          <a className="u-text__line-none">
            <div className="p-media__thumb">
              {/* <img src={sample.img.src} alt={sample.img.alt} /> */}
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
    );
  });

  return (
    <Layout>
      <Head>
        <title>Samples</title>
      </Head>
      <section>
        <Spacer size="md" />
      </section>
      <AriaTitle title="Samples" caption="制作事例" />

      <section>
        <Spacer size="md" />
      </section>

      <section className="c-section">
        <div className="c-section-wrapin-wide">
          <ul className="p-list__works">{sampleItems}</ul>
        </div>
      </section>
    </Layout>
  );
};

export default Samples;

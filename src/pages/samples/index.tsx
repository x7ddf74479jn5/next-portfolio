import type { NextPage } from "next";
import Head from "next/head";
import Spacer from "src/components/common/Spacer";
import SampleCardList from "src/components/samples/SampleCardList";
import { Layout } from "src/layouts/layout";
import { AriaTitle } from "../../components/common/AriaTitle";
import { samples } from "../../contents/samples";

const Samples: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Samples</title>
      </Head>
      <Spacer size="md" />
      <AriaTitle title="Samples" caption="制作事例" />
      <Spacer size="md" />
      <section className="c-section">
        <div className="c-section-wrapin-wide">
          <SampleCardList samples={samples} />
        </div>
      </section>
    </Layout>
  );
};

export default Samples;

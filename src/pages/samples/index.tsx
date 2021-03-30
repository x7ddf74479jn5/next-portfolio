import type { NextPage } from "next";
import Head from "next/head";
import SampleCardList from "src/components/samples/SampleCardList";
import { Layout } from "src/layouts/layout";
import { WrapInWideSection } from "src/layouts/Section";
import Spacer from "src/layouts/Spacer";
import { TitleArea } from "../../components/common/TitleArea";
import { samples } from "../../contents/samples";

const Samples: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Samples | Pandashark Web</title>
      </Head>
      <Spacer size="md" />
      <TitleArea title="Samples" caption="制作事例" />
      <Spacer size="md" />
      <WrapInWideSection>
        <SampleCardList samples={samples} />
      </WrapInWideSection>
    </Layout>
  );
};

export default Samples;

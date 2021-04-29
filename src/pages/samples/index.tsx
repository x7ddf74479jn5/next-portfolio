import type { NextPage } from "next";
import Head from "next/head";
import SampleCardList from "src/components/samples/SampleCardList";
import { Layout } from "src/components/layouts/Layout";
import { WrapInWideSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";

import { TitleArea } from "../../components/common/TitleArea";
import { samples } from "../../contents/samples";
import { configPage } from "../../utils/page-configure";

const Samples: NextPage = () => {
  const pageConfig = configPage("samples");
  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
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

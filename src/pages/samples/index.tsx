import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "src/components/layouts/Layout";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import SampleCardList from "src/components/samples/SampleCardList";

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
      {pageConfig.titleArea && <TitleArea {...pageConfig.titleArea} />}
      <Spacer size="md" />
      <WrapInSection wide>
        <SampleCardList samples={samples} />
      </WrapInSection>
    </Layout>
  );
};

export default Samples;

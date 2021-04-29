import type { NextPage } from "next";
import Head from "next/head";
import { TitleArea } from "src/components/common/TitleArea";
import { Layout } from "src/components/layouts/Layout";
import Spacer from "src/components/layouts/Spacer";

import { configPage } from "../utils/page-configure";

const Terms: NextPage = () => {
  const pageConfig = configPage("privacy");

  return (
    <Layout>
      <Head>
        <title> {pageConfig.title}</title>
      </Head>
      <Spacer size="md" />
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea?.caption} />}
    </Layout>
  );
};

export default Terms;

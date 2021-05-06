import type { NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import { Layout } from "src/components/layouts/Layout";
import SampleTemplate from "src/templates/SampleTemplate";

import { configPage } from "../../utils/page-configure";
import { selectSample } from "../../utils/sample-select";

const EC: NextPage = () => {
  const pageConfig = configPage("ec");
  const sample = selectSample("ec");

  if (!sample) {
    return <Error statusCode={500} />;
  }

  if (!pageConfig.titleArea) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <SampleTemplate titleArea={pageConfig.titleArea} sample={sample} />
    </Layout>
  );
};

export default EC;

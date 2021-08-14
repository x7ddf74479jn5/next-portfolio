import type { NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import { Layout } from "src/components/layouts/Layout";
import SampleTemplate from "src/templates/SampleTemplate";

import { configPage, selectSample } from "../../utils/page-configure";

const MyFavoriteGear: NextPage = () => {
  const pageConfig = configPage("myFavoriteGear");
  const sample = selectSample("myFavoriteGear");

  if (!sample || !pageConfig.titleArea) {
    return <Error statusCode={500} />;
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

export default MyFavoriteGear;

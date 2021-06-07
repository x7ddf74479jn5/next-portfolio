import type { NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import { Layout } from "src/components/layouts/Layout";
import SampleTemplate from "src/templates/SampleTemplate";

import { configPage } from "../../utils/page-configure";
import { selectSample } from "../../utils/page-configure";

const Chat: NextPage = () => {
  const pageConfig = configPage("chat");
  const sample = selectSample("chat");

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

export default Chat;

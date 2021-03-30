import type { NextPage } from "next";
import Head from "next/head";
import { TitleArea } from "src/components/common/TitleArea";
import { Layout } from "src/layouts/layout";
import Spacer from "src/layouts/Spacer";

const Terms: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms | Pandashark Web</title>
      </Head>
      <Spacer size="md" />
      <TitleArea title="Terms" caption="利用規約" />
    </Layout>
  );
};

export default Terms;

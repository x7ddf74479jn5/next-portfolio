import type { NextPage } from "next";
import Head from "next/head";
import { AriaTitle } from "src/components/common/AriaTitle";
import Spacer from "src/components/common/Spacer";
import { Layout } from "src/layouts/layout";

const Terms: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms | Pandashark Web</title>
      </Head>
      <Spacer size="md" />
      <AriaTitle title="Terms" caption="利用規約" />
    </Layout>
  );
};

export default Terms;

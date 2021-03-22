import type { NextPage } from "next";
import Head from "next/head";
import { AriaTitle } from "src/components/common/AriaTitle";
import { Layout } from "src/layouts/layout";
import Spacer from "src/layouts/Spacer";

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

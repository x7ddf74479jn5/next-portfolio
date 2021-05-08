import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "src/components/home/Contact";
import FirstView from "src/components/home/FirstView";
import Samples from "src/components/home/Samples";
import Services from "src/components/home/Services";
import Vision from "src/components/home/Vision";
import { Layout } from "src/components/layouts/Layout";
import Spacer from "src/components/layouts/Spacer";

import { configPage } from "../utils/page-configure";

const Home: NextPage = () => {
  const pageConfig = configPage("home");

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <FirstView />
      <Spacer size="md" />
      <Vision />
      <Services />
      <Spacer size="md" />
      <Samples />
      <Contact />
    </Layout>
  );
};

export default Home;

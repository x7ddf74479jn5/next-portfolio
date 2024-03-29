import type { NextPage } from "next";
import Head from "next/head";
import Career from "src/components/about/Career";
import Profile from "src/components/about/Profile";
import Skills from "src/components/about/Skills";
import Vision from "src/components/about/Vision";
import { Layout } from "src/components/layouts/Layout";
import { configPage } from "src/utils/page-configure";

import { TitleArea } from "../components/common/TitleArea";

const About: NextPage = () => {
  const pageConfig = configPage("about");

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea.caption} />}
      <Vision />
      <Profile />
      <Career />
      <Skills />
    </Layout>
  );
};

export default About;

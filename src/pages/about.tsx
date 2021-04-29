import type { NextPage } from "next";
import Head from "next/head";
import Career from "src/components/about/Career";
import Profile from "src/components/about/Profile";
import Skill from "src/components/about/Skill";
import Vision from "src/components/about/Vision";
import { Layout } from "src/components/layouts/Layout";
import Spacer from "src/components/layouts/Spacer";
import { configPage } from "src/utils/page-configure";

import { TitleArea } from "../components/common/TitleArea";

const About: NextPage = () => {
  const pageConfig = configPage("about");

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <Spacer size="md" />
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea.caption} />}
      <Vision />
      <Profile />
      <Career />
      <Skill />
    </Layout>
  );
};

export default About;

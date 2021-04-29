import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { TitleArea } from "src/components/common/TitleArea";
import { Layout } from "src/components/layouts/Layout";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import { configPage } from "src/utils/page-configure";

import ContactFormContainer from "../components/contact/ContactFormContainer";

const Contact: NextPage = () => {
  const pageConfig = configPage("contact");

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <Spacer size="md" />
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea?.caption} />}
      <WrapInSection>
        <ContactFormContainer />
      </WrapInSection>
    </Layout>
  );
};

export default Contact;

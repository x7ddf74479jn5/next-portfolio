import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { useForm } from "react-hook-form";
import { TitleArea } from "src/components/common/common/TitleArea";
import ContactFormBody from "src/components/contact/ContactFormBody";
import { Layout } from "src/layouts/layout";
import { WrapInSection } from "src/layouts/Section";
import Spacer from "src/layouts/Spacer";
import { convertCrlfToBr } from "src/utils/helper";
import { configPage } from "src/utils/page-configure";

import ContactFormContainer from "../components/contact/ContactFormContainer";

ContactFormBody;
ContactFormContainer;

type FormData = {
  name: string;
  email: string;
  category: "";
  description: string;
};

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

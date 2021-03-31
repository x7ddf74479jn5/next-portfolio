import { NextPage } from "next";
import Error from "next/error";
import Head from "next/head";
import { TitleArea } from "src/components/common/TitleArea";
import { Layout } from "src/layouts/layout";
import Spacer from "src/layouts/Spacer";
import SampleTemplate from "src/templates/SampleTemplate";
import { configPage } from "../../utils/page-configure";
import { selectSample } from "../../utils/sample-select";

const Chat: NextPage = () => {
  const pageConfig = configPage("chat");
  const sample = selectSample("chat");

  if (!sample) {
    return <Error statusCode={500} />;
  }

  return (
    <Layout>
      <Head>
        <title>{pageConfig.title}</title>
      </Head>
      <Spacer size="md" />
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea.caption} />}
      <SampleTemplate sample={sample} />
    </Layout>
  );
};

export default Chat;

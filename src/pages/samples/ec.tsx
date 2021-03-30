import { NextPage } from "next";
import Error from "next/error";
import { TitleArea } from "src/components/common/TitleArea";
import { Layout } from "src/layouts/layout";
import Spacer from "src/layouts/Spacer";
import SampleTemplate from "src/templates/SampleTemplate";
import { configPage } from "../../utils/page-configure";
import { selectSample } from "../../utils/sample-select";

const EC: NextPage = () => {
  const pageConfig = configPage("ec");
  const sample = selectSample("ec");

  if (!sample) {
    return <Error statusCode={500} />;
  }

  return (
    <Layout>
      <Spacer size="md" />
      {pageConfig.titleArea && <TitleArea title={pageConfig.titleArea.title} caption={pageConfig.titleArea.caption} />}
      <SampleTemplate sample={sample} />
    </Layout>
  );
};

export default EC;

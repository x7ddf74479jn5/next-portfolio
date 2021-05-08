import Headline from "src/components/home/Headline";
import HorizontalRule from "src/components/home/HorizontalRule";
import SampleCarousel from "src/components/home/SampleCarousel";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";

import { samples } from "../../contents/samples";
import { NextArrowButton } from "../common/NextArrowButton";

const Samples = () => {
  return (
    <WrapInSection>
      <Headline>Samples</Headline>
      <HorizontalRule />
      <Spacer size="sm" />
      <Spacer size="md" />
      <SampleCarousel samples={samples} />
      <Spacer size="md" />
      <NextArrowButton label="全ての事例を見る" href="/samples/" />
    </WrapInSection>
  );
};

export default Samples;

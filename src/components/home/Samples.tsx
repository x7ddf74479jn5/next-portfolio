import SampleCarousel from "src/components/home/SampleCarousel";
import Spacer from "src/components/layouts/Spacer";

import { samples } from "../../contents/samples";
import { NextArrowButton } from "../common/NextArrowButton";

const Samples = () => {
  return (
    <section className="c-section">
      <div className="c-section-wrapin">
        <h2 className="p-headline__top">Samples</h2>
        <hr className="c-section__line" />
        <Spacer size="sm" />
        <Spacer size="md" />
        <SampleCarousel samples={samples} />
        <Spacer size="md" />
        <NextArrowButton label="全ての事例を見る" href="/samples/" />
      </div>
    </section>
  );
};

export default Samples;

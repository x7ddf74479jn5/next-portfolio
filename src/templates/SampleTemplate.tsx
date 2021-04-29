import { GridRowLink, GridRowList, GridRowParagraph } from "src/components/samples/GridRow";
import { WrapInSection } from "src/components/layouts/Section";
import styles from "src/styles/components/samples/SampleGrid.module.scss";

import type { SampleDetail } from "../contents/samples";

type Props = {
  sample: SampleDetail;
};

const SampleTemplate: React.VFC<Props> = ({ sample }) => {
  return (
    <WrapInSection>
      <div className={styles.gridSamples}>
        <img src={sample.img} alt={sample.alt} />
        <GridRowParagraph header={"概要"} data={sample.summary} />
        <GridRowList header={"用途・目的"} data={sample.purposes} />
        <GridRowList header={"こだわり"} data={sample.points} />
        <GridRowParagraph header={"使用言語"} data={sample.langs} />
        <GridRowParagraph header={"技術"} data={sample.techs} />
        <GridRowLink header={"リンク"} data={sample.link} />
        {sample.note && <GridRowParagraph header={"備考"} data={sample.note} />}
      </div>
    </WrapInSection>
  );
};

export default SampleTemplate;

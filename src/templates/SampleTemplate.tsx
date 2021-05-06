import Image from "next/image";
import React from "react";
import { TitleArea } from "src/components/common/TitleArea";
import { WrapInSection } from "src/components/layouts/Section";
import Spacer from "src/components/layouts/Spacer";
import { GridRowLink, GridRowList, GridRowParagraph } from "src/components/samples/GridRow";
import styles from "src/styles/components/samples/SampleGrid.module.scss";
import type { PageConfig } from "src/utils/page-config";

import type { SampleDetail } from "../contents/samples";

type Props = {
  sample: SampleDetail;
} & Required<Pick<PageConfig, "titleArea">>;

const SampleTemplate: React.VFC<Props> = ({ sample, titleArea }) => {
  return (
    <>
      <Spacer size="md" />
      {titleArea && <TitleArea title={titleArea.title} caption={titleArea.caption} />}
      <WrapInSection>
        <div className={styles.gridSamples}>
          <div className={styles.imageWrapper}>
            <Image src={sample.img} alt={sample.alt} width={768} height={443} className={styles.sampleImage} />
          </div>
          <GridRowParagraph header={"概要"} data={sample.summary} />
          <GridRowList header={"用途・目的"} data={sample.purposes} />
          <GridRowList header={"こだわり"} data={sample.points} />
          <GridRowParagraph header={"使用言語"} data={sample.langs} />
          <GridRowParagraph header={"技術"} data={sample.techs} />
          <GridRowLink header={"リンク"} data={sample.link} />
          {sample.note && <GridRowParagraph header={"備考"} data={sample.note} />}
        </div>
      </WrapInSection>
    </>
  );
};

export default SampleTemplate;

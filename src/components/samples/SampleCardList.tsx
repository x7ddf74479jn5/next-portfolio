import SampleCard from "src/components/samples/SampleCard";
import type { Sample } from "src/contents/samples";
import styles from "src/styles/components/samples/SampleCardList.module.scss";

type SampleCardListProps = {
  samples: Sample[];
};

const SampleCardList: React.VFC<SampleCardListProps> = ({ samples }) => {
  return (
    <ul className={styles.listSamples}>
      {samples.map((sample, index) => {
        return (
          <li key={index}>
            <SampleCard sample={sample} />
          </li>
        );
      })}
    </ul>
  );
};

export default SampleCardList;

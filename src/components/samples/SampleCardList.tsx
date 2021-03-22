import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Image from "next/image";
import Link from "next/link";
import { Sample } from "src/contents/samples";
import styles from "src/styles/components/samples/SampleCardList.module.scss";

type SampleCardProps = {
  sample: Sample;
};

const SampleCard: React.VFC<SampleCardProps> = ({ sample }) => {
  return (
    <li>
      <Link href={sample.href}>
        <a className={styles.testLineNone}>
          <div className={styles.mediaThumb}>
            <Image src={sample.img.src} alt={sample.img.alt} layout="fill" />
          </div>
          <div className={styles.listSamplesDetail}>
            <h3 className={styles.title}>{sample.title}</h3>
            <p className={styles.category}>{sample.category}</p>
            <div className={styles.icon}>
              <DoubleArrowIcon />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

type SampleCardListProps = {
  samples: Sample[];
};

const SampleCardList: React.VFC<SampleCardListProps> = ({ samples }) => {
  return (
    <ul className={styles.listSamples}>
      {samples.map((sample, index) => {
        return <SampleCard sample={sample} key={index} />;
      })}
    </ul>
  );
};

export default SampleCardList;
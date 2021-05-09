import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Image from "next/image";
import Link from "next/link";
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
            <Link href={sample.link}>
              <a className={styles.testLineNone}>
                <div className={styles.mediaThumb}>
                  <Image src={sample.imgSrc} alt={sample.imgAlt} layout="fill" />
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
      })}
    </ul>
  );
};

export default SampleCardList;

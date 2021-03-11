import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Image from "next/image";
import Link from "next/link";
import { Sample } from "src/contents/samples";
import styles from "./SampleCard.module.scss";

type Props = {
  sample: Sample;
};

const SampleCard: React.VFC<Props> = ({ sample }) => {
  return (
    <Link href={sample.href}>
      <a className={styles.test__lineNone}>
        <div className={styles.media__thumb}>
          <Image src={sample.img.src} alt={sample.img.alt} layout="fill" />
        </div>
        <div className={styles.list__works__detail}>
          <h3 className={"title"}>{sample.title}</h3>
          <p className="category">{sample.category}</p>
          {/* <span className="icon"></span> */}
          <span className="icon">
            <DoubleArrowIcon />
          </span>
        </div>
      </a>
    </Link>
  );
};

export default SampleCard;

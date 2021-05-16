import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";
import styles from "src/styles/components/header/HeaderLink.module.scss";

import type { LinkType } from "../../types/utils/index";

const TwitterLInk: React.VFC<LinkType> = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.twitter}>
        <TwitterIcon />
        <span>Twitter</span>
      </a>
    </Link>
  );
};

export default TwitterLInk;

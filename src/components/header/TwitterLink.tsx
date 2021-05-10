import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "next/link";
import styles from "src/styles/components/header/HeaderLink.module.scss";
import { externalLinks } from "src/utils/paths";

import type { LinkType } from "../../types/utils/index";

const TwitterLInk: React.VFC<LinkType> = () => {
  return (
    <Link href={externalLinks.twitter}>
      <a className={styles.twitter} target="_self">
        <TwitterIcon />
        <span>Twitter</span>
      </a>
    </Link>
  );
};

export default TwitterLInk;

// $brand_twitter: #55acee;

import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "next/link";
import styles from "src/styles/components/header/HeaderLink.module.scss";
import { externalLinks } from "src/utils/paths";

import type { LinkType } from "../../types/utils/index";

const GithubLink: React.VFC<LinkType> = () => {
  return (
    <Link href={externalLinks.github}>
      <a className={styles.github} target="_self">
        <GitHubIcon />
        <span>Github</span>
      </a>
    </Link>
  );
};

export default GithubLink;

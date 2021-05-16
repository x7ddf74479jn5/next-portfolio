import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "next/link";
import styles from "src/styles/components/header/HeaderLink.module.scss";

import type { LinkType } from "../../types/utils/index";

const GithubLink: React.VFC<LinkType> = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.github}>
        <GitHubIcon />
        <span>Github</span>
      </a>
    </Link>
  );
};

export default GithubLink;

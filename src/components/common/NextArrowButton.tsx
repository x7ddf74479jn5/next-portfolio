import clsx from "clsx";
import Link from "next/link";
import styles from "src/styles/components/common/NextArrowButton.module.scss";
import type { LinkType } from "src/types/utils";

export type Props = LinkType & {
  label?: string;
  href: string;
  onDark?: boolean;
};

export const NextArrowButton: React.FC<Props> = ({ children, onDark, label, href }) => {
  return (
    <Link href={href}>
      <a className={clsx(onDark ? styles.btnRoundOnDark : styles.btnRound, styles.iconArrowNext)} role="button">
        {children || label}
      </a>
    </Link>
  );
};

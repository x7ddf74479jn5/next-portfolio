import Link from "next/link";
import styles from "src/styles/components/header/HeaderLink.module.scss";

type Item = {
  label: string;
  href: string;
  icon?: {
    src: string;
    alt: string;
  };
};

type Prop = {
  item: Item;
};
const HeaderLinkItem: React.VFC<Prop> = ({ item }) => {
  return "icon" in item ? (
    <Link href={item.href}>
      <a className={styles.linkItem}>
        <img src={item.icon?.src} alt={item.icon?.alt} />
        <span>{item.label}</span>
      </a>
    </Link>
  ) : (
    <Link href={item.href}>
      <a className={styles.linkItem}>{item.label}</a>
    </Link>
  );
};

export default HeaderLinkItem;

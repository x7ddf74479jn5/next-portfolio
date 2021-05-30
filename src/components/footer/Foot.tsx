import Link from "next/link";
import type { FootItem } from "src/components/footer/Footer";
import styles from "src/styles/components/footer/Foot.module.scss";

type Props = { footItems: FootItem[] };

const Foot: React.VFC<Props> = ({ footItems }) => {
  return (
    <section className={styles.foot}>
      <ul>
        {footItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Foot;

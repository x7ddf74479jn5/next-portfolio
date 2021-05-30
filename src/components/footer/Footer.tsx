import PandasharkLogo from "src/components/common/PandasharkLogo";
import Foot from "src/components/footer/Foot";
import { FooterMenus } from "src/components/footer/FooterMenus";
import styles from "src/styles/components/footer/Footer.module.scss";

export const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <section className={styles.logoArea}>
            <div className={styles.productLogo}>
              <PandasharkLogo width={128} height={64} />
            </div>
          </section>
          <FooterMenus />
          <section className={styles.foot}>
            <ul>
              <li>
                <Foot href="/terms/" label="利用規約" />
              </li>
              <li>
                <Foot href="/privacy/" label="プライバシーポリシー" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

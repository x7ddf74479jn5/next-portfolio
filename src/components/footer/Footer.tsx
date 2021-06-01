import PandasharkLogo from "src/components/common/PandasharkLogo";
import Foot from "src/components/footer/Foot";
import { FooterMenus } from "src/components/footer/FooterMenus";
import styles from "src/styles/components/footer/Footer.module.scss";

import { internalLinks } from "../../utils/paths";

export type FootItem = {
  id: string;
  href: string;
  label: string;
};

const footItems: FootItem[] = [
  { id: "terms", href: internalLinks.terms, label: "利用規約" },
  { id: "privacy", href: internalLinks.privacy, label: "プライバシーポリシー" },
];

export const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.wrapper}>
            <section className={styles.logoArea}>
              <div className={styles.productLogo}>
                <PandasharkLogo width={128} height={64} />
              </div>
            </section>
            <FooterMenus />
          </div>
          <Foot footItems={footItems} />
        </div>
      </div>
    </footer>
  );
};

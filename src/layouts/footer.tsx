// import Image from "next/image";
import Link from "next/link";
import PandasharkLogo from "src/components/common/common/PandasharkLogo";
import { FooterMenus } from "src/components/common/footer/FooterMenus";
import styles from "src/styles/layouts/Footer.module.scss";
// import styles from "src/styles/components/common/PandasharkLogo.module.scss";

export const Footer: React.FC = () => {
  const handle = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {};

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        {/* <div className="main c-section"> */}
        <div className={styles.mainInner}>
          <section className={styles.logoArea}>
            <div className={styles.productLogo}>
              <PandasharkLogo width={128} height={64} />
            </div>
            {/* <h1 className={styles.productlogo}>
              <Link href="/">
                <a target="_self">
                  <Image
                    width={128}
                    height={64}
                    alt="パンダシャーク"
                    className="logo-img"
                    src="/img/icons/pandashark_logo_rectangle.png"
                  />
                </a>
              </Link>
            </h1> */}

            {/* <a href="/" target="_self">
                <img alt="パンダシャーク" className="logo-img" src="/img/icons/pandashark_logo.png" />
              </a> */}
            {/* <a className="p-btn-round p-icon__arrow-next" href="/community/" target="_self" role="button">
              Webを学びたい？
            </a> */}
          </section>
          <FooterMenus />

          <section className={styles.foot}>
            <ul>
              <Link href="/terms/">
                <a>
                  <li>利用規約</li>
                </a>
              </Link>
              <Link href="/privacy/">
                <a>
                  <li>プライバシーポリシー</li>
                </a>
              </Link>

              {/* <a href="/terms/"><li>利用規約</li></a>
            <a href="/privacy/"><li>プライバシーポリシー</li></a> */}
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

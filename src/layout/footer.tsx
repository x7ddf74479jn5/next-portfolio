import Image from "next/image";
import Link from "next/link";
import { FooterMenus } from "src/components/FooterMenus";

export const Footer: React.FC = () => {
  // <footer>
  //   <small lang="en">@ 2020 example.com</small>
  // </footer>

  const handle = (event: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    console.log(accordionModule.toggleMenu("accordion-about"));
    console.log(accordionModule.toggleMenu("accordion-works"));
  };

  return (
    <footer className="footer">
      <div className="main c-section">
        <div className="main-inner">
          <section className="logo-area">
            <h1 className="product-logo">
              <Link href="/">
                <a target="_self">
                  {/* <Image height={} width={} alt="パンダシャーク" className="logo-img" src="/img/icons/pandashark_logo.png" /> */}
                  <img alt="パンダシャーク" className="logo-img" src="/img/icons/pandashark_logo.png" />
                </a>
              </Link>
              {/* <a href="/" target="_self">
                <img alt="パンダシャーク" className="logo-img" src="/img/icons/pandashark_logo.png" />
              </a> */}
            </h1>
            {/* <a className="p-btn-round p-icon__arrow-next" href="/community/" target="_self" role="button">
              Webを学びたい？
            </a> */}
          </section>
          <FooterMenus />

          {/* <section className="sitemap">
            <ul className="footer-links">
              <li className="p-accordion" id="footer-sitemap-about">
                <h4 role="button" onClick={handle}>
                  自己紹介
                </h4>
                <input type="checkbox" id="accordion-about" />
                <label htmlFor="accordion-about"></label>
                <ul className="p-accordion__items">
                  <a href="/about/#vision" target="_self">
                    <li>Vision</li>
                  </a>
                  <a href="/about/#profile" target="_self">
                    <li>Profile</li>
                  </a>
                  <a href="/about/#career" target="_self">
                    <li>Career</li>
                  </a>
                  <a href="/about/#skills" target="_self">
                    <li>Skills</li>
                  </a>
                </ul>
              </li>
              <li className="p-accordion" id="footer-sitemap-works">
                <h4 role="button" onClick={handle}>
                  制作事例
                </h4>
                <input type="checkbox" id="accordion-works" />
                <label htmlFor="accordion-works"></label>
                <ul className="p-accordion__items">
                  <a href="/sample/portfolio/" target="_self">
                    <li>ポートフォリオサイト</li>
                  </a>
                  <a href="/sample/ec/" target="_self">
                    <li>ECサイト</li>
                  </a>
                  <a href="/sample/chat/" target="_self">
                    <li>Chat App</li>
                  </a>
                </ul>
              </li>
              <li className="p-accordion" id="footer-sitemap-links">
                <h4 role="button" onClick={handle}>
                  リンク集
                </h4>
                <input type="checkbox" id="accordion-links" />
                <label htmlFor="accordion-links"></label>
                <ul className="p-accordion__items">
                  <a href="#" target="_self">
                    <li>Blog</li>
                  </a>
                  <a href="#" target="_self">
                    <li>Twitter</li>
                  </a>
                  <a href="#" target="_blank">
                    <li>YouTube</li>
                  </a>
                  <a href="#" target="_blank">
                    <li>Qiita</li>
                  </a>
                  <a href="#" target="_blank">
                    <li>GitHub</li>
                  </a>
                </ul>
              </li>
            </ul>
          </section> */}

          <section className="foot">
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

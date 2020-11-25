import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HeaderMenus } from "src/components/HeaderMenus";
import { images } from "src/static/links";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

type HeaderProps = {
  open: boolean;
  toggleNav(): void;
  closeNav(e?: React.KeyboardEvent<HTMLDivElement>): void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  // const [open, setOpen] = React.useState(false);
  // const classes= {
  //   navOpen:"nav-open"
  // }
  // const toggleNav = () => {
  //   setOpen((prevState) => !prevState);
  // };
  // const closeNav = () => {
  //   setOpen(false);
  // };

  const navOpen = props.open ? "nav-open" : "";
  return (
    <div className={navOpen}>
      <header className={navOpen + " fixed-nav " + "l-header "}>
        {/* <h1>Title</h1>
    <nav>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a style={{ display: "inline-block", padding: 12 }}>{item.label}</a>
        </Link>
      ))}
    </nav> */}

        <div className="l-header-inner">
          <h1 className="l-product-logo">
            <Link href="/">
              <a target="_self" aria-label="パンダシャーク">
                {/* <img alt="パンダシャーク" src="/img/icons/pandashark_logo.png" /> */}
                <Image width={128} height={64} alt="パンダシャーク" src={images.pandashark_rec} />
              </a>
            </Link>
          </h1>
          {/* <!-- Navigation toggle button for Smartphone--> */}
          <button
            className={navOpen + " outside " + "nav-toggle-button "}
            data-about-nav-toggle
            aria-label="ナビゲーション メニューの切り替え"
            id="nav-toggle-button"
            onClick={() => props.toggleNav()}
          >
            <img
              alt="ナビゲーション メニューを開く"
              className={navOpen + " menu-bars "}
              src="/img/icons/menu.png"
              height="24"
              width="24"
            />
            <img
              alt="ナビゲーション メニューを閉じる"
              className={navOpen + " menu-close "}
              src="/img/icons/close.png"
              height="24"
              width="24"
            />
          </button>
          <HeaderMenus />

          {/* <nav className="l-header__nav-top">
            <h1 className="l-product-logo">
              <a href="/" target="_self">
                <img alt="パンダシャーク" src="/img/icons/logo.png" />
              </a>
            </h1>
            <ul>
              <li>
                <a href="/about/" target="_self">
                  About
                </a>
              </li>
              <li>
                <a href="/samples/" target="_self">
                  Samples
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact/" target="_self">
                  Contact
                </a>
              </li>
              <li>
                <a className="sns" href="/" target="_self">
                  <img src="/img/icons/twitter_logo.png" alt="twitter" />
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </nav>
           */}
        </div>
        <div>
          <div
            className="black-bg"
            role="button"
            id="js-black-bg"
            onKeyDown={(e) => props.closeNav(e)}
            onClick={() => props.closeNav()}
          ></div>
        </div>
      </header>
    </div>
  );
};

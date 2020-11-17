import Link from "next/link";
import * as React from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  // const classes= {
  //   navOpen:"nav-open"
  // }
  const toggleNav = () => {
    setOpen((prevState) => !prevState);
  };
  const closeNav = () => {
    setOpen(false);
  };

  const navOpen = open ? "nav-open" : "";
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
            <a href="/" target="_self" aria-label="パンダシャーク">
              <img alt="パンダシャーク" src="/img/icons/pandashark_logo.png" />
            </a>
          </h1>
          {/* <!-- Navigation toggle button for Smartphone--> */}
          <button
            className={navOpen + " outside " + "nav-toggle-button "}
            data-about-nav-toggle
            aria-label="ナビゲーション メニューの切り替え"
            id="nav-toggle-button"
            onClick={() => toggleNav()}
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
          <nav className="l-header__nav-top">
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
              {/* <li>
                <a className="sns" href="#" target="_self">
                  <img src="/img/icons/youtube_logo.png" />
                  <span>YouTubeチャンネル</span>
                </a>
              </li> */}
            </ul>
          </nav>
          {/* <button>
          <div className="black-bg" role="button" id="js-black-bg" onClick={() => closeNav()}></div>
          </button> */}
        </div>
      </header>
    </div>
  );
};

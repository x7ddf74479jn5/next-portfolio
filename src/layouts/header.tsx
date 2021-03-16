import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { HeaderMenus } from "src/components/common/header/HeaderMenus";
import { images } from "src/paths/links";

type HeaderProps = {
  open: boolean;
  isDialogOpen: boolean;
  toggleNav(): void;
  closeNav(e?: React.KeyboardEvent<HTMLDivElement>): void;
  closeDialog(): void;
  openDialog(e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
};

export const Header: React.VFC<HeaderProps> = ({
  open,
  isDialogOpen,
  toggleNav,
  closeNav,
  closeDialog,
  openDialog,
}) => {
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

  const navOpen = open ? "nav-open" : "";
  return (
    <div className={navOpen}>
      <header className={navOpen + " fixed-nav " + "l-header "}>
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
            onClick={() => {
              return toggleNav();
            }}
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
          <HeaderMenus closeNav={closeNav} closeDialog={closeDialog} openDialog={openDialog} />
        </div>
        <div>
          <div
            className="black-bg"
            role="button"
            id="js-black-bg"
            onKeyDown={(e) => {
              return closeNav(e);
            }}
            onClick={() => {
              return closeNav();
            }}
          ></div>
        </div>
      </header>
    </div>
  );
};

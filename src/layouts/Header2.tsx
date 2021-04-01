import * as React from "react";
import { HeaderMenus } from "src/components/common/header/HeaderMenus";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import styles from "src/styles/components/common/header/Header.module.scss";

type HeaderProps = {
  open: boolean;
  isDialogOpen: boolean;
  toggleNav(): void;
  closeNav(e?: React.KeyboardEvent<HTMLDivElement>): void;
  closeDialog(): void;
  openDialog(e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
};

type Props = {
  isOpen: boolean;
  toggleNav(): void;
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>
};

const NavToggleButton: React.VFC<Props> = ({ isOpen, toggleNav }) => {
  /* <!-- Navigation toggle button for Smartphone--> */

  const navToggleButtonStyle = isOpen ? styles.navToggleButtonOpen : styles.navToggleButton;
  const navImageOpenStyle = isOpen ? styles.menuBarsHide : styles.menuBarsShow;
  const navImageCloseStyle = isOpen ? styles.menuBarsShow : styles.menuBarsHide;

  return (
    <button
      className={navToggleButtonStyle}
      data-about-nav-toggle
      aria-label="ナビゲーション メニューの切り替え"
      id="nav-toggle-button"
      onClick={() => {
        return toggleNav();
      }}
    >
      <img
        alt="ナビゲーション メニューを開く"
        className={navImageOpenStyle}
        src="/img/icons/menu.png"
        height="24"
        width="24"
      />
      <img
        alt="ナビゲーション メニューを閉じる"
        className={navImageCloseStyle}
        src="/img/icons/close.png"
        height="24"
        width="24"
      />
    </button>
  );
};

export const Header: React.VFC = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isDialogShow, setIsDialogShow] = React.useState<boolean>(false);
  const mounted = React.useRef<boolean>(false);

  // ダイアログを開く
  const openDialog = React.useCallback(() => {
    if (mounted.current) {
      // setIsDialogShow(true);
      setIsDialogOpen(true);

      console.log("mouted");
    } else {
      setIsDialogOpen(true);
      setIsDialogShow(true);
      mounted.current = true;
      console.log("new mouted");
    }
  }, [mounted]);
  console.log(mounted.current);

  const closeDialog = React.useCallback(() => {
    // setIsDialogShow(false);
    setIsDialogOpen(false);
  }, [setIsDialogShow]);

  const navOpen = isOpen ? "nav-open" : "";
  const navToggleButtonStyle = isOpen ? styles.navToggleButtonOpen : styles.navToggleButton;
  const navImageOpenStyle = isOpen ? styles.menuBarsHide : styles.menuBarsShow;
  const navImageCloseStyle = isOpen ? styles.menuBarsShow : styles.menuBarsHide;

  return (
    <div className="">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.productLogo}>
            <PandasharkLogo width={128} height={64} />
          </div>
          <NavToggleButton isOpen={isOpen} toggleNav={toggleNav} />

          <HeaderMenus closeNav={closeNav} closeDialog={closeDialog} isOpen={isOpen} openDialog={openDialog} />
        </div>
        <div>
          <div
            className="black-bg"
            role="button"
            id="js-black-bg"
            onKeyDown={(e) => {
              return closeNav();
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

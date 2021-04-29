import * as React from "react";
import PandasharkLogo from "src/components/common/common/PandasharkLogo";
import { HeaderMenus } from "src/components/common/header/HeaderMenus";
import Backdrop from "src/components/common/modal/Backdrop";
import styles from "src/styles/components/common/header/Header.module.scss";

type Props = {
  isOpen: boolean;
  toggleNav(): void;
};

const NavToggleButton: React.VFC<Props> = ({ isOpen, toggleNav }) => {
  /* <!-- Navigation toggle button for Smartphone--> */

  const navToggleButtonStyle = isOpen ? styles.navToggleButtonOpen : styles.navToggleButton;

  return (
    <button
      className={navToggleButtonStyle}
      data-about-nav-toggle
      aria-label="ナビゲーション メニューの切り替え"
      id="nav-toggle-button"
      onClick={() => {return toggleNav()}}
    >
      {isOpen ? (
        <img alt="ナビゲーション メニューを閉じる" src="/img/icons/close.png" height="24" width="24" />
      ) : (
        <img alt="ナビゲーション メニューを開く" src="/img/icons/menu.png" height="24" width="24" />
      )}
    </button>
  );
};

export const Header: React.VFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = React.useCallback(() => {
    setIsOpen((prevState) => {return !prevState});
  }, []);
  const closeNav = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.productLogo}>
          <PandasharkLogo width={128} height={64} />
        </div>
        <NavToggleButton isOpen={isOpen} toggleNav={toggleNav} />

        <HeaderMenus closeNav={closeNav} isOpen={isOpen} />
      </div>
      {isOpen && <Backdrop handleClick={closeNav} />}
    </header>
  );
};

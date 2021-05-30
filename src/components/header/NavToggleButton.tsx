import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "src/styles/components/header/HeaderButton.module.scss";
import type { ButtonType } from "src/types/utils";

type Props = ButtonType & {
  isOpen: boolean;
};

const NavToggleButton: React.VFC<Props> = ({ isOpen, onClick }) => {
  /* <!-- Navigation toggle button for Smartphone--> */

  const navToggleButtonStyle = isOpen ? styles.navToggleButtonOpen : styles.navToggleButton;

  return (
    <button
      className={navToggleButtonStyle}
      data-about-nav-toggle
      aria-label="ナビゲーション メニューの切り替え"
      id="nav-toggle-button"
      onClick={onClick}
    >
      {isOpen ? (
        <CloseIcon aria-label="ナビゲーション メニューを閉じる" />
      ) : (
        <MenuIcon aria-label='ナビゲーション メニューを開く"' />
      )}
    </button>
  );
};

export default NavToggleButton;

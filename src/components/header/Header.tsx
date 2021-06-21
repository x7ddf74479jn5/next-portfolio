import * as React from "react";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import { HeaderMenus } from "src/components/header/HeaderMenus";
import NavToggleButton from "src/components/header/NavToggleButton";
import Backdrop from "src/components/modal/Backdrop";
import useClickAway from "src/hooks/useClickAway";
import { useModalState } from "src/hooks/useModalState";
import styles from "src/styles/components/header/Header.module.scss";

export const Header: React.VFC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);
  const { isModalOpen } = useModalState();

  const toggleNav = React.useCallback(() => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }, []);
  const closeNav = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickAway(ref, closeNav);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner} ref={ref}>
        <h1 className={styles.productLogo}>
          <PandasharkLogo width={128} height={64} />
        </h1>
        {!isModalOpen && <NavToggleButton isOpen={isOpen} onClick={toggleNav} />}
        <HeaderMenus closeNav={closeNav} isOpen={isOpen} />
      </div>
      {isOpen && <Backdrop />}
    </header>
  );
};

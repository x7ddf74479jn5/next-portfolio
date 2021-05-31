import { useCallback } from "react";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import HeaderLinkItem from "src/components/header/HeaderLinkItem";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import styles from "src/styles/components/header/HeaderMenus.module.scss";
import { icons } from "src/utils/images";
import { externalLinks, internalLinks } from "src/utils/paths";

import HeaderButtonItem from "./HeaderButtonItem";

const headerLinkItem = [
  { label: "About", href: internalLinks.about },
  { label: "Samples", href: internalLinks.samples },
  { label: "Contact", href: internalLinks.contact },
  { label: "Twitter", href: externalLinks.twitter, icon: { src: icons.twitter.path, alt: icons.twitter.alt } },
  { label: "GitHub", href: externalLinks.github, icon: { src: icons.github.path, alt: icons.github.alt } },
];

type HeaderMenusProps = {
  isOpen: boolean;
  closeNav(): void;
};

export const HeaderMenus: React.FC<HeaderMenusProps> = ({ isOpen, closeNav }) => {
  const { openModal } = useModalDispatch();
  const handleChatBotButton = useCallback(
    () => {
      openModal("DRAWER");
      closeNav();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const logoStyle = isOpen ? styles.productLogoOpen : styles.productLogo;
  const navTopStyle = isOpen ? styles.headerNavTopOpen : styles.headerNavTop;

  return (
    <nav className={navTopStyle}>
      <h1 className={logoStyle}>
        <PandasharkLogo height={40} width={80} />
      </h1>
      <ul>
        {headerLinkItem.map((item, index) => {
          return (
            <li key={index}>
              <HeaderLinkItem item={item} />
            </li>
          );
        })}
        <li>
          <HeaderButtonItem label="Chat Bot" onClick={handleChatBotButton} icon={icons.chatBot} />
        </li>
      </ul>
    </nav>
  );
};

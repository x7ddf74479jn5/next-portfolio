import Link from "next/link";
import { useCallback } from "react";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import GithubLink from "src/components/header/GithubLink";
import TwitterLink from "src/components/header/TwitterLink";
import { useModalDispatch } from "src/hooks/useModalDispatch";
import styles from "src/styles/components/header/HeaderMenus.module.scss";
import { externalLinks, internalLinks } from "src/utils/paths";

import ChatbotButton from "./ChatbotButton";

type InnerLinkItem = {
  href: string;
  label: string;
};

const innerLinkItems: InnerLinkItem[] = [
  { label: "About", href: internalLinks.about },
  { label: "Samples", href: internalLinks.samples },
  { label: "Contact", href: internalLinks.contact },
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
        {innerLinkItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <TwitterLink href={externalLinks.twitter} />
        </li>
        <li>
          <GithubLink href={externalLinks.github} />
        </li>
        <li>
          <ChatbotButton onClick={handleChatBotButton} />
        </li>
      </ul>
    </nav>
  );
};

import Link from "next/link";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import GithubLink from "src/components/header/GithubLink";
import TwitterLink from "src/components/header/TwitterLink";
import styles from "src/styles/components/header/HeaderMenus.module.scss";
import { internalLinks } from "src/utils/paths";

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

type LinkItemProp = {
  item: InnerLinkItem;
};

const LinkItem: React.VFC<LinkItemProp> = ({ item }) => {
  return (
    <Link href={item.href}>
      <a target="_self">{item.label}</a>
    </Link>
  );
};

type HeaderMenusProps = {
  isOpen: boolean;
  closeNav(): void;
};

export const HeaderMenus: React.FC<HeaderMenusProps> = ({ isOpen, closeNav }) => {
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
              <LinkItem item={item} />
            </li>
          );
        })}

        <li>
          <TwitterLink />
        </li>
        <li>
          <GithubLink />
        </li>
        <li>
          <ChatbotButton onClick={closeNav} />
        </li>
      </ul>
    </nav>
  );
};

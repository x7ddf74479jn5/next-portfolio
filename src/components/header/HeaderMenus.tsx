import Link from "next/link";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import styles from "src/styles/components/header/HeaderMenus.module.scss";
import { images } from "src/utils/images";
import { externalLinks, links } from "src/utils/paths";

import { useModalDispatch } from "../../hooks/useModalDispatch";

type ItemBase = {
  label: string;
  icon?: { src: string; alt: string };
};

type LinkItem = ItemBase & {
  href: string;
};

type HeaderMenuItem = LinkItem;
// type HeaderMenuItem = LinkItem | ButtonItem;
// type HeaderMenuItem = NoImageItem | WithImageItem;

const headerMenuItems: HeaderMenuItem[] = [
  { label: "About", href: links.about },
  { label: "Samples", href: links.samples },
  { label: "Contact", href: links.contact },
  { label: "Github", href: externalLinks.github },
  {
    label: "Twitter",
    href: externalLinks.twitter,
    icon: { src: images.twitter.path, alt: images.twitter.alt },
  },
  { label: "Chat bot", href: links.chat, icon: { src: images.robot.path, alt: images.robot.alt } },
];

const linkItems: LinkItem[] = [
  { label: "About", href: links.about },
  { label: "Samples", href: links.samples },
  { label: "Contact", href: links.contact },
  { label: "Github", href: externalLinks.github },
  {
    label: "Twitter",
    href: externalLinks.twitter,
    icon: { src: images.twitter.path, alt: images.twitter.alt },
  },
  // { label: "Chat bot", href: links.chat, icon: { src: images.robot.path, alt: images.robot.alt } },
];
const buttonItems = [
  { type: "chat-bot", label: "Chat bot", href: links.chat, icon: { src: images.robot.path, alt: images.robot.alt } },
];

type ChatButtonProps = {
  closeNav: () => void;
};

const ChatbotButton: React.VFC<ChatButtonProps> = ({ closeNav }) => {
  const { openModal } = useModalDispatch();
  const item = buttonItems.find((i) => {
    return i.type === "chat-bot";
  });
  if (!item) return null;
  const handleClick = () => {
    closeNav();
    openModal("DRAWER");
  };
  return (
    <li>
      <button
        onClick={() => {
          return handleClick();
        }}
      >
        {item.icon && <img src={item.icon.src} alt={item.icon.alt} />}
        <span>{item.label}</span>
      </button>
    </li>
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
        {linkItems.map((item, index) => {
          return !("icon" in item) ? (
            <li key={index}>
              <Link href={item.href}>
                <a target="_self">{item.label}</a>
              </Link>
            </li>
          ) : (
            <li key={index}>
              <Link href={item.href}>
                <a className={styles.sns} target="_self">
                  <img src={item.icon?.src} alt={item.icon?.alt} />
                  <span>{item.label}</span>
                </a>
              </Link>
            </li>
          );
        })}
        <ChatbotButton closeNav={closeNav} />
      </ul>
    </nav>
  );
};

import Link from "next/link";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import styles from "src/styles/components/common/header/HeaderMenus.module.scss";
import { images } from "src/utils/images";
import { externalLinks, links } from "src/utils/paths";

type NoImageItem = {
  label: string;
  href: string;
};

type WithImageItem = {
  label: string;
  href: string;
  icon: { src: string; alt: string };
};
type HeaderMenuItem = NoImageItem | WithImageItem;

const headerMenuItems: HeaderMenuItem[] = [
  { label: "About", href: links.about },
  { label: "Samples", href: links.samples },
  { label: "Contact", href: links.contact },
  { label: "Github", href: externalLinks.github },
  { label: "Twitter", href: externalLinks.twitter, icon: { src: images.twitter.path, alt: images.twitter.alt } },
  { label: "Chat bot", href: links.chat, icon: { src: images.robot.path, alt: images.robot.alt } },
];

type ListItemProps = {
  items: HeaderMenuItem[];
};

const ListItem: React.VFC<ListItemProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
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
                <img src={item.icon.src} alt={item.icon.alt} />
                <span>{item.label}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

type HeaderMenusProps = {
  isOpen: boolean;
  closeNav(): void;
  // isDialogOpen: boolean;
  closeDialog(): void;
  openDialog(e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
};

export const HeaderMenus: React.FC<HeaderMenusProps> = ({ closeDialog, isOpen, openDialog, closeNav }) => {
  const handleClick = () => {
    //ボタンが押された時の処理
    console.log("opne");
    openDialog();
    closeNav();
  };

  const handleKeyUp = (e: any) => {
    if (e.code === "Enter" || e.code === "Space") {
      // openChatBot()
      console.log("open");
      openDialog();
      closeNav();
    }
  };

  // function handleKeyUp() {
  //   if (押されたのはENTERキーかSPACEキー?) {
  //     if (ボタンにフォーカスしている?) {
  //       //ボタンが押された時の処理
  //     }
  // }

  const logoStyle = isOpen ? styles.productLogoOpen : styles.productLogo;
  const navTopStyle = isOpen ? styles.headerNavTopOpen : styles.headerNavTop;

  return (
    <nav className={navTopStyle}>
      <h1 className={logoStyle}>
        <PandasharkLogo height={40} width={80} />
      </h1>
      <ListItem items={headerMenuItems} />
      {/* <ul>
        {content}
        <li>
          <a className={styles.sns} href={links.twitter} target="_self">
            <img src={images.twitter.path} alt={images.twitter.alt} />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            className={styles.sns}
            tabIndex={0}
            role="button"
            onClick={() => {
              return handleClick();
            }}
          >
            <img src={images.robot.path} alt={images.robot.alt} />
            <span>Chat Bot</span>
          </a>
        </li>
      </ul> */}
    </nav>
  );
};

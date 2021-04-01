import Link from "next/link";
import PandasharkLogo from "src/components/common/PandasharkLogo";
import styles from "src/styles/components/common/header/HeaderMenus.module.scss";
import { images } from "src/utils/images";
import { links as l } from "src/utils/paths";

const links = [
  { label: "About", href: "/about/" },
  { label: "Samples", href: "/samples/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact/" },
];

type HeaderMenusProps = {
  isOpen: boolean;
  closeNav(): void;
  // isDialogOpen: boolean;
  closeDialog(): void;
  openDialog(e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
};

export const HeaderMenus: React.FC<HeaderMenusProps> = ({ closeDialog, isOpen, openDialog, closeNav }) => {
  const content = links.map((link, index) => {
    return (
      <li key={index}>
        <Link href={link.href}>
          <a target="_self">{link.label}</a>
        </Link>
      </li>
    );
  });

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
      {/* <nav className="l-header__nav-top"> */}
      <h1 className={logoStyle}>
        <PandasharkLogo height={40} width={80} />
        {/* <Link href={"/"}>
          <a target="_self">
            <Image height={80} width={40} alt={images.pandasharkRectangle.alt} src={images.pandasharkRectangle.path} />
          </a>
        </Link>
         */}
        {/* <a href="/" target="_self">
          <img alt="パンダシャーク" src="/img/icons/logo.png" />
        </a> */}
      </h1>
      <ul>
        {content}
        <li>
          <a className={styles.sns} href={l.twitter} target="_self">
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
        {/* <li>
          <button onClick={() => handleClick()}>
            <img src="/img/icons/twitter_logo.png" alt="twitter" />
            <span>Chat Bot</span>
          </button>
        </li> */}
        {/* <li>
        <a className="sns" href="#" target="_self">
          <img src="/img/icons/youtube_logo.png" />
          <span>YouTubeチャンネル</span>
        </a>
      </li> */}
      </ul>
    </nav>
  );
};

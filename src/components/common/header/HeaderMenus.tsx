import Image from "next/image";
import Link from "next/link";
import { images, links as l } from "src/utils/paths";

const links = [
  { label: "About", href: "/about/" },
  { label: "Samples", href: "/samples/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact/" },
];

type HeaderMenusProps = {
  closeNav(): void;
  // isDialogOpen: boolean;
  closeDialog(): void;
  openDialog(e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void;
};

export const HeaderMenus: React.FC<HeaderMenusProps> = ({ closeDialog, openDialog, closeNav }) => {
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

  return (
    <nav className="l-header__nav-top">
      <h1 className="l-product-logo">
        <Link href={"/"}>
          <a target="_self">
            <Image height={80} width={40} alt="パンダシャーク" src={images.pandashark_rec} />
            {/* <img alt="パンダシャーク" src={images.pandashark_rec} /> */}
          </a>
        </Link>
        {/* <a href="/" target="_self">
          <img alt="パンダシャーク" src="/img/icons/logo.png" />
        </a> */}
      </h1>
      <ul>
        {content}
        <li>
          <a className="sns" href={l.twitter} target="_self">
            <img src="/img/icons/twitter_logo.png" alt="twitter" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            className="sns"
            tabIndex={0}
            role="button"
            onClick={() => {
              return handleClick();
            }}
          >
            <img src={images.robot} alt="chat-bot" />
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

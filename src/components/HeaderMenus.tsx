import Image from "next/image";
import Link from "next/link";
import { images, links as l } from "src/static/links";

const links = [
  { label: "About", href: "/about/" },
  { label: "Samples", href: "/samples/" },
  { label: "Blog", href: "/" },
  { label: "Contact", href: "/contact/" },
];

export const HeaderMenus = () => {
  const content = links.map((link, index) => (
    <li key={index}>
      <Link href={link.href}>
        <a target="_self">{link.label}</a>
      </Link>
    </li>
  ));
  const openChatBot = () => {};

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
          <button onClick={() => openChatBot()}>
            <img src="/img/icons/twitter_logo.png" alt="twitter" />
            <span>Twitter</span>
          </button>
        </li>
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

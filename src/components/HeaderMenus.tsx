import Link from "next/link";
import Image from "next/image";

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

  return (
    <nav className="l-header__nav-top">
      <h1 className="l-product-logo">
        <Link href={"/"}>
          <a target="_self">
            {/* <Image height={80} width={40} alt="パンダシャーク" src="/img/icons/logo.png" /> */}
            <img alt="パンダシャーク" src="/img/icons/pandashark_logo.png" />
          </a>
        </Link>
        {/* <a href="/" target="_self">
          <img alt="パンダシャーク" src="/img/icons/logo.png" />
        </a> */}
      </h1>
      <ul>
        {content}
        <li>
          <a className="sns" href="/" target="_self">
            <img src="/img/icons/twitter_logo.png" alt="twitter" />
            <span>Twitter</span>
          </a>
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

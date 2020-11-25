import Image from "next/image";
import Link from "next/link";
import { links as l } from "src/static/links";

const links = {
  about: [
    { label: "Vision", href: "/about/#vision" },
    { label: "Profile", href: "/about/#profile" },
    { label: "Career", href: "/about/#career" },
    { label: "Skills", href: "/about/#skills" },
  ],
  samples: [
    { label: "ポートフォリオサイト", href: "/samples/portfolio/" },
    { label: "ECサイト", href: "/samples/ec/" },
    { label: "Chat App", href: "/samples/chat/" },
  ],
  links: [
    { label: "Blog", href: "/" },
    { label: "Twitter", href: l.twitter },
    // {label: "",href:""},
    // {label: "",href:""},
  ],
};
const accordions = [
  { label: "自己紹介", id: "footer-sitemap-about", inputId: "accordion-about", links: links.about },
  { label: "制作事例", id: "footer-sitemap-works", inputId: "accordion-works", links: links.samples },
  { label: "リンク集", id: "footer-sitemap-links", inputId: "accordion-links", links: links.links },
];

export const FooterMenus = () => {
  const handle = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(accordionModule.toggleMenu("accordion-about"));
    console.log(accordionModule.toggleMenu("accordion-works"));
  };

  const accordionItems = accordions.map((accordion) => (
    <li className="p-accordion" id={accordion.id} key={accordion.id}>
      {/* <button onClick={handle} onKeyDown={(e) => handle}> */}
      <h4 role="button" onClick={handle} onKeyDown={(e) => handle}>
        {accordion.label}
      </h4>
      {/* </button> */}
      <input type="checkbox" id={accordion.inputId} />
      <label htmlFor={accordion.inputId}></label>
      <ul className="p-accordion__items">
        {accordion.links.map((link, index) => (
          <Link href={link.href} key={index}>
            <a target="_self">
              <li>{link.label}</li>
            </a>
          </Link>
        ))}
        {/* {accordion.links.map((link, index) => {
          <li key={index}>
            <Link href={link.href}>
              <a target="_self">{link.label}</a>
            </Link>
          </li>
        })} */}
      </ul>
    </li>
  ));

  return (
    <section className="sitemap">
      <ul className="footer-links">
        {accordionItems}
        {/* <li className="p-accordion" id="footer-sitemap-about">
        <h4 role="button" onClick={handle}>
          自己紹介
        </h4>
        <input type="checkbox" id="accordion-about" />
        <label htmlFor="accordion-about"></label>
        <ul className="p-accordion__items">
          <a href="/about/#vision" target="_self">
            <li>Vision</li>
          </a>
          <a href="/about/#profile" target="_self">
            <li>Profile</li>
          </a>
          <a href="/about/#career" target="_self">
            <li>Career</li>
          </a>
          <a href="/about/#skills" target="_self">
            <li>Skills</li>
          </a>
        </ul>
      </li>
      <li className="p-accordion" id="footer-sitemap-works">
        <h4 role="button" onClick={handle}>
          制作事例
        </h4>
        <input type="checkbox" id="accordion-works" />
        <label htmlFor="accordion-works"></label>
        <ul className="p-accordion__items">
          <a href="/sample/portfolio/" target="_self">
            <li>ポートフォリオサイト</li>
          </a>
          <a href="/sample/ec/" target="_self">
            <li>ECサイト</li>
          </a>
          <a href="/sample/chat/" target="_self">
            <li>Chat App</li>
          </a>
        </ul>
      </li>
      <li className="p-accordion" id="footer-sitemap-links">
        <h4 role="button" onClick={handle}>
          リンク集
        </h4>
        <input type="checkbox" id="accordion-links" />
        <label htmlFor="accordion-links"></label>
        <ul className="p-accordion__items">
          <a href="#" target="_self">
            <li>Blog</li>
          </a>
          <a href="#" target="_self">
            <li>Twitter</li>
          </a>
          <a href="#" target="_blank">
            <li>YouTube</li>
          </a>
          <a href="#" target="_blank">
            <li>Qiita</li>
          </a>
          <a href="#" target="_blank">
            <li>GitHub</li>
          </a>
        </ul>
      </li> */}
      </ul>
    </section>
  );
};

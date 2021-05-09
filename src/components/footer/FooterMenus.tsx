import Link from "next/link";
import React from "react";
import styles from "src/styles/components/footer/Footer.module.scss";
import { externalLinks, internalLinks } from "src/utils/paths";

import useMedia from "../../hooks/useMedia";
import { identity } from "../../utils/helper";

const accordions = identity({
  about: {
    label: "自己紹介",
    items: [
      { label: "Vision", href: internalLinks.about + "#vision" },
      { label: "Profile", href: internalLinks.about + "#profile" },
      { label: "Career", href: internalLinks.about + "#career" },
      { label: "Skills", href: internalLinks.about + "#skills" },
    ],
  },
  samples: {
    label: "制作事例",
    items: [
      { label: "ポートフォリオサイト", href: internalLinks.portfolio },
      { label: "ECサイト", href: internalLinks.ec },
      { label: "Chat App", href: internalLinks.chat },
    ],
  },
  links: {
    label: "リンク集",
    items: [
      { label: "Twitter", href: externalLinks.twitter },
      { label: "Github", href: externalLinks.github },
    ],
  },
});

type Accordion = {
  label: string;
  items: Array<{ label: string; href: string }>;
};

type Props = {
  accordion: Accordion;
};

const Accordion: React.VFC<Props> = React.memo(({ accordion }) => {
  const { isPC, mounted } = useMedia();

  return mounted ? (
    <details open={isPC}>
      <summary>{accordion.label}</summary>
      <ul className={styles.accordionItems}>
        {accordion.items.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <li>
                <a target="_self">{item.label}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </details>
  ) : null;
});
Accordion.displayName = "Accordion";

export const FooterMenus: React.VFC = () => {
  return (
    <section className={styles.sitemap}>
      <ul className={styles.footerLinks}>
        {Object.values(accordions).map((accordion, index) => {
          return (
            <li className={styles.accordion} key={index}>
              {<Accordion accordion={accordion} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

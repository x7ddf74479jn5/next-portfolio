import Link from "next/link";
import React from "react";
import useMount from "src/hooks/useMount";
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

export const Accordion: React.VFC<Props> = React.memo(({ accordion }) => {
  const { isPC } = useMedia();
  const { mounted } = useMount();

  return mounted ? (
    <details open={isPC} className={styles.accordion}>
      <summary>{accordion.label}</summary>
      <ul className={styles.accordionItems}>
        {accordion.items.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>
                <a>{item.label}</a>
              </Link>
            </li>
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
          return <li key={index}>{<Accordion accordion={accordion} />}</li>;
        })}
      </ul>
    </section>
  );
};

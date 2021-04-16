import { images } from "src/utils/images";
import { externalLinks, links } from "src/utils/paths";

type ItemBase = {
  label: string;
  icon?: { src: string; alt: string };
};

type LinkItem = ItemBase & {
  href: string;
};

export const linkItems: LinkItem[] = [
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

export const buttonItems = [
  { type: "chat-bot", label: "Chat bot", href: links.chat, icon: { src: images.robot.path, alt: images.robot.alt } },
];

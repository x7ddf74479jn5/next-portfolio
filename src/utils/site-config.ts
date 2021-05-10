import { images } from "./images";
import { internalLinks } from "./paths";

export default {
  title: "Pandashark's portfolio",
  description: "Pandasharkのポートフォリオサイトです。",
  image: internalLinks.siteRoot + images.pandasharkIcon.path,
  url: internalLinks.siteURL,
  og: {
    type: "website",
    description: "Pandasharkのポートフォリオサイトです。",
    image: internalLinks.siteRoot + images.pandasharkIcon.path,
    imageHight: "600",
    imageWidth: "315",
    url: internalLinks.siteURL,
    twitterCard: "summary_large_image",
    twitterSite: "@pandashark6",
  },
  icon: internalLinks.siteRoot + images.favicon.path,
  appleTouchIcon: internalLinks.siteRoot + images.appleTouchIcon.path,
  manifest: "",
};

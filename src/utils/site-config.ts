import { images } from "./images";
import { links } from "./paths";

export default {
  title: "Pandashark's portfolio",
  description: "Pandasharkのポートフォリオサイトです。",
  image: links.siteRoot + images.pandasharkIcon.path,
  url: links.siteURL,
  og: {
    type: "website",
    description: "Pandasharkのポートフォリオサイトです。",
    image: links.siteRoot + images.pandasharkIcon.path,
    imageHight: "600",
    imageWidth: "315",
    url: links.siteURL,
    twitterCard: "summary_large_image",
    twitterSite: "@pandashark6",
  },
  icon: links.siteRoot + images.favicon.path,
  appleTouchIcon: links.siteRoot + images.appleTouchIcon.path,
  manifest: "",
};

import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
// import Head from "../components/head"

const headProps = {
  title: "Pandashark's portfolio",
  description: "Pandasharkのポートフォリオサイトです。",
  keyword: "",
  image: "/img/icons/pandashark_logo.png",
  url: "https://next-portfolio-livid.vercel.app/",
  og: {
    type: "website",
    description: "Pandasharkのポートフォリオサイトです。",
    image: "/img/icons/pandashark_logo.png",
    imageHight: "600",
    imageWidth: "315",
    url: "https://next-portfolio-livid.vercel.app/",
    twitterCard: "summary_large_image",
    twitterSite: "@pandashark",
  },
  icon: "/img/icons/favicon.ico",
  appleTouchIcon: "/img/icons/apple-touch-icon.png",
  manifest: "",
};

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        {/* <Head 
        title={headProps.title}
        description={headProps.description} 
        keyword=""
        image={headProps.image}
        url={headProps.url}
        og={headProps.og}
        icon={headProps.icon}
        appleTouchIcon={headProps.appleTouchIcon}
        manifest={headProps.manifest}
        /> */}
        <Head>
          {/* <title>{headProps.title}</title> */}
          <meta property="og:title" content={headProps.title} />
          <meta property="og:description" content={headProps.description} />
          <meta name="keywords" content={headProps.keyword} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={headProps.url} />
          <meta property="og:image" content={headProps.image} />
          <meta property="og:image:hight" content={headProps.og.imageHight} />
          <meta property="og:image:width" content={headProps.og.imageWidth} />
          <meta property="og:site_name" content={headProps.title} />
          <meta name="twitter:card" content={headProps.og.twitterCard} />
          <meta name="twitter:site" content={headProps.og.twitterSite} />
          <meta name="twitter:url" content={headProps.url} />
          <meta name="twitter:title" content={headProps.title} />
          <meta name="twitter:description" content={headProps.description} />
          <meta name="twitter:image" content={headProps.image} />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#181a1b" />
          <link rel="canonical" href={headProps.url} />
          <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"} />
          <link rel="stylesheet" href={"https://use.fontawesome.com/releases/v5.6.1/css/all.css"} />
          <link
            rel="stylesheet"
            href={"https://fonts.googleapis.com/css?family=Courgette&display=swap&subset=latin-ext"}
          />
          <link rel="shortcut icon" href={headProps.icon} />
          <link rel="apple-touch-icon" href={headProps.appleTouchIcon} />
          {/* <script src="chat-bot.js"  /> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script> */}
          {/* <script src="/js/carousel.js" type="text/javascript"></script> */}
          {/* 
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
            crossorigin="anonymous"
          ></script> */}
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/locale/ja.js"></script>
          <script src="/js/commonFunc.js" type="text/javascript"></script>
          <script src="/js/menu.js" type="text/javascript"></script>
          <script src="/js/carousel.js" type="text/javascript"></script>
          <script src="/js/accordion.js" type="text/javascript"></script>
          <script src="/js/contact.js" type="text/javascript"></script>
          <script src="/js/animate.js" type="text/javascript"></script>
          <script src="/js/index.js" type="text/javascript"></script> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

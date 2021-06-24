import type { DocumentContext, DocumentInitialProps } from "next/document";
import Document, { Head, Html, Main, NextScript } from "next/document";
import siteConfig from "src/utils/site-config";

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
        <Head>
          <meta property="description" content={siteConfig.description} />
          <meta property="og:title" content={siteConfig.title} />
          <meta property="og:description" content={siteConfig.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteConfig.url} />
          <meta property="og:image" content={siteConfig.image} />
          <meta property="og:image:hight" content={siteConfig.og.imageHight} />
          <meta property="og:image:width" content={siteConfig.og.imageWidth} />
          <meta property="og:site_name" content={siteConfig.title} />
          <meta name="twitter:card" content={siteConfig.og.twitterCard} />
          <meta name="twitter:site" content={siteConfig.og.twitterSite} />
          <meta name="twitter:url" content={siteConfig.url} />
          <meta name="twitter:title" content={siteConfig.title} />
          <meta name="twitter:description" content={siteConfig.description} />
          <meta name="twitter:image" content={siteConfig.image} />
          <meta name="theme-color" content="#181a1b" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Courgette&display=swap&subset=latin-ext"
          />
          <link rel="icon" href={siteConfig.icon} />
          <link rel="apple-touch-icon" href={siteConfig.appleTouchIcon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

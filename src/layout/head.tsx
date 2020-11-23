// <!DOCTYPE html>
// <html lang="ja" dir="ltr" locale="ja_ALL" user-region="north-america">
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
//   <title>Pandashark's portfolio</title>
//   <meta name="description" content="Pandasharkのポートフォリオサイトです。">
//   <link href="/css/style.css" rel="stylesheet">
//   <link href="/css/animate.css" rel="stylesheet">
//   <!-- OGP Tag data-->
//   <meta property="og:description" content="Pandasharkのポートフォリオサイトです。">
//   <meta property="og:title" content="Pandashark's portfolio">
//   <meta property="og:image" content="https://pandashark.web.app/assets/img/icons/logo.png">
//   <meta property="og:image:width" content="600">
//   <meta property="og:image:height" content="315">
//   <meta property="og:type" content="website">
//   <meta property="og:url" content="https://pandashark.web.app/">
//   <meta name="twitter:card" content="summary_large_image" />
//   <meta name="twitter:site" content="@pandashark_" />
//   <link rel="shortcut icon" href="/img/icons/favicon.ico">
//   <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon.png">
//   <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png">
//   <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png">
//   <link rel="manifest" href="/public/site.webmanifest">
//   <meta name="msapplication-TileColor" content="#da532c">
//   <meta name="theme-color" content="#181a1b">
//   <!-- Carousel slider -->
//   <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css" rel="stylesheet">
//   <!-- Font Awesome Icons -->
//   <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
//   <!-- Google Fonts -->
//   <link href="https://fonts.googleapis.com/css?family=Courgette&display=swap&subset=latin-ext" rel="stylesheet">
//   <!-- The core Firebase JS SDK is always required and must be listed first -->
//   <script src="/__/firebase/7.24.0/firebase-app.js"></script>
//   <!-- TODO: Add SDKs for Firebase products that you want to usehttps://firebase.google.com/docs/web/setup#available-libraries -->
//   <script src="/__/firebase/7.24.0/firebase-analytics.js"></script>
//   <script src="/__/firebase/7.24.0/firebase-functions.js"></script>
//   <!-- Initialize Firebase -->
//   <script src="/__/firebase/init.js"></script>
// </head>

import Head from "next/head";

interface Props {
  title: string;
  description: string;
  keyword: string;
  image: string;
  url: string;
  og: {
    type: string;
    image: string;
    imageHight: string;
    imageWidth: string;
    twitterCard: string;
    twitterSite: string;
  };
  icon: string;
  appleTouchIcon: string;
  manifest: string;
}

const headerProps = {
  title: "Pandashark's portfolio",
  description: "Pandasharkのポートフォリオサイトです。",
  keyword: "",
  image: "/img/icons/pandashark_logo.png",
  url: "https://pandashark.web.app/",
  og: {
    type: "website",
    description: "Pandasharkのポートフォリオサイトです。",
    image: "/img/icons/pandashark_logo.png",
    imageHight: "600",
    imageWidth: "315",
    url: "https://pandashark.web.app/",
    twitterCard: "summary_large_image",
    twitterSite: "@pandashark",
  },
  icon: "/img/icons/favicon.ico",
  appleTouchIcon: "/img/icons/apple-touch-icon.png",
  manifest: "",
};

export default ({
  title,
  description,
  keyword,
  image,
  url,
  og,
  icon,
  appleTouchIcon,
  manifest,
}: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:hight" content={og.imageHight} />
      <meta property="og:image:width" content={og.imageWidth} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content={og.twitterCard} />
      <meta name="twitter:site" content={og.twitterSite} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#181a1b" />
      <link rel="canonical" href={url} />
      {/* <link rel="stylesheet" href={"https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css"} /> */}
      <link rel="stylesheet" href={"https://use.fontawesome.com/releases/v5.6.1/css/all.css"} />
      <link rel="stylesheet" href={"https://fonts.googleapis.com/css?family=Courgette&display=swap&subset=latin-ext"} />
      <link rel="shortcut icon" href={icon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
      ></script>
      <script src="/js/animate.js" type="text/javascript"></script>
    </Head>
  );
};

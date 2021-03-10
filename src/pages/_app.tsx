// import "src/styles/swiper-bundle.css"
import "src/styles/style.scss";
import "src/styles/animate.css";

import type { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;

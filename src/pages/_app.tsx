// import "src/styles/swiper-bundle.css"
import "src/styles/animate.css";
import "src/styles/style.scss";

import type { AppProps } from "next/app";
import ModalPortal from "src/components/modal/Modal";
import { ModalProviderContainer } from "src/context/ModalProviderContainer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ModalProviderContainer>
      <Component {...pageProps} />
      {/* <ModalConsumer /> */}
      <ModalPortal />
    </ModalProviderContainer>
  );
};

export default App;

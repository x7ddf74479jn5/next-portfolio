// import "src/styles/swiper-bundle.css"
import type { AppProps } from "next/app";
import { ModalProviderContainer } from "src/context/ModalProviderContainer";
import ModalPortal from "src/layouts/Modal";
import "src/styles/animate.css";
import "src/styles/style.scss";

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

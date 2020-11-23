// import Breadcrumbs from "src/components/BreadCrumbs"
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";
import * as React from "react";

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const toggleNav = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, [open]);
  const closeNav = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const navOpen = open ? "nav-open" : "";
  return (
    <>
      <Header open={open} toggleNav={toggleNav} closeNav={closeNav} />
      <main className={navOpen}>{children}</main>
      <Footer />
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
    </>
  );
};

// const ClosableDrawer = () => {
//   const [open, setOpen] = React.useState(false);

//   const toggleNav = React.useCallback(() => {
//     setOpen((prevState) => !prevState);
//   }, [open]);
//   const closeNav = React.useCallback(() => {
//     setOpen(false);
//   }, [setOpen]);

//   const navOpen = open ? "nav-open" : "";

// };

import * as React from "react";
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";
// import { ChatBot } from "src/layout/ChatBot";

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const toggleNav = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, [open]);
  const closeNav = React.useCallback(
    (event) => {
      // if (e.type === "keydown" && e.key === "Esc") {
      //   setOpen(false);
      // }
      // if (event.type === "onclick") {
      setOpen(false);
      // }
    },
    [setOpen]
  );

  const navOpen = open ? "nav-open" : "";
  return (
    <>
      <Header open={open} toggleNav={toggleNav} closeNav={closeNav} />
      <main className={navOpen}>{children}</main>
      {/* <div id="root"></div>
      <script src="/js/chat-bot.js"  /> */}
      {/* <ChatBot /> */}
      <Footer />
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

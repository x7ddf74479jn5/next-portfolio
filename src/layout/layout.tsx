import * as React from "react";
import { Footer } from "src/layout/footer";
import { Header } from "src/layout/header";
import { ChatBot } from "src/layout/ChatBot";
import { ChatBotDialog } from "src/components/ChatBotDialog";

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleNav: () => void = React.useCallback(() => {
    setOpen((prevState) => !prevState);
  }, [open]);
  const closeNav: (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | any
  ) => void = React.useCallback(
    (e) => {
      // if (e.type === "keydown" && e.key === "Esc") {
      //   setOpen(false);
      // }
      // if (e.type === "onclick") {
      setOpen(false);
      // }
    },
    [setOpen]
  );
  const navOpen: string = open ? "nav-open" : "";

  const hideDialog = React.useCallback(() => {}, []);

  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);

  // ダイアログを開く
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = React.useCallback(() => {
    setIsDialogOpen(false);
  }, [setIsDialogOpen]);

  return (
    <>
      <Header
        open={open}
        toggleNav={toggleNav}
        closeNav={closeNav}
        isDialogOpen={isDialogOpen}
        openDialog={openDialog}
        closeDialog={closeDialog}
      />
      <main className={navOpen}>{children}</main>
      <ChatBotDialog isOpen={isDialogOpen} onClose={closeDialog} />
      <Footer />
    </>
  );
};

import * as React from "react";
import { ChatBotDialog } from "src/components/ChatBotDialog";
import { Footer } from "src/layouts/footer";
import { Header } from "src/layouts/header";

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleNav: () => void = React.useCallback(() => {
    setOpen((prevState) => {
      return !prevState;
    });
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

  // const hideDialog = React.useCallback(() => {}, []);

  const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);
  const [isDialogShow, setIsDialogShow] = React.useState<boolean>(false);
  const mounted = React.useRef<boolean>(false);

  // ダイアログを開く
  const openDialog = React.useCallback(() => {
    if (mounted.current) {
      // setIsDialogShow(true);
      setIsDialogOpen(true);

      console.log("mouted");
    } else {
      setIsDialogOpen(true);
      setIsDialogShow(true);
      mounted.current = true;
      console.log("new mouted");
    }
  }, [mounted]);
  console.log(mounted.current);

  const closeDialog = React.useCallback(() => {
    // setIsDialogShow(false);
    setIsDialogOpen(false);
  }, [setIsDialogShow]);

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
      <ChatBotDialog isOpen={isDialogOpen} onClose={closeDialog} display={isDialogShow} className="c-modal" />
      <Footer />
    </>
  );
};

// const DialogStyle = styled(ChatBotDialog)`
//   display: ${(props) => (props.display ? "block" : "none")};
// `;

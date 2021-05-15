import * as React from "react";
import { Footer } from "src/components/footer/Footer1";
import { Header } from "src/components/header/Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={""}>{children}</main>
      <Footer />
    </>
  );
};

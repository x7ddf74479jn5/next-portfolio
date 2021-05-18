import * as React from "react";
import { Footer } from "src/components/footer/Footer";
import { Header } from "src/components/header/Header";
import Spacer from "src/components/layouts/Spacer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Spacer size="md" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

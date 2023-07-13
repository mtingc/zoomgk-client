import { ReactNode } from "react";
import { Navbar, Footer } from "@/components";

type WebLayoutProps = {
  children: ReactNode;
};

const WebLayout = ({ children }: WebLayoutProps) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default WebLayout;

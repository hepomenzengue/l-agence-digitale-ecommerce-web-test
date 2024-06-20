"use client";

import { ReactNode } from "react";

import Header from "./Header";
import BottomNavigation from "./bottomNavigation";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BottomNavigation />
    </>
  );
};

export default Layout;

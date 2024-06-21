"use client";

import { ReactNode } from "react";

import Header from "./Header";
import BottomNavigation from "./bottomNavigation";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <Header />
      {children}

      <Footer />
      <BottomNavigation />
    </CartProvider>
  );
};

export default Layout;

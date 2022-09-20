import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div data-theme="cmyk">
      <Navbar />
      <main className=" main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

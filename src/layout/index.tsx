import React from "react";
import BaseRoutes from "../routes";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <BaseRoutes />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

// BASE LAYOUT

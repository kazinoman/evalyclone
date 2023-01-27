import React from "react";
import BaseRoutes from "../routes";
import Footer from "./footer";
import HeaderCom from "./header";

const Layout = () => {
  return (
    <React.Fragment>
      <HeaderCom />
      {/* <div className="mt-36"></div> */}
      <BaseRoutes></BaseRoutes>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

// BASE LAYOUT

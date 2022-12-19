import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="layout">{children}</div>
    </>
  );
};

export default Layout;

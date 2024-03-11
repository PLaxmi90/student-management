import React from "react";
import Navbar from "../components/Navbar/index";
import { Outlet } from "react-router-dom";

const style = {
  mainDiv: {
    display: "flex",
    minHeight: "100vh",
    maxHeight: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
  navbar: { width: "250px", minHeight: "100vh", maxHeight: "100vh", overflowY: "scroll", },
  outlet: {
    flexGrow: 1,
    padding: "50px 40px",
    overflowY: "scroll",
  },
};

const Layout = () => {
  return (
    <div style={style?.mainDiv}>
      <div style={style?.navbar}>
        <Navbar />
      </div>
      <div style={style?.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { Box } from "@mui/material";
import React from "react";
import "../../styles/app/global.css";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";
import { LayoutProps } from "../../props";

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box
      className={`${props.className ? props.className : ""} appPage`}
      sx={props.style}
    >
      {props.showUI && (
        <>
          <Sidebar />
          <Navbar {...props} />
          <BottomNav />
        </>
      )}
      <span style={{ paddingBottom: "100px" }}>{props?.children}</span>
    </Box>
  );
};

export default Layout;

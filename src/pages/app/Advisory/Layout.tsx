import { Box } from "@mui/material";
import React from "react";
import "../../styles/app/global.css";
import Navbar from "../../../components/app/Navbar";
import BottomNav from "../../../components/app/BottomNav";
import Sidebar from "../../../components/app/Sidebar";
import { LayoutProps } from "../../../props";

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
      {props?.children}
    </Box>
  );
};

export default Layout;

import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "../../styles/app/components/Sidebar.css";

import closeIcon from "../../assets/icons/close.svg";
import calender from "../../assets/icons/calender.svg";
import comunity from "../../assets/icons/comunity.svg";
import orders from "../../assets/icons/orders.svg";
import chat from "../../assets/icons/chatSB.svg";
import education from "../../assets/icons/educationSB.svg";
import play from "../../assets/icons/play.svg";
import produce from "../../assets/icons/produce.svg";
import language from "../../assets/icons/language.svg";
import support from "../../assets/icons/support.svg";
import file from "../../assets/icons/fileSB.svg";
import logout from "../../assets/icons/logout.svg";
import { store } from "../../redux/store.js";
import { logout as logoutaction } from "../../redux/auth/actions.js";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import { URL_PREFIX } from "../../App.js";
export const toggleSidebar = () => {
  const sidebar = document.querySelector("#sidebar");
  sidebar?.classList.toggle("show");
};

const Sidebar = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Box className="sidebar" id="sidebar">
      <Box className="close" onClick={toggleSidebar}>
        <img src={closeIcon} alt="" />
      </Box>
      <Box className="profile">
        <Box className="img">
          {user?.image ? (
            <img src={user?.image} alt="" />
          ) : (
            <div className="character-dp">{user?.name[0]}</div>
          )}
        </Box>
        <Box>
          <Typography>{user?.name ?? ""}</Typography>
          <Box className="textSM">{user?.phone}</Box>
        </Box>
      </Box>
      <Box className="navLinks">
        <NavLink to={`/${URL_PREFIX}/cropschedule`}>
          <Box className="icon">
            <img src={calender} alt="" />
          </Box>
          <span>Crop Schedule</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={comunity} alt="" />
          </Box>
          <span>Community</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={orders} alt="" />
          </Box>
          <span>My Orders</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={chat} alt="" />
          </Box>
          <span>FAQ</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={education} alt="" />
          </Box>
          <span>AgriAcademia</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={play} alt="" />
          </Box>
          <span>Webinars</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={produce} alt="" />
          </Box>
          <span>Produce</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={language} alt="" />
          </Box>
          <span>Language</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={support} alt="" />
          </Box>
          <span>Support</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={file} alt="" />
          </Box>
          <span>Terms & Conditions</span>
        </NavLink>
        <NavLink to={"#!"}>
          <Box className="icon">
            <img src={file} alt="" />
          </Box>
          <span>Privacy Policy</span>
        </NavLink>
        <NavLink
          to={"/app/login"}
          onClick={() => {
            store.dispatch(logoutaction());
          }}
        >
          <Box className="icon">
            <img src={logout} alt="" />
          </Box>
          <span>Log Out</span>
        </NavLink>
      </Box>
      <Box>Version 1.0.0</Box>
    </Box>
  );
};

export default Sidebar;

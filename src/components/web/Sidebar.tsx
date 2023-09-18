import "../../styles/Sidebar.css";
import React, { useState } from "react";
import logo from "../../../assets/img/logo/Logo.svg";
import dashboard from "../../../assets/icons/dashboard.svg";
import file from "../../../assets/icons/file.svg";
import handThumb from "../../../assets/icons/handThumb.svg";
import flower from "../../../assets/icons/flower.svg";
import box from "../../../assets/icons/box.svg";
import tv from "../../../assets/icons/tv.svg";
import cash from "../../../assets/icons/cash.svg";
import filePlay from "../../../assets/icons/filePlay.svg";
import newsPaper from "../../../assets/icons/newsPaper.svg";
import people from "../../../assets/icons/people.svg";
import person from "../../../assets/icons/person.svg";
import shop from "../../../assets/icons/shop.svg";
import leftArrow from "../../../assets/icons/leftArrow.svg";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="toggler" onClick={handleSidebarCollapse}>
        <img src={leftArrow} alt="" />
      </div>
      <div className="sidebarHeader">
        <img src={logo} alt="" />
      </div>
      <div className="sidebarMenu">
        <NavLink to="/" className="sidebarLink">
          <img className="sidebarIcon" src={dashboard} />
          <span>dashboard</span>
        </NavLink>
        <NavLink to="/knowledgeBank" className="sidebarLink">
          <img className="sidebarIcon" src={file} />
          <span>knowledge bank</span>
        </NavLink>
        <NavLink to="/schedule" className="sidebarLink">
          <img className="sidebarIcon" src={handThumb} />
          <span>Schedule</span>
        </NavLink>
        <NavLink to="/module" className="sidebarLink">
          <img className="sidebarIcon" src={flower} />
          <span>Module</span>
        </NavLink>
        <NavLink to="/molecule" className="sidebarLink">
          <img className="sidebarIcon" src={box} />
          <span>Molecule</span>
        </NavLink>
        <NavLink to="/webinar" className="sidebarLink">
          <img className="sidebarIcon" src={tv} />
          <span>Webinar</span>
        </NavLink>
        <NavLink to="/farmer" className="sidebarLink">
          <img className="sidebarIcon" src={person} />
          <span>Farmer</span>
        </NavLink>
        <NavLink to="/buyer" className="sidebarLink">
          <img className="sidebarIcon" src={person} />
          <span>Buyer</span>
        </NavLink>
        <NavLink to="/agriInputDealer" className="sidebarLink">
          <img className="sidebarIcon" src={person} />
          <span>Agri Input Dealer</span>
        </NavLink>
        <NavLink to="/agriInputCompany" className="sidebarLink">
          <img className="sidebarIcon" src={shop} />
          <span>Agri Input Company</span>
        </NavLink>
        <NavLink to="/serviceProvider" className="sidebarLink">
          <img className="sidebarIcon" src={person} />
          <span>Service Provider</span>
        </NavLink>
        <NavLink to="/payment" className="sidebarLink">
          <img className="sidebarIcon" src={cash} />
          <span>Payment</span>
        </NavLink>
        <NavLink to="/newsPaper" className="sidebarLink">
          <img className="sidebarIcon" src={newsPaper} />
          <span>News</span>
        </NavLink>
        <NavLink to="/btGoreYoutube" className="sidebarLink">
          <img className="sidebarIcon" src={filePlay} />
          <span> BTGore Youtube</span>
        </NavLink>
        <NavLink to="/vender" className="sidebarLink">
          <img className="sidebarIcon" src={people} />
          <span>Vender</span>
        </NavLink>
      </div>
    </div>
  );
}

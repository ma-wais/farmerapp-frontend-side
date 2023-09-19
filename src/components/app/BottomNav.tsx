import "../../styles/app/components/BottomNav.css";
import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home.svg";
import silo from "../../assets/icons/silo.svg";
import chat from "../../assets/icons/chat.svg";
import education from "../../assets/icons/education.svg";
import pars from "../../assets/icons/pars.svg";
import { URL_PREFIX } from "../../App";

const BottomNav = () => {
  return (
    <div className="bottomNav">
      <div className="items">
        <NavLink to={`/${URL_PREFIX}/`}>
          <img src={home} alt="" />
          <span>home</span>
        </NavLink>
        <NavLink to={`/${URL_PREFIX}/farms`}>
          <img src={silo} alt="" />
          <span>my farm</span>
        </NavLink>
        <div className="active">
          <NavLink to={`/${URL_PREFIX}/advisory/schedule`}>
            <img src={chat} alt="" />
          </NavLink>
        </div>
        <NavLink to={"#!"}>
          <img src={education} alt="" />
          <span>my courses</span>
        </NavLink>
        <NavLink to={"#!"}>
          <img src={pars} alt="" />
          <span>Shop</span>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;

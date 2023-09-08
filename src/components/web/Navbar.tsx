import React from "react";
import "../../styles/Navbar.css";
import search from "../../assets/icons/search.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <div className="searchBar">
          <img src={search} alt="" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search some thing..."
          />
        </div>
        <div className="profile">
          <div className="profileImage"></div>
        </div>
      </div>
    </div>
  );
}

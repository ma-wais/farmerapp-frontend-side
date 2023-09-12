import React from "react";
import Layout from "./Layout";
import YChill from "../../assets/img/app/profile_bg.png";
import Arrow from "../../assets/img/app/Arrow 2.svg";
import { NavLink } from "react-router-dom";

const Farms: React.FC = () => {
  const farm = [
    {
      image: YChill,
      name: "Farm Name",
      location: "Location",
    },
  ];
  return (
    <Layout showUI pageTitle="Advisory">
      <p className="heading p40">Registered Plots</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ width: "100%" }}>
          {farm.map((item) => {
            return (
              <div
                className="farm "
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgb(200,200,200)",
                }}
              >
                <img
                  src={item.image}
                  style={{ width: "100%", borderRadius: "10px" }}
                  alt=""
                />
                <div style={{ width: "100%", display: "inline-block" }}>
                  <h2 style={{ padding: "8px 0 0 10px", color: "black" }}>
                    {item.name}
                  </h2>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ padding: "8px 0 10px 10px" }}>
                    {item.location}
                  </h3>
                  <NavLink to={'/app/plotdetails'}>
                  <img
                    src={Arrow}
                    style={{
                      marginRight: "10px",
                      display: "inline-block",
                      width: "25px",
                    }}
                  />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <button
          style={{
            color: "#9A9A9A",
            borderRadius: "10px",
            border: "1px dashed rgb(200,200,200)",
            width: "100%",
            backgroundColor: "#fff",
            fontSize: "19px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span style={{ margin: "2rem 0" }}>
            <NavLink style={{ textDecoration: 'none' }} to={'/app/advisory/registerFarm'}>
              <p className="textMD">Add new farm</p>
            </NavLink> </span>
        </button>
      </div>
    </Layout>
  );
};

export default Farms;

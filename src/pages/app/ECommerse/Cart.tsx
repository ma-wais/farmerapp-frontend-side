import React from "react";
import Layout from "../../../components/app/Layout";
import motor from "../../../assets/img/advisory/motorFull.svg";
import bin from "../../../assets/img/advisory/Trash Icon.svg";
import { NavLink } from "react-router-dom";

const Cart: React.FC = () => {
  const farm = [
    {
      image: motor,
      name: "110 Psi Motor",
      crop: "Brand",
      location: "₹450",
    },
    {
      image: motor,
      name: "110 Psi Motor",
      crop: "Brand",
      location: "₹450",
    },
  ];
  return (
    <Layout showUI goBack pageTitle="Cart">
      <div>
        {farm.map((item) => {
          return (
            <div
              className="layout m20 flexRow contentBetween"
              style={{
                borderRadius: "10px",
                border: "1px solid rgb(200,200,200)",
                padding: "10px",
              }}
            >
              <div className="layout">
                <img src={item.image} alt="" />
                <div className="ml20" style={{ width: "1000%" }}>
                  <h2 className="textMD">{item.name}</h2>
                  <p>{item.crop}</p>
                  <h3 className="textMD">{item.location}</h3>
                </div>
              </div>
              <button
                style={{
                  height: "40px",
                  width: "50px",
                  margin: "20px 20px 0 0",
                  background: "#FFECD6",
                  borderRadius: "50%",
                }}
              >
                <img src={bin} alt="remove" />
              </button>
            </div>
          );
        })}
      </div>
      <NavLink to={"!#"} className="btn primary m40">
        Checkout
      </NavLink>
    </Layout>
  );
};

export default Cart;

import React from "react";
import Layout from "./Layout";
import motor from "../../../assets/img/advisory/motorFull.svg";

const MyOrders: React.FC = () => {
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
    <Layout showUI goBack pageTitle="My Orders">
      <p className="heading m20 "> Active Orders</p>
      <div>
        {farm.map((item) => {
          return (
            <div
              className="layout m20 flexRow"
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
            </div>
          );
        })}
      </div>
      <p className="heading m20 ">Previous Orders</p>
      <div>
        {farm.map((item) => {
          return (
            <div
              className="layout m20 flexRow"
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
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MyOrders;

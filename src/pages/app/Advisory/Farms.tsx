import React, { useEffect, useState } from "react";
import Layout from "../../../components/app/Layout";

import Arrow from "../../../assets/img/app/Arrow 2.svg";
import { NavLink, useNavigate } from "react-router-dom";
import FarmService from "../../../service/FarmService";
import { farmInterface } from "../../../Interface/Farm";
const Farms: React.FC = () => {
  const [farms, setFarms] = useState<farmInterface[]>([]);
  const getFarms = async () => {
    FarmService.getFarm().then(({ data }) => {
      console.log(data);
      const { farm } = data;
      setFarms(farm);
    });
  };
  const navigate = useNavigate();
  useEffect(() => {
    getFarms();
  }, []);
  return (
    <Layout showUI pageTitle="Advisory">
      <p className="heading p40">Registered Plots</p>
      <div style={{}}>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            flexWrap: "wrap",
            justifyContent: "between",
          }}
        >
          {farms.length > 0 &&
            farms?.map((item, index) => {
              return (
                <div
                  className="farm "
                  style={{
                    borderRadius: "10px",
                    flexGrow: "1",
                    border: "1px solid rgb(200,200,200)",
                  }}
                  key={index}
                >
                  <img
                    src={item?.image[0]}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      height: "100px",
                    }}
                    alt=""
                  />
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <h2 style={{ padding: "8px 0 0 10px", color: "black" }}>
                      {item?.name}
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
                      {item?.location}
                    </h3>
                    <NavLink to={"/app/plotdetails/" + item._id}>
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
          <button
            onClick={() => navigate("/app/registerFarm")}
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
              <p className="textMD">Add new farm</p>
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Farms;

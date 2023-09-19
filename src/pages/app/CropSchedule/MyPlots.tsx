import React, { useEffect, useState } from "react";
import Layout from "../../../components/app/Layout";
// import YChill from "../../../assets/img/app/profile_bg.png";
import FarmService from "../../../service/FarmService";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/img/app/logo_bg.svg";
import { NavLink } from "react-router-dom";
const MYFarms: React.FC = () => {
  const [farm, setFarm] = useState<any[]>([]);

  const getMyFarms = async () => {
    const { data } = await FarmService.getFarm();

    setFarm(data.farm);
  };
  useEffect(() => {
    getMyFarms();
  }, []);
  return farm.length > 0 ? (
    <Layout showUI pageTitle="Shedule">
      <p className="heading p40">My Plots</p>
      <div style={{ display: "flex", transform: "" }}>
        {farm.length === 0 ? (
          <div style={{ textAlign: "center" }}>No farms added yet</div>
        ) : (
          farm?.map((item) => {
            return (
              <div
                className="farm m20 ml20"
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgb(200,200,200)",
                }}
              >
                <img
                  src={item?.image}
                  style={{ width: "100%", borderRadius: "10px" }}
                  alt=""
                />
                <div style={{ width: "90%", display: "inline-block" }}>
                  <h2 style={{ padding: "8px 0 0 10px", color: "black" }}>
                    {item?.name}
                  </h2>
                  <h3 style={{ padding: "8px 0 10px 10px" }}>
                    {item?.location?.longitude +
                      " , " +
                      item?.location?.latitude}
                  </h3>
                </div>
              </div>
            );
          })
        )}
      </div>
    </Layout>
  ) : (
    <Layout pageTitle="Crop Schedule" showUI>
      <Box className="textCenter">
        <img src={logo} alt="logo" />
      </Box>
      <Box className="heading textCenter">
        You dont have any farm registered with Us
      </Box>
      <Typography className="textCenter">
        Register your farm to get crop advisory and other resources related to
        your farm and crops that are grown.
      </Typography>
      <NavLink
        to={"/app/registerFarm"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Add your first plot
      </NavLink>
    </Layout>
  );
};

export default MYFarms;

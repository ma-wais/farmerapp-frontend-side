import { NavLink } from "react-router-dom";
import { FC } from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";
import logo from "../../assets/img/app/logo_bg.svg";

const Schedule: FC = () => {
  return (
    <Layout pageTitle="Crop Schedule" showUI>
      <Box className="textCenter">
        <img src={logo} alt="logo" />
      </Box>
      <Box className="heading textCenter">You haven't subscribed to this!</Box>
      <Typography className="textCenter">
        Get a detailed schedule for your farm customized for your crop, region
        and soil culture. Get your crop schedule now!
      </Typography>
      <NavLink
        to={"#!"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Get Crop Schedule
      </NavLink>
    </Layout>
  );
};

export default Schedule;

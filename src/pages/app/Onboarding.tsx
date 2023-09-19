import React from "react";
import Layout from "../../components/app/Layout";
import { Box, Typography } from "@mui/material";
import image from "../../assets/img/app/onboarding_img.svg";
import { ProgressBar } from "../../components/app/ProgressBar";
import { NavLink } from "react-router-dom";

const Onboarding: React.FC = () => {
  return (
    <Layout showUI={false} style={{ padding: 0 }}>
      <img src={image} alt="on boarding image" style={{ marginTop: "100px" }} />
      <Box
        className="bottomSheet"
        sx={{ marginTop: "auto", position: "relative" }}
      >
        <Box
          sx={{ position: "absolute", top: "-20px", left: "0", width: "100%" }}
        >
          <ProgressBar width={50} bgColor="white" />
        </Box>
        <Typography variant="h4" className="heading">
          Lorem Ipsum
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor
        </Typography>
        <NavLink
          to="/app/chooseAccount"
          className="btn primary block"
          style={{ marginTop: "75px" }}
        >
          Next
        </NavLink>
      </Box>
    </Layout>
  );
};

export default Onboarding;

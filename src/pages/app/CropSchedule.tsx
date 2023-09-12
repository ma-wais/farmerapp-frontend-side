import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Layout from "./Layout";
import logo from "../../assets/img/app/logo_bg.svg";
import { NavLink } from "react-router-dom";
import '../../styles/app/page/advisory.css'

const CropSchedule: FC = () => {
  return (
    <Layout pageTitle="Crop Schedule" showUI>
      <Box className="textCenter">
        <img src={logo} alt="logo" />
      </Box>
      <Box className="heading textCenter">
      You haven’t subscribed to this!
      </Box>
      <Typography className="textCenter m20">
      Get a detailed schedule for your farm customized for your crop, region and soil culture. Get your crop schedule now!
      </Typography>
      <NavLink
        to={"/app/advisory/bookConsultation"}
        className={"btn primary block m20"}
      >
        Get Crop Schedule
      </NavLink>
    </Layout>
  );
};

export default CropSchedule;


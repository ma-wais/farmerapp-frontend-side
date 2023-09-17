import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../Layout";
import logo from "../../assets/img/app/logo_bg.svg";
import { NavLink } from "react-router-dom";
import '../../styles/app/page/advisory.css'

const Advisory: FC = () => {
  return (
    <Layout pageTitle="Advisory" showUI>
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
        to={"/app/advisory/registerFarm"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Add your first plot
      </NavLink>
    </Layout>
  );
};

export default Advisory;

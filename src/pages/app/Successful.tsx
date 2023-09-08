import { FC } from "react";
import { Box, Typography } from "@mui/material";
import Layout from "./Layout";
import logo from "../../assets/img/advisory/Vector.svg";
import { NavLink } from "react-router-dom";
import '../../styles/app/page/advisory.css'

const Successful: FC = () => {
  return (
    <Layout showUI={false}>
      <Box className="textCenter m40 p40">
        <img src={logo} alt="logo" style={{padding:'50px'}} />
      </Box>
      <Box className="heading textCenter">
      Booked Successfully 
      </Box>
      <Typography className="textCenter">
      Your call has been scheduled successfully for 23 March 2023.   
      </Typography>
      <NavLink
        to={"#!"}
        className={"btn primary block"}
        style={{ marginTop: "20px" }}
      >
        Go to Home
      </NavLink>
    </Layout>
  );
};

export default Successful;

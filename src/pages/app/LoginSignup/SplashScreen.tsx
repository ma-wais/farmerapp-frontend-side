import React from "react";
import { Box } from "@mui/material";
import logo from "../../../assets/img/app/logo_bg.svg";
import Loading from "../../../components/app/Loading";
import Layout from "./Layout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/app/chooseLanguage");
    }, 2 * 1000);
  }, []);

  return (
    <Layout showUI={false} style={{ padding: 0 }}>
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Box sx={{ textAlign: "center" }} className="myAuto">
          <img src={logo} alt="logo" />
          <Loading style={{ marginTop: "2em" }} />
        </Box>
      </Box>
    </Layout>
  );
};

export default SplashScreen;

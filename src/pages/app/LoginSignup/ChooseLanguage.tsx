import React, { useState } from "react";
import Layout from "../../../components/app/Layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ChooseLanguage: React.FC = () => {
  const [language, setLanguage] = useState("");
  return (
    <Layout showUI={false}>
      <Box className="textCenter">
        <Typography variant="h4" className="heading">
          Choose your <br /> language
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          Please choose your desired language you want to go forward with. You
          can change the language preference later in settings.
        </Typography>
        <ul
          className="list"
          style={{ marginTop: "41px" }}
          onChange={(
            e: React.ChangeEvent<HTMLUListElement & RadioNodeList>
          ) => {
            setLanguage(e.target?.value);
          }}
        >
          <li>
            <input type="radio" name="radio1" value={"en"} />
            <Typography>English</Typography>
          </li>
          <li>
            <input type="radio" name="radio1" value={"hi"} />
            <Typography>Hindi</Typography>
          </li>
          <li>
            <input type="radio" name="radio1" value={"mr"} />
            <Typography>Marathi</Typography>
          </li>
          <li>
            <input type="radio" name="radio1" value={"gr"} />
            <Typography>Gujarati</Typography>
          </li>
          <li>
            <input type="radio" name="radio1" value={"kn"} />
            <Typography>Kannada</Typography>
          </li>
        </ul>
      </Box>
      <NavLink
        to="/app/onboarding"
        className="btn primary mtAuto"
        onClick={() => {
          localStorage.setItem("farm_dss_current_language", language);
        }}
      >
        Next
      </NavLink>
    </Layout>
  );
};

export default ChooseLanguage;

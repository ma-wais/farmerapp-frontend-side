import React, { FC } from "react";
import Layout from "./Layout";
import Input from "../../components/app/Input";
import SimpleInput from "../../components/app/SimpleInput";
import { Box, Typography } from "@mui/material";

import profileImage from "../../assets/img/img002.jpg";
import profileImage1 from "../../assets/img/img001.jpg";
import profileImage2 from "../../assets/img/img003.jpg";

const Messages: FC = () => {
  return (
    <Layout pageTitle="Messages" showUI goBack>
      <SimpleInput>
        <span style={{ marginRight: "13px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <circle
              cx="8.125"
              cy="8.125"
              r="8.125"
              transform="matrix(-1 0 0 1 19.5 3.25)"
              stroke="#ADB4C0"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="bevel"
            />
            <path
              d="M18.9584 20.0417L21.6667 22.7501"
              stroke="#ADB4C0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>
        </span>
        <Input placeholder="Search" type="search" />
      </SimpleInput>
      <ul className="list shadowNone rounded0">
        <li className="borderBottom1 gap1">
          <Box className="avatar">
            <img src={profileImage} alt="profile Image" />
          </Box>
          <Box>
            <Typography className="textDark">Nandana</Typography>
            <Typography className="secondaryText">
              Hello,Nice to meet you!
            </Typography>
          </Box>
          <Box className="msAuto textEnd">
            <Typography>20.12</Typography>
            <span className="bage primary rounded">2</span>
          </Box>
        </li>
        <li className="borderBottom1 gap1">
          <Box className="avatar">
            <img src={profileImage1} alt="profile Image" />
          </Box>
          <Box>
            <Typography className="textDark">Karna</Typography>
            <Typography className="secondaryText">
              thanks for your time.
            </Typography>
          </Box>
          <Box className="msAuto textEnd">
            <Typography>20.01</Typography>
          </Box>
        </li>
        <li className="borderBottom1 gap1">
          <Box className="avatar">
            <img src={profileImage2} alt="profile Image" />
          </Box>
          <Box>
            <Typography className="textDark">Suraj</Typography>
            <Typography className="secondaryText">Send invitation</Typography>
          </Box>
          <Box className="msAuto textEnd">
            <Typography>19.12</Typography>
          </Box>
        </li>
      </ul>
    </Layout>
  );
};

export default Messages;

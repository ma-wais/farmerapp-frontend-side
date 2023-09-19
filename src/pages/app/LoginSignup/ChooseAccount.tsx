import React from "react";
import Layout from "../../../components/app/Layout";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const ChooseAccount: React.FC = () => {
  const [account, setAccount] = useState("");

  useEffect(() => {
    console.log(account);
  }, [account]);
  return (
    <Layout showUI={false}>
      <Box className="textCenter">
        <Typography variant="h4" className="heading">
          Choose your <br />
          Farm DSS account!
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          Welcome! Let's get started by selecting which account you want to
          proceed.
        </Typography>
      </Box>
      <ul className="list radioList bordered" style={{ marginTop: "41px" }}>
        <li onClick={() => setAccount("farmer")}>
          {/* user Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573"
              stroke="#ADB4C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
            <ellipse
              cx="13"
              cy="8.35672"
              rx="4.64286"
              ry="4.64286"
              stroke="#ADB4C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
          <Typography>Farmer</Typography>
          <input type="radio" name="account" id="farmer" />
          <IoCheckmarkCircle
            className="checkmark msAuto"
            size={"1.8em"}
            color="#CA9B64"
          />
        </li>
        <li onClick={() => setAccount("buyer")}>
          {/* user Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573"
              stroke="#ADB4C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
            <ellipse
              cx="13"
              cy="8.35672"
              rx="4.64286"
              ry="4.64286"
              stroke="#ADB4C0"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
          <Typography>Buyer</Typography>
          <input type="radio" name="account" id="buyer" />
          <IoCheckmarkCircle
            className="checkmark msAuto"
            size={"1.8em"}
            color="#CA9B64"
          />
        </li>
      </ul>
      <NavLink
        to={`${account === "" ? "#!" : "/app/signup/" + account}`}
        className={`${
          account === "" ? "disable" : ""
        } btn primary block mtAuto`}
      >
        Proceed
      </NavLink>
    </Layout>
  );
};

export default ChooseAccount;

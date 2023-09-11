import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import Input from "../../components/app/Input";
import Select from "../../components/app/Select";
import { AiTwotonePhone } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import AuthService from "../../service/Auth.js";
const Signup: React.FC = () => {
  const params = useParams();
  const handleSubmit = async () => {
    try {
      const { data } = await AuthService.register({ ...formData });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
    phone: "",
    language: "en",
  });
  useEffect(() => {
    const language = localStorage.getItem("farm_dss_current_language") || "";
    if (language.length > 0 || language !== "null") {
      setFormData((prev) => ({ ...prev, language }));
    }
    if (params.role) {
      setFormData((prev) => ({ ...prev, role: params.role || "" }));
    }
  }, [params]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <Layout showUI={false}>
      <form action="" onSubmit={handleSubmit}>
        {" "}
        <Box className="textCenter">
          <Typography variant="h4" className="heading">
            Let’s create a <br />
            Farm DSS account!
          </Typography>
          <Typography sx={{ marginTop: "12px" }}>
            Welcome! Let's get started by creating your fresh account.
          </Typography>
        </Box>
        <Box className="tabs" sx={{ marginTop: "40px" }}>
          <NavLink to={"/app/signup"}>Sign Up</NavLink>
          <NavLink to={"/app/login"}>Login</NavLink>
        </Box>
        <ul className="list radioList bordered">
          <li>
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
            <Select
              required
              name="role"
              value={formData.role}
              onChange={handleChange}
              label={"Login As"}
            >
              <option value="farmer">Farmer</option>
              <option value="buyer">Buyer</option>
            </Select>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <rect
                x="3.25"
                y="5.41699"
                width="19.5"
                height="15.1667"
                rx="3"
                stroke="#ADB4C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866"
                stroke="#ADB4C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Input type="email" required label={"Email"} />
          </li>
          <li>
            <AiTwotonePhone fontSize={22} />
            <Input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              label={"Phone"}
            />
          </li>

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <rect
                x="3.25"
                y="5.41699"
                width="19.5"
                height="15.1667"
                rx="3"
                stroke="#ADB4C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866"
                stroke="#ADB4C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label={"Email Address"}
            />
          </li>
          <li>
            <MdPassword fontSize={22} />
            <Input
              required
              type="password"
              value={formData.password}
              label={"Password"}
              onChange={handleChange}
              name="password"
            />
          </li>
          <li>
            <MdPassword fontSize={22} />
            <Input
              required
              type="password"
              value={formData.confirmPassword}
              label={"Confirm Password"}
              onChange={handleChange}
              name="confirmPassword"
            />
          </li>
        </ul>
        <Box className="mtAuto">
          <Box
            sx={{
              marginBottom: "21px",
              marginTop: "21px",
              display: "flex",
              alignItems: "center",
              gap: "1em",
            }}
          >
            <input type="checkbox" />
            <label>I agree to all user agreement and privacy policy.</label>
          </Box>
          <button className={`btn primary block`}>Create Account</button>
        </Box>
      </form>
    </Layout>
  );
};

export default Signup;

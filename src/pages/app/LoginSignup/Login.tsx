import React from "react";
import Layout from "../../../components/app/Layout.tsx";
import { Box, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../../components/app/Input";
import Select from "../../../components/app/Select";
import { MdPassword } from "react-icons/md";
import AuthService from "../../../service/Auth.ts";
import { store } from "../../../redux/store.ts";
import { data } from "../../../redux/auth/actions.ts";
import Cookies from "js-cookie";
import { URL_PREFIX } from "../../../App.tsx";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    phone: "",

    role: "farmer",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: res } = await AuthService.login({ ...formData });
      if (res?.accessToken) {
        Cookies.set("accessToken", res.accessToken);
        Cookies.set("refreshToken", res.refreshToken);
        store.dispatch(data({ email: formData.email, phone: formData.phone }));
        navigate(`/${URL_PREFIX}/verifyNewAccount`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout showUI={false}>
      <Box className="textCenter">
        <Typography variant="h4" className="heading">
          Hello, <br />
          Welcome Back!
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          Please enter your email and password details to access your account.
        </Typography>
      </Box>

      <Box className="tabs" sx={{ marginTop: "40px" }}>
        <NavLink to={"/app/signup"}>Sign Up</NavLink>
        <NavLink to={"/app/login"}>Login</NavLink>
      </Box>

      <ul className="list radioList bordered">
        <li>
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
          {/* Email Icon */}
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
            type="text"
            name="phone"
            maxLength={11}
            value={formData.phone}
            onChange={handleChange}
            placeholder="12345678"
            label={"Phone"}
          />
        </li>
        <Typography textAlign={"center"} margin={"15px 0px"}>
          OR
        </Typography>
        <li>
          {/* Email Icon */}
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
            placeholder={"farmer@farm.com"}
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
      </ul>

      <Box className="mtAuto">
        <button onClick={handleSubmit} className={`btn primary block`}>
          Log In
        </button>
      </Box>
    </Layout>
  );
};

export default Login;

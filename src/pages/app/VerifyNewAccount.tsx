import React, { useState } from "react";
import Layout from "./Layout";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Input from "../../components/app/Input";
import AuthService from "../../service/Auth.ts";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/auth/selectors.js";
import { URL_PREFIX } from "../../App.js";
import { store } from "../../redux/store.js";
import { login } from "../../redux/auth/actions.js";
interface OTP {
  letter1: string | number;
  letter2: string | number;
  letter3: string | number;
  letter4: string | number;
}
const VerifyNewAccount: React.FC = () => {
  const data = useSelector(selectData);
  const navigate = useNavigate();
  const [otp, setOtp] = useState<OTP>({
    letter1: "",
    letter2: "",
    letter3: "",
    letter4: "",
  });
  const handleSubmit = async () => {
    let letters = "";
    for (let values of Object.keys(otp)) {
      letters += otp[values];
    }
    if (data?.email) {
      AuthService.verifyOtp({
        email: data?.email,
        otp: parseInt(letters),
      }).then(async () => {
        const { data: me } = await AuthService.me();
        console.log(me);
        store.dispatch(login(me));
        navigate(`/${URL_PREFIX}/`);
      });
    } else if (data?.phone) {
      AuthService.verifyOtp({
        phone: data?.phone,
        otp: parseInt(letters),
      }).then(async () => {
        const { data: me } = await AuthService.me();
        console.log(me);
        store.dispatch(login(me));
        navigate(`/${URL_PREFIX}/`);
      });
    }
  };
  return (
    <Layout showUI={false}>
      <Box className="textCenter">
        <Typography variant="h4" className="heading">
          Verify your <br />
          Farm DSS account!
        </Typography>
        <Typography sx={{ marginTop: "12px" }}>
          We have sent a verification code to the email address you provided.
        </Typography>
      </Box>

      <Typography
        className="textMD textDark"
        sx={{ marginTop: "50px", marginBottom: "17px" }}
      >
        Enter the Verification Code
      </Typography>

      <ul className="list radioList bordered flexRow">
        <li>
          <Input
            className="textCenter"
            type="text"
            value={otp.letter1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOtp((prev: OTP) => ({ ...prev, letter1: e.target.value }));
            }}
            label={""}
            maxLength={1}
          />
        </li>
        <li>
          <Input
            className="textCenter"
            type="text"
            value={otp.letter2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOtp((prev: OTP) => ({ ...prev, letter2: e.target.value }));
            }}
            label={""}
            maxLength={1}
          />
        </li>
        <li>
          <Input
            className="textCenter"
            type="text"
            value={otp.letter3}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOtp((prev: OTP) => ({ ...prev, letter3: e.target.value }));
            }}
            label={""}
            maxLength={1}
          />
        </li>
        <li>
          <Input
            className="textCenter"
            type="text"
            value={otp.letter4}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setOtp((prev: OTP) => ({ ...prev, letter4: e.target.value }));
            }}
            label={""}
            maxLength={1}
          />
        </li>
      </ul>

      <Box className="textSM textDark textCenter" sx={{ marginTop: "20px" }}>
        If you didn’t receive a code?
        <a
          href="#!"
          className="textPrimary fwMedium"
          style={{ textDecoration: "none" }}
          onClick={() => {
            if (data?.email) {
              AuthService.resendOtp({ email: data?.email });
            } else if (data?.phone) {
              AuthService.resendOtp({ phone: data?.phone });
            }
          }}
        >
          Resend
        </a>
      </Box>

      <Box className="mtAuto">
        <button onClick={handleSubmit} className={`btn primary block`}>
          Verify Account
        </button>
      </Box>
    </Layout>
  );
};

export default VerifyNewAccount;

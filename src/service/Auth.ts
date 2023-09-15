import axios from "axios";
import { getBackendUrl } from "./getBackendUrl.js";
import { middleField } from "./middlefield.js";

class Auth {
  baseURL=''
  api;
  constructor(baseURL:string) {
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL,
    });
    middleField(this.api);
  }

  register({ role='', email='', phone='', password='', confirmPassword='', name='' }) {
    return this.api.post("/register", {
      role,
      email,
      name,
      phone,
      password,
      confirmPassword,
    });
  }
  verifyOtp({ otp=0, email = "", phone = "" }) {
    return this.api.post("/verifyOtp", {
      otp,
      email,
      phone,
    });
  }
  resentOtp({ email = "", phone = "" }) {
    return this.api.post("/resendOtp", {
      email,
      phone,
    });
  }
  me() {
    return this.api.get("/me");
  }

  login({ email='', password = "", role='', phone = "" }) {
    return this.api.post("/login", { email, password, role, phone });
  }

  refresh({ accessToken='', refreshToken='' }) {
    const raw = JSON.stringify({ accessToken, refreshToken });

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    };

    return fetch(this.baseURL + "/refresh", requestOptions);
  }

  requestPasswordReset({ email='' }) {
    return this.api.post("/requestPasswordReset", { email });
  }

  // TODO
  resetPassword({ resetToken='', newPassword='' }) {
    return this.api.post("/resetPassword", { resetToken, newPassword });
  }

  // TODO
  confirmEmail({ email='' }) {
    return this.api.post("/confirmEmail", { email });
  }
  resendOtp({ email='' }) {
    return this.api.post("/resendotp", { email });
  }
}

export default new Auth(`${getBackendUrl()}/auth`);
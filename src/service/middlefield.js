import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { logout, setLoading } from "../redux/auth/actions";
import { store } from "../redux/store";
import { toast } from "react-toastify";

export const middleField = (api) => {
  api.interceptors.response.use(
    (response) => {
      store.dispatch(setLoading(false));
      if (response?.data?.message) toast.success(response.data.message);
      return response;
    },
    (error) => {
      store.dispatch(setLoading(false));
      const { response } = error;
      if (response) {
        const { data } = response;
        if (data && data.message) {
          if (
            data.message === "Invalid access_token" ||
            data.message?.toLowerCase?.() === "jwt must be provided"
          ) {
            store.dispatch(logout());
            window.location.href = "/";
            return;
          }

          toast.error(data.message);
        }
      }
      return Promise.reject(error);
    }
  );

  api.interceptors.request.use(
    async (config) => {
      async function refresh({ accessToken, refreshToken }) {
        var raw = JSON.stringify({ accessToken, refreshToken });

        var requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: raw,
        };

        return fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/auth/refresh",
          requestOptions
        );
      }
      store.dispatch(setLoading(true));

      let access_token = Cookies.get("accessToken");
      let refresh_token = Cookies.get("refreshToken");

      if (access_token) {
        const decodedToken = jwt_decode(access_token);
        if (5000 + decodedToken.exp * 1000 <= new Date()) {
          const result = await refresh({
            accessToken: access_token,
            refreshToken: refresh_token,
          });
          const response = await result.json();

          if (!response?.accessToken) {
            store.dispatch(logout());
            window.location.href = "/";
            return;
          }

          Cookies.set("accessToken", response?.accessToken);
          Cookies.set("refreshToken", response?.refreshToken);

          access_token = response?.accessToken;
          refresh_token = response?.refreshToken;
        }
      }

      return {
        ...config,
        headers: {
          access_token,
          refresh_token,
        },
      };
    },
    (error) => {
      store.dispatch(setLoading(false));
      return Promise.reject(error);
    }
  );
};

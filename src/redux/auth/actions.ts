import { LOADING, LOGIN, LOGOUT, DATA } from "./constants";

export const login = (user={}) => ({
  type: LOGIN,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
export const data = (data={}) => ({
  type: DATA,
  payload: data,
});

export const setLoading = (loading=false) => ({
  type: LOADING,
  payload: loading,
});

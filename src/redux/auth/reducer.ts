import { LOADING, LOGIN, LOGOUT, DATA } from "./constants";

const initialState = {
  user: null,
  otpdata: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        otpdata: null,
      };
    case DATA:
      return {
        ...state,
        otpdata: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

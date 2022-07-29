// import { GET_FAILURE } from "./action";
import {
  SIGN_OUT,
  SIGN_IN,
  SIGN_UP,
  GET_SUCCESS,
  GET_FAILURE,
  GET_REQUEST,
} from "./action";

const initState = {
  user: {},
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        user: payload,
      };

    case SIGN_UP:
      return {
        ...state,
        user: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: {},
      };

    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

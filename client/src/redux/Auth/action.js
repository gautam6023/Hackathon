import axios from "axios";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";
export const GET_REQUEST = "GET_REQUEST";

const getRequest = () => ({
  type: GET_REQUEST,
});

const getFailure = () => ({
  type: GET_FAILURE,
});

const signupType = (payload) => ({
  type: SIGN_UP,
  payload,
});

export const createAccount = (payload) => async (dispatch) => {
  dispatch(getRequest());
  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    console.log(payload, "payload");
    const { data } = await axios.post("http://localhost:7000/user", payload);

    // console.log(data);
  } catch (e) {
    console.log(e);
    if (e.response.data.message) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
    console.log(e);
  }
};

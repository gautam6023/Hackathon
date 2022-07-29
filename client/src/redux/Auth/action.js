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

export const createAccount = (payload, navigate) => async (dispatch) => {
  dispatch(getRequest());
  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    console.log(payload, "payload");
    const { data } = await axios.post("http://localhost:7000/user", payload, {
      withCredentials: true,
    });
    console.log(data, "data");
    dispatch(signupType(data.UserData));
    if (data) {
      navigate("/");
    }
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

const signinType = (payload) => ({
  type: SIGN_IN,
  payload,
});

export const signinAccount = (payload, navigate) => async (dispatch) => {
  if (!payload.email && !payload.password) return alert("Invalid Input");

  dispatch(getRequest());

  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    console.log(payload, "payload");
    const { data } = await axios.post(
      "http://localhost:7000/user/signin",
      payload,
      {
        withCredentials: true,
      }
    );
    console.log(data, "data");

    dispatch(signinType(data.UserData));
    if (data) {
      navigate("/");
    }
  } catch (e) {
    console.log(e);
    if (e.response?.data?.message) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
    console.log(e);
  }
};

export const getUser = () => async (dispatch) => {
  dispatch(getRequest());

  try {
    // console.log(process.env.REACT_APP_BASE_URL);

    const { data } = await axios.get("http://localhost:7000/user/getuser", {
      withCredentials: true,
    });
    console.log(data, "getUser");

    if (data) {
      //   navigate("/");
    }

    dispatch(signinType(data));
  } catch (e) {
    console.log(e);
    if (e.response?.data?.message) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
    console.log(e);
  }
};

const signoutType = () => ({
  type: SIGN_OUT,
});

export const signoutAccount = (navigate) => async (dispatch) => {
  dispatch(getRequest());

  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    const { data } = await axios.post("http://localhost:7000/user/signout", {
      withCredentials: true,
      credentials: 'include',
    });

    dispatch(signoutType());
    navigate("/login");
  } catch (e) {
    console.log(e);
    if (e.response?.data?.message) {
      alert(e.response.data.message);
    } else {
      console.log(e);
    }
    console.log(e);
  }
};

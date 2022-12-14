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
  let token = localStorage.getItem("token");
  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    console.log(payload, "payload");
    const { data } = await axios.post(
      "https://server-marvel.herokuapp.com/user",
      payload,
      {
        withCredentials: true,
        credentials: "include",
      }
          );

          token =data.token;
    localStorage.setItem('token',token)

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
  let token = localStorage.getItem("token");

  try {
    // console.log(process.env.REACT_APP_BASE_URL);
    console.log(payload, "payload");
    const { data } = await axios.post(
      "https://server-marvel.herokuapp.com/user/signin",
      payload,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(data, "data");
       token = data.token
     localStorage.setItem('token',token)

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
  let token = localStorage.getItem("token");
  try {
    // console.log(process.env.REACT_APP_BASE_URL);

    const { data } = await axios.get(
      "https://server-marvel.herokuapp.com/user/getuser",
      // "https://localhost:7000/getuser",
       {
       withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    );

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
    let token = localStorage.getItem("token");
    const { data } = await axios.post(
      "https://server-marvel.herokuapp.com/user/signout",
      {
        withCredentials: true,
         headers: {
           Authorization: token,
         },
       }
    );
     localStorage.removeItem("token");
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

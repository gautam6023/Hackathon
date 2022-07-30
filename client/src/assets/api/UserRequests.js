import axios from "axios";

const API = axios.create({ baseURL: `https://server-marvel.herokuapp.com` });

export const getUser = (id) =>
  API.get(`/user/userbyid/${id}`, { withCredentials: true });

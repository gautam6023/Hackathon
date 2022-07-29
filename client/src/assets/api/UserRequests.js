import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:7000` });

export const getUser = (id) =>
  API.get(`/user/userbyid/${id}`, { withCredentials: true });

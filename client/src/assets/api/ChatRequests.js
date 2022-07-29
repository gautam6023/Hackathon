import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

export const userChats = (id) =>
  API.get(`/chat/${id}`, { withCredentials: true });

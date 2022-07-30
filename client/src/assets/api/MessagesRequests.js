import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000" });

export const fetchMessages = (id) =>
  API.get(`/msg/${id}`, {
    withCredentials: true,
  });

export const addMessage = (payload) =>
  API.post(`/msg`, payload, {
    withCredentials: true,
  });

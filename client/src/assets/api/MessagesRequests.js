import axios from "axios";

const API = axios.create({ baseURL: "https://server-marvel.herokuapp.com" });

export const fetchMessages = (id) =>
  API.get(`/msg/${id}`, {
    withCredentials: true,
  });

export const addMessage = (payload) =>
  API.post(`/msg`, payload, {
    withCredentials: true,
  });

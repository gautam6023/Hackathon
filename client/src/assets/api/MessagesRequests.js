import axios from "axios";

const API = axios.create({ baseURL: "https://server-marvel.herokuapp.com" });

let token = localStorage.getItem('token')

export const fetchMessages = (id) =>
  API.get(`/msg/${id}`, {
    withCredentials: true,
     headers: {
       Authorization: token,
     },
   });

export const addMessage = (payload) =>
  API.post(`/msg`, payload, {
    withCredentials: true,
     headers: {
       Authorization: token,
     },
   });

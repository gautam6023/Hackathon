import axios from "axios";

const API = axios.create({ baseURL: `https://server-marvel.herokuapp.com` });


let token = localStorage.getItem('token')


export const getUser = (id) =>
  API.get(`/user/userbyid/${id}`, {
    withCredentials: true,
     headers: {
       Authorization: token,
     },
   });

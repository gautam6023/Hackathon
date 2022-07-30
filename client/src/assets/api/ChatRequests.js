import axios from "axios";

const API = axios.create({ baseURL: "https://server-marvel.herokuapp.com" });
// const API = axios.create({ baseURL: "http://localhost:7000" });




let token = localStorage.getItem('token')


export const userChats = (id) =>
  API.get(`/chat/${id}`, {
    withCredentials: true,
     headers: {
       Authorization: token,
     },
   });
  export const addNewChat = (receverId, myId) =>
  API.post(
    `/chat`,
    { userId: myId, receiverId: receverId },
     {
      withCredentials: true,
       headers: {
         Authorization: token,
       },
     }
  );

import axios from "axios";

const API = axios.create({ baseURL: "https://server-marvel.herokuapp.com" });

export const userChats = (id) =>
  API.get(`/chat/${id}`, { withCredentials: true });

export const addNewChat = (receverId, myId) =>
  API.post(
    `/chat`,
    { userId: myId, receiverId: receverId },
    {
      withCredentials: true,
    }
  );

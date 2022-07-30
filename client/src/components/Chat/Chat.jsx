import React, { useEffect, useRef, useState } from "react";

import { ChatWrapper } from "./Chat.styled";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";
import Conversation from "./Conversation";

import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";
import { userChats, addNewChat } from "../../assets/api/ChatRequests";
import { useSelector } from "react-redux";
import ChatBox from "./ChatBox";
import { io } from "socket.io-client";
// import { createChat } from "../../../../server/controllers/Chat.controller";

const Chat = () => {
  const { user } = useSelector((state) => state.isAuth);
  const [coversations, setConversations] = useState([]);
  const [currantChat, setCurrantChat] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendSocketMessage, setSocketSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://server-marvel.herokuapp.com/");
    socket.current.emit("newUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    if (sendSocketMessage !== null) {
      console.log(sendSocketMessage, "sec");
      socket.current.emit("sendMessage", sendSocketMessage);
    }
  }, [sendSocketMessage]);

  useEffect(() => {
    if (receiveMessage !== null) {
      socket.current.on("receiveMessage", (data) => {
        setReceiveMessage(data);
      });
    }
  }, []);
  const openModal = () => {
    Swal.fire({
      title: "Submit Email of User",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        // console.log(login);
        let token = localStorage.getItem("token");
        console.log(token)
        return axios
          .post(
            `https://server-marvel.herokuapp.com/user/check`,
            // 'http://localhost:7000/user/check',
            { email: login },
            {
              withCredentials: true,
               headers: {
                 Authorization: token,
               },
             }
          )
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            console.log(error);
            Swal.showValidationMessage(
              `Request failed: ${error.response.data.message}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        // console.log(result.value.user._id, user._id, "cheeeek");
        createChat(result.value.user._id, user._id);
      }
    });
  };

  const createChat = async (reveiversId, myId) => {
    try {
      const { data } = await addNewChat(reveiversId, myId);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        // console.log(data.chatData, "chat");
        setConversations([...data.chatData]);
      } catch (e) {
        console.log(e);
      }
    };

    getChats();
  }, [user._id]);

  return (
    <ChatWrapper>
      <div className="conversationCon">
        <div className="addNewConversation">
          <span>
            <RiSearchLine />
          </span>
          <input type="text" placeholder="Search or start new conversation" />
          <span className="addNew" onClick={() => openModal()}>
            <AiOutlinePlus />
          </span>
        </div>
        <div className="border"></div>
        <div className="conContainer">
          {coversations.map((el, i) => {
            return (
              <Conversation
                onClick={() => setCurrantChat(el)}
                key={i}
                data={el}
                currantUserId={user._id}
                {...el}
              />
            );
          })}
        </div>
      </div>
      <div className="chatCon">
        <ChatBox
          chat={currantChat}
          currentUser={user._id}
          setSocketSendMessage={setSocketSendMessage}
          receiveMessage={receiveMessage}
        />
      </div>
    </ChatWrapper>
  );
};

export default Chat;

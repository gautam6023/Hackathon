import React, { useEffect, useState } from "react";
import { getUser } from "../../assets/api/UserRequests";
import { ChatBoxWrapper } from "./ChatBox.styled";
import UserIcon from "../../assets/Icons/user.png";
import { addMessage, fetchMessages } from "../../assets/api/MessagesRequests";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { BiSend } from "react-icons/bi";
const ChatBox = ({
  chat,
  currentUser,
  setSocketSendMessage,
  receiveMessage,
}) => {
  const [userData, setUserData] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  //Getting userdata
  useEffect(() => {
    const UserId = chat?.members?.find((user) => user != currentUser);

    const getUserData = async () => {
      try {
        const { data } = await getUser(UserId);
        // console.log(data, "user");
        setUserData(data.user);
      } catch (e) {
        console.log(e);
      }
    };

    if (chat != null) getUserData();
  }, [chat, currentUser]);

  //Getting getting messages
  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await fetchMessages(chat._id);
        // console.log(data);
        setMessages(data.messageData);
      } catch (e) {
        console.log(e);
      }
    };

    if (chat != null) getMessages();
  }, [chat]);

  const handleSendMessage = () => {
    if (!text) return alert("invalid message");

    const Message = {
      message: text,
      userId: currentUser,
      chatId: chat._id,
    };

    //sending message to database
    sendMessage(Message);

    //sending message to socket
    const receiverId = chat.members.find((id) => id != currentUser);
    setSocketSendMessage({ receiverId, ...Message });

    console.log(receiverId, Message, "rec");
  };

  const sendMessage = async (payload) => {
    try {
      const { data } = await addMessage(payload);
      setMessages([...messages, data.messageData]);
      setText("");
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  //checking recive message
  useEffect(() => {
    if (receiveMessage != null && receiveMessage?.chatId === chat?._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);
  return (
    <ChatBoxWrapper>
      {chat ? (
        <>
          <div className="header">
            <span className="avatarCon">
              <img src={userData?.imgUrl ? userData.imgUrl : UserIcon} alt="" />
            </span>
            <span className="username">
              {userData?.firstName} {userData?.lastName}
            </span>
          </div>
          <div className="messageContainer">
            {messages.map((el, i) => {
              return (
                <div
                  key={el._id}
                  className={
                    el.userId == currentUser ? "myMessage" : "notMyMessage"
                  }
                >
                  <p>{el.message}</p>
                  <p>{format(el.createdAt)}</p>
                </div>
              );
            })}
          </div>
          <div className="typeContainer">
            {/* <InputEmoji theme="dark" /> */}
            <div className="inputCon">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="typeMessage"
                placeholder="Type here..."
              />
            </div>
            <span onClick={() => handleSendMessage()}>
              <BiSend />
            </span>
          </div>
        </>
      ) : (
        <h1>Start Messaging</h1>
      )}
    </ChatBoxWrapper>
  );
};

export default ChatBox;

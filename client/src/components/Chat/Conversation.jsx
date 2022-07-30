import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UserIcon from "../../assets/Icons/user.png";
import { getUser } from "../../assets/api/UserRequests";

const Wrapper = styled.div`
  /* border: 1px solid white; */
  border-bottom: 1px solid var(--border);
  height: 70px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  gap: 15px;
  cursor: pointer;
  .userDetails {
    /* border: 1px solid white; */
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;

    .name {
      font-weight: 600;
    }

    .status {
      font-size: 12px;
      color: #3fd25d;
      font-weight: 500;
    }
  }
  span {
    img {
      width: 55px;
      aspect-ratio: 1;
      border-radius: 1000px;
    }
  }
  &:hover {
    border-bottom: 1px solid var(--hovercon);
    border-radius: 10px;
    transition: 300ms;
    background-color: var(--hovercon);
  }
`;

const Conversation = ({ imgUrl, name, data, currantUserId, onClick }) => {
  // console.log(data, currantUser);

  //Person with we are chatting
  const [secondUser, setSecondUser] = useState({});

  useEffect(() => {
    const secondUserId = data.members.find((id) => id != currantUserId);
    // console.log(secondUserId);
    const getUserdata = async () => {
      try {
        const { data } = await getUser(secondUserId);
        // console.log(data, "secondUser");
        setSecondUser(data.user);
      } catch (e) {
        console.log(e);
      }
    };

    getUserdata();
  }, []);

  return (
    <Wrapper onClick={onClick}>
      <span>
        <img src={secondUser.imgUrl ? secondUser.imgUrl : UserIcon} alt="" />
      </span>
      <div className="userDetails">
        <p className="name">{secondUser.firstName}</p>
        <p className="status">Online</p>
      </div>
    </Wrapper>
  );
};

export default Conversation;

import React from "react";
import styled from "styled-components";
import UserIcon from "../../assets/Icons/user.png";

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

const Conversation = ({ imgUrl, name }) => {
  return (
    <Wrapper>
      <span>
        <img src={imgUrl ? imgUrl : UserIcon} alt="" />
      </span>
      <div className="userDetails">
        <p className="name">{name}</p>
        <p className="status">Online</p>
      </div>
    </Wrapper>
  );
};

export default Conversation;

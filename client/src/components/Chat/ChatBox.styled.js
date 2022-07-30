import styled from "styled-components";

export const ChatBoxWrapper = styled.div`
  /* border: 1px solid blue; */
  border-left: 1px solid var(--recieverBorder);
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 75px;
    /* border: 1px solid black; */
    /* background-color: #334155; */
    /* background-color: #202c33; */
    /* background-color: #1f2029; */
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px;
    gap: 20px;
    .avatarCon {
      /* border: 1px solid red; */
      /* height: 100%; */
      img {
        width: 60px;
        border-radius: 50%;
      }
    }

    .username {
      font-size: 25px;
      color: #ffffff;
      font-weight: 600;
    }
  }

  .messageContainer {
    /* height: 100%; */
    flex-grow: 1;
    /* border: 1px solid red; */
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
    padding: 15px;
    position: relative;
    .myMessage {
      align-self: flex-end;
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      /* background-color: #0284c7; */
      background-color: var(--recieverBack);
      padding: 10px 15px;
      /* background-color: red; */
      border: 1px solid var(--recieverBorder);
      border-radius: 10px 0px 10px 10px;
      text-align: left;
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 5px;
      p:last-child {
        font-size: 10px;
        /* color: #94a3b8; */
        font-weight: 500;
      }
    }

    .notMyMessage {
      color: #ffffff;
      font-size: 18px;
      font-weight: 600;
      /* background-color: #0284c7; */
      background-color: var(--recieverBack);
      padding: 10px 15px;
      /* background-color: red; */
      border: 1px solid var(--recieverBorder);
      border-radius: 10px 10px 10px 0;
      text-align: left;
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 5px;
      p:last-child {
        font-size: 10px;
        /* color: #94a3b8; */
        font-weight: 500;
      }
    }
  }
  .typeContainer {
    /* position: absolute; */
    /* border: 1px solid white; */
    height: 50px;
    bottom: 10px;
    /* width: 99%; */
    /* left: 50%; */
    border-radius: 10px;
    /* transform: translate(-50%, 0); */

    display: flex;
    box-sizing: border-box;
    /* padding: 5px; */
    align-items: center;
    justify-content: center;
    gap: 10px;
    .inputCon {
      background-color: var(--inputBack);
      height: 100%;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-radius: 10px;
      /* border: 1px solid red; */
      box-sizing: border-box;
      padding: 5px 10px;

      input {
        height: 90%;
        width: 95%;
        background-color: var(--inputBack);
        text-indent: 10px;
        font-size: 20px;
        color: #ffffff;
        font-weight: 400;
        /* border: 1px solid white; */
        &::placeholder {
          font-size: 18px;
          font-weight: 500;
        }

        &:focus {
          outline: 0;
        }

        border: 0;
      }
    }
    span {
      /* border: 1px solid black; */
      height: 45px;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      font-size: 28px;
      border-radius: 1000px;
      justify-content: center;
      /* background-color: var(--recieverBack); */
      background-color: #1e8254;
      border: 1px solid var(--recieverBorder);
      cursor: pointer;
      color: #ffffff;
    }
  }
`;

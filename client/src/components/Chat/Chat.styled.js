import styled from "styled-components";

export const ChatWrapper = styled.div`
  height: 830px;
  width: 99%;
  margin: auto;
  background-color: var(--background);
  display: flex;
  & > div {
    /* border: 2px solid black; */
    border-radius: 5px;
  }
  .conversationCon {
    width: 22%;
    box-sizing: border-box;
    padding: 10px;

    .addNewConversation {
      width: 100%;
      height: 4%;
      display: flex;
      align-items: center;
      /* background-color: #64748b; */
      background-color: var(--inputBack);
      /* border: 1px solid white; */
      box-sizing: border-box;
      padding: 5px;
      justify-content: center;
      border-radius: 8px;

      input {
        width: 83%;
        height: 95%;
        /* background-color: #64748b; */
        background-color: var(--inputBack);
        border: 0;
        text-indent: 14px;
        font-size: 18px;
        color: white;
        &:focus {
          outline: 0;
        }
        &::placeholder {
          color: white;
          font-size: 14px;
          opacity: 80%;
        }
      }
      span {
        flex-grow: 1;
        color: white;
      }

      .addNew,
      span {
        /* border: 1px solid black; */
        margin-right: 8px;
        height: 100%;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background-color: #475569; */
        /* opacity: 40%; */
        border-radius: 8px;
        cursor: pointer;
      }
    }

    .conContainer {
      & {
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll;
      }

      &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
      }
      /* border: 1px solid white; */
      height: 96%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      overflow-y: scroll;
    }
  }
  .border {
    margin: 10px 0;
    background-color: var(--border);
    height: 1px;
  }
  .chatCon {
    flex-grow: 1;
  }
`;

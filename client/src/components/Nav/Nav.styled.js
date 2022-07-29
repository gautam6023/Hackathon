import styled from "styled-components";

export const NavWrapper = styled.nav`
  border: 1px solid black;
  height: 55px;
  width: 100%;
  margin: auto;
  background-color: black;
  display: flex;
  & > div {
    /* border: 1px solid white; */
    width: 50%;
    height: 100%;
  }

  .logoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    display: flex;
    gap: 15px;
    p {
      font-weight: 600;
      font-size: 18px;
    }
    p::first-letter {
      font-size: 28px;
      color: #6366f1;
    }
  }

  .login {
    /* background-color: red; */

    .user {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      /* border: 1px solid black; */
      p {
        color: #ffffff;
        display: flex;
        align-items: center;
        font-size: 18px;
        span:last-child {
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 25px;
          margin-left: 10px;
        }
      }
    }
  }
`;

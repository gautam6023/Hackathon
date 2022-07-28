import React from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
const Navbar = () => {
  return (
    <NavWrapper>
      <div className="logoContainer">
        <p className="we">We Communicate</p>
      </div>
      <div className="login">
        <div className="user">
          <p>
            <span>User</span>
            <span>
              <RiAccountCircleFill />
            </span>
          </p>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

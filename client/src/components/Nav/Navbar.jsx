import React, { useEffect } from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/Auth/action";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.isAuth);
  console.log(user);
  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    }
  }, []);

  return (
    <NavWrapper>
      <div className="logoContainer">
        <p className="we">We Communicate</p>
      </div>
      <div className="login">
        <div className="user">
          <div>
            <span>
              {user ? (
                <img className="profilePic" src={user.imgUrl} alt="" />
              ) : (
                <RiAccountCircleFill />
              )}
            </span>
            <span className="username">{user ? user.firstName : "User"}</span>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

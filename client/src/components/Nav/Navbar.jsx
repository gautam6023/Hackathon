import React, { useEffect } from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getUser, signoutAccount } from "../../redux/Auth/action";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.isAuth);
  console.log(user);
  useEffect(() => {
    if (!user.UserData) {
      dispatch(getUser());
    }
  }, [])

  const handleSignOut = ()=>{
   
    dispatch(signoutAccount(navigate))

  }


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
      {user?.firstName ? <button onClick={handleSignOut}>Signout</button> : null}
    </NavWrapper>
  );
};

export default Navbar;

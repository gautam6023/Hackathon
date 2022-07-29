import React, { useEffect } from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/Auth/action";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.isAuth);
  console.log(user);
  // useEffect(() => {
  //   if (!user.firstName) {
  //     dispatch(getUser());
  //   }
  // }, []);

  return (
    <NavWrapper>
      <div className="logoContainer">
        <p className="we" onClick={() => navigate("/")}>
          We Communicate
        </p>
      </div>
      <div className="login">
        <div className="user">
          <div>
            <span>
              {user.imgUrl ? (
                <img className="profilePic" src={user.imgUrl} alt="" />
              ) : (
                <RiAccountCircleFill />
              )}
            </span>
            <span className="username">
              {user.firstName ? user.firstName : "User"}
            </span>
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

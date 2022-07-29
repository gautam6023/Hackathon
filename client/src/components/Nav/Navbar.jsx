import React, { useEffect } from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/Auth/action";
const Navbar = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.isAuth)
  console.log(user,"user in Navbar")
  
  const handleSignout = ()=>{

  }

   useEffect(()=>{
    if(!user?.UserData){
      dispatch(getUser())
    }

   },[])
  

  return (
    <NavWrapper>
      <div className="logoContainer">
        <p className="we">We Communicate</p>
      </div>
      <div className="login">
        <div className="user">
          <p>
            <span>{user.firstName}</span>
            <span>
              <RiAccountCircleFill /> <span onClick={handleSignout}>SIGN_OUT</span>
            </span>
          </p>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

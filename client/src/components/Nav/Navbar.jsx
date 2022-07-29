import React, { useEffect } from "react";
import { NavWrapper } from "./Nav.styled";
import { RiAccountCircleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/Auth/action";
const Navbar = () => {
  const dispatch = useDispatch()
  const {UserData} = useSelector((state)=>state.isAuth.user)
 


   useEffect(()=>{
    if(!UserData){
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
            <span>{UserData?.firstName}</span>
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

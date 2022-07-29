import React from "react";

import RightSection from "../Sign pages/RightSection";
import Bottom from "../Sign pages/Bottom";
import LeftSection from "./LeftSection";
const Login = () => {
  return (
    <>
     
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#fbfcfd",
          paddingBottom: "100px",
        }}
      >
        <LeftSection />
       
      </div>
      <Bottom />
    </>
  );
};

export default Login;

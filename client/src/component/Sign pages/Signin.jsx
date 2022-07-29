
import Bottom from "./Bottom";
//import RightSection from "./RightSection";
import Common from "./common";
import Left from "./LeftSection";
const Signin = () => {
  return (
    <>
     
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#fbfcfd",
          padding: " 0 0 100px 0",
        }}
      >
        <Left />
        <Common />
      </div>
      <Bottom />
    </>
  );
};

export default Signin;

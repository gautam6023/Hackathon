import React, { useContext, useState } from "react";
import axios from "axios";
import styled from "./LeftSection.module.css";
//import { CartCount_Context } from "../../Context/cartCounter";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";



const Left = () => {
  const navigate = useNavigate();
  const [formData, Setformdata] = useState({});
  const [pass, Setpass] = useState("text");
  //const { isLogged, setIsLogged } = useContext(CartCount_Context);
  const [logError, setlogError] = useState({
    error: "",
    message: "",
  });

  const handleclick = () => {
    Setpass(pass === "text" ? "password" : "text");
  };
  const handlechange = (e) => {
    let name = e.target.name;
    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let timer
    clearTimeout(timer);
    axios
      .post("", formData)
      .then((res) => {
        if (res.data.error) {
          setlogError(res.data);
          timer = setTimeout(() => {
            setlogError({
              error: "",
              message: "",
            });
          }, 3000);
          return;
        }

        const user = res.data;
        // console.log("user:", user);
        localStorage.setItem("userid", user[0]._id);
        //setIsLogged(user[0]._id);
        alert("Sign In Successful");
        navigate("/user");
      });
  };
  return (
    <>
      <div style={{ width: "60%", marginLeft: "50px", marginTop: "50px" }}>
        <h1 className={styled.title}>
          <span>Sign In</span>
        </h1>
        <div className={styled.heading}>
          <div className={styled.head}>
            <form onSubmit={handleSubmit} className={styled.form}>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label className={styled.label}>Email Address</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"email"}
                      name={"email"}
                      onChange={handlechange}
                    />
                    <div
                      style={
                        logError.error == "email" || logError.error == "error"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                            }
                          : undefined
                      }
                      className={styled.uniqueInput}
                    ></div>
                    <div
                      style={{
                        marginTop: "8px",
                        position: "absolute",
                        opacity:
                          logError.error == "error" || logError.error == "email"
                            ? "1"
                            : "0",
                      }}
                      className={styled.highlight}
                    >
                      {logError.message}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label
                    style={{ margin: "12px 0 3px" }}
                    className={styled.label}
                  >
                    Password
                  </label>
                  <div
                    style={{
                      display: "flex",
                      border: " 1px solid #adadad",
                      paddingRight: "5px",
                    }}
                  >
                    <input
                      className={styled.input}
                      type={pass}
                      name={"password"}
                      onChange={handlechange}
                      style={{ border: "none" }}
                    />
                    <div
                      style={
                        logError.error == "password" ||
                        logError.error == "error"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                            }
                          : undefined
                      }
                      className={styled.uniqueInput}
                    ></div>

                    <div
                      onClick={handleclick}
                      style={{
                        padding: "10px",
                        color: "rgb(0, 70, 190)",
                        fontWeight: "400",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {pass === "text" ? "show" : "hide"}
                    </div>
                  </div>
                  {/* <div
                    style={{
                      marginTop: "8px",
                      position: "absolute",
                      opacity: logError.error == "password" ? "1" : "0",
                    }}
                    className={styled.highlight}
                  >
                    {logError.message}
                  </div> */}
                  <div
                    style={{
                      marginTop: "8px",
                      position: "absolute",
                      opacity:
                        logError.error == "error" ||
                        logError.error == "password"
                          ? "1"
                          : "0",
                    }}
                    className={styled.highlight}
                  >
                    {logError.message}
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "400px",
                  gap: "27px",
                  marginTop: "25px",
                }}
              >
                <input
                  className={styled.signInBtn}
                  type="submit"
                  value="Sign In"
                  style={{
                    backgroundColor: " #0046be",
                    border: "none",
                    padding: "0.938rem 1.5rem",
                    width: "150px",
                    color: "white",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                />
                <div>
                  <p
                    style={{
                      color: " #0046be",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;

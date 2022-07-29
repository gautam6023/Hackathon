import React, { useContext, useState } from "react";
import axios, { AxiosResponse } from "axios";
import styled from "../Sign pages/LeftSection.module.css";
import { VscAccount } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { CartCount_Context } from "../../Context/cartCounter";

const LeftSection = () => {
  const dispatch = useDispatch();
  const [formData, Setformdata] = useState({});
  const navigate = useNavigate();
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
    var id = localStorage.getItem("userid") || "";
    e.preventDefault();
    console.log(formData);
    let timer;
    clearTimeout(timer);
    // axios.post("", formData).then((res) => {
    //   if (res.data.error) {
    //     setlogError(res.data);
    //     timer = setTimeout(() => {
    //       setlogError({
    //         error: "",
    //         message: "",
    //       });
    //     }, 3000);
    //     return;
    //   }
    //   const user = res.data;
    //   console.log("user:", user);
    //   localStorage.setItem("userid", user._id);
    //   //setIsLogged(user._id);
    //   navigate("/signin");
    // });
  };

  const handlenav = () => {
    navigate("/login");
  };

  return (
    <>
      <div style={{ width: "60%", marginLeft: "50px", marginTop: "50px" }}>
        <h1 className={styled.title}>
          <span>Create an Account</span>
        </h1>
        <div className={styled.heading}>
          <div className={styled.head}>
            <form onSubmit={handleSubmit} className={styled.form}>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label className={styled.label}>First Name</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"text"}
                      name={"firstName"}
                      onChange={handlechange}
                    />
                    <div
                      style={
                        logError.error == "firstName"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                              height: "53%",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>

                    <div
                      style={{
                        marginTop: "8px",
                        opacity: logError.error == "firstName" ? "1" : "0",
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
                  <label className={styled.label}>Last Name</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"text"}
                      name={"lastName"}
                      onChange={handlechange}
                    />
                    <div
                      style={
                        logError.error == "lastName"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                              height: "53%",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>
                    <div
                      style={{
                        marginTop: "8px",
                        opacity: logError.error == "lastName" ? "1" : "0",
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
                  <label className={styled.label}>Imageurl</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"url"}
                      name={"Imageurl"}
                      onChange={handlechange}
                    />
                    <div
                      style={
                        logError.error == "Imageurl"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                              height: "53%",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>

                    <div
                      style={{
                        marginTop: "8px",
                        opacity: logError.error == "Imageurl" ? "1" : "0",
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
                  <label className={styled.label}>Email Address</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"text"}
                      name={"email"}
                      onChange={handlechange}
                    />
                    <div
                      style={
                        logError.error == "email"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                              height: "53%",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>
                    <div
                      style={{
                        marginTop: "8px",
                        opacity: logError.error == "email" ? "1" : "0",
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
                  <label className={styled.label}>Password</label>
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
                        logError.error == "password"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                              height: "53%",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>

                    <div
                      onClick={handleclick}
                      style={{
                        color: " #0046be",
                        fontWeight: "400",
                        cursor: "pointer",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {pass === "text" ? "show" : "hide"}
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "8px",
                      opacity: logError.error == "password" ? "1" : "0",
                    }}
                    className={styled.highlight}
                  >
                    {logError.message}
                  </div>
                </div>
              </div>
              <div
                className="_3Hu8F"
                style={{
                  display: "flex",
                  marginTop: "15px",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="checkbox"
                  name="newsletter"
                  value=""
                  style={{
                    fontSize: " 10px",
                    lineHeight: "20px",
                    display: " block",
                    margin: "5px 12px 0",
                    paddingTop: "2px",
                  }}
                />
                <label>
                  Sign up for our newsletter to stay in the loop about hot
                  deals, new products, and more. Don’t worry, you can
                  unsubscribe at any time.
                </label>
              </div>
              <input
                type="submit"
                value="Create Account"
                style={{
                  outline: "none",
                  backgroundColor: "#ffce00 ",
                  border: "none",
                  padding: "15px 10px",
                  width: "150px",
                  color: "black",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              />
            </form>
            <div
              style={{
                marginTop: "15px",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              By continuing you agree to our{" "}
              <a href="" style={{ color: "#0046be", textDecoration: "none" }}>
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="" style={{ color: "#0046be", textDecoration: "none" }}>
                Privacy Policy.
              </a>
            </div>
            <hr></hr>
            <div style={{ display: "flex", marginRight: "10px" }}>
              <div style={{ marginRight: "10px", fontSize: "22px" }}>
                <VscAccount />
              </div>
              <div>Already have an account?</div>
            </div>
            <div
              onClick={handlenav}
              style={{ marginTop: "20px", cursor: "pointer" }}
            >
              <span
                style={{
                  marginTop: "10px",
                  fontSize: "16px",
                  color: "#0046be",
                  fontWeight: "600",
                }}
              >
                Sign in
              </span>
              <VscChevronRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSection;

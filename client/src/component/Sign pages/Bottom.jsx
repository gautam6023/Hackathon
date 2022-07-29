import React from "react";
//import styled from "./header.module.css";
import styled from "./Bottom.module.css";
const Bottom = () => {
  return (
    <>
      <div>
        <div className={styled.securitytab}>
          <div className={styled.securitytab1}>
            <svg
              className="lock-icon"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="40"
              height="40"
            >
              <path d="M22.79,27.12H9.21V15.47H22.79ZM11.35,9.9s0-.06,0-.09A4.8,4.8,0,0,1,16,4.88a4.8,4.8,0,0,1,4.64,4.93v3.9H11.36V10S11.35,9.93,11.35,9.9Zm12.32,3.81H22.39V9.46s0-.07,0-.11A6.53,6.53,0,0,0,16,3.12,6.55,6.55,0,0,0,9.61,9.81a.29.29,0,0,0,0,.09.29.29,0,0,0,0,.09v3.72H8.33a.88.88,0,0,0-.87.88V28a.88.88,0,0,0,.87.88H23.67a.88.88,0,0,0,.87-.88V14.59A.88.88,0,0,0,23.67,13.71Z"></path>
            </svg>
          </div>
          <div className={styled.securityprivacy}>
            <h3 className={styled.h3} style={{ marginBottom: "-10px" }}>
              <span>Security &amp; Privacy</span>
            </h3>
            <p className={styled.p}>
              <span>
                Every transaction   is secure here. Any personal
                information you give us will be handled according to our{" "}
                <a
                  href="https://www.bestbuy.ca/en-ca/help/blt372c78db41358a01/blt12691f41ac6895d7"
                  target="_blank"  
                >
                  <span>Privacy Policy</span>
                </a>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
//style={{fill-rule:"evenodd"}}

import styled from "./Rightsection.module.css";
import React from "react";

const RightSection = () => {
  return (
    <>
      <div style={{ width: "60%", marginTop: "150px" }}>
        <div style={{ marginBottom: "-20px" }}>
          Here are some of the benefits you’ll enjoy:
        </div>
        <ul className={styled.Ul}>
          <li className={styled.Li}>
            <div style={{ display: "flex" }}>
              <svg
                className={styled.img}
                style={{ marginTop: "20px" }}
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M6.6,14a1,1,0,0,1,0,2h0L2.4,16a1,1,0,0,1,0-2h0Zm-.17-1a1,1,0,0,1,0-2h7.14a1,1,0,0,1,0,2ZM27.3,26.22a1.72,1.72,0,0,0-1.74-2h-.17a2,2,0,1,0,1.91,1.95Zm-15.15,2a2,2,0,1,0-1.91-2A1.92,1.92,0,0,0,12.15,28.17ZM8.79,9h0A.92.92,0,0,1,7,9L5.84,3.83H3.4A.92.92,0,0,1,3.4,2H6.56a.91.91,0,0,1,.88.72Zm-.33,7a.92.92,0,1,1,1.84,0h0l.38,1.77.18,0H26.24l2.23-9.53H10.89a.92.92,0,0,1,0-1.84H29.6a.9.9,0,0,1,.71.35,1,1,0,0,1,.17.78L27.82,18.88a.91.91,0,0,1-.87.7H10.85a1.43,1.43,0,0,0,0,2.85H25.49a4,4,0,0,1,2.06.6,3.57,3.57,0,0,1,1.54,3.19,3.7,3.7,0,1,1-7.39,0,3.82,3.82,0,0,1,.54-2H15.29a3.82,3.82,0,0,1,.55,2,3.7,3.7,0,1,1-7.39,0,3.8,3.8,0,0,1,.85-2.38A3.27,3.27,0,0,1,9,18.39L8.46,16Z"></path>
              </svg>
              <div>
                <p className={styled.para}>Fast checkout.</p>
                <p>Your payment info is saved and ready.</p>
              </div>
            </div>
          </li>
          <li className={styled.Li}>
            <div style={{ display: "flex" }}>
              <svg
                className={styled.img}
                style={{ marginTop: "20px" }}
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M16.16,2h-.32a8.23,8.23,0,0,0-8.22,8.23C7.62,15,13.36,20.67,16,22.91c2.65-2.24,8.38-7.94,8.38-12.68A8.23,8.23,0,0,0,16.16,2ZM16,20.5c-2.85-2.67-6.58-7-6.58-10.27A6.44,6.44,0,0,1,15.84,3.8h.32a6.44,6.44,0,0,1,6.42,6.43C22.58,13.51,18.86,17.84,16,20.5Z"></path>
                <path d="M16,6.3a3.76,3.76,0,1,0,3.76,3.76A3.76,3.76,0,0,0,16,6.3ZM16,12a2,2,0,1,1,2-2A2,2,0,0,1,16,12Z"></path>
                <path d="M27.51,27.13h-2a.9.9,0,1,0,0,1.8h2a.9.9,0,1,0,0-1.8Z"></path>
                <path d="M22.51,27.13h-2a.9.9,0,1,0,0,1.8h2a.9.9,0,1,0,0-1.8Z"></path>
                <path d="M16,25.47a2.54,2.54,0,0,0-2.38,1.66H6a.9.9,0,0,0,0,1.8h7.59A2.55,2.55,0,1,0,16,25.47Z"></path>
              </svg>
              <div>
                <p className={styled.para}>Easy tracking.</p>
                <p>Keep an eye on your order.</p>
              </div>
            </div>
          </li>
          <li className={styled.Li}>
            <div style={{ display: "flex" }}>
              <svg
                className={styled.img}
                style={{ marginTop: "20px" }}
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M16,1.81A14,14,0,0,0,7,5V3.69a.87.87,0,0,0-.87-.87h0a.87.87,0,0,0-.87.87V7.08A.87.87,0,0,0,6.15,8H9.78a.87.87,0,1,0,0-1.73H8.33A12.3,12.3,0,0,1,16,3.55,12.43,12.43,0,1,1,5.07,10.06a.87.87,0,1,0-1.53-.83A14.18,14.18,0,1,0,16,1.81Z"></path>
                <path d="M16,8.5a.86.86,0,0,0-.86.87v8.32s0,0,0,.08a1.42,1.42,0,0,0,0,.2.69.69,0,0,0,0,.1.85.85,0,0,0,.14.21s0,0,0,0l.1.1,5.32,3.72a.82.82,0,0,0,.49.16.87.87,0,0,0,.71-.37.86.86,0,0,0-.21-1.2l-4.95-3.47V9.37A.87.87,0,0,0,16,8.5Z"></path>
              </svg>
              <div>
                <p className={styled.para}>Quick recap.</p>
                <p>Your order history is a click away.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RightSection;

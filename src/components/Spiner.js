import React from "react";
import "./Spiner.css";

const Spiner = () => {
  return (
    <>
      <div className="outer">
        <svg style={{ position: "absolute", width: "0", height: "0" }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
            ></feGaussianBlur>
            <feColorMatrix
              values="0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 0 0 
              0 0 0 60 -7"
            ></feColorMatrix>
          </filter>
        </svg>

        <div class="loader"></div>
      </div>
    </>
  );
};

export default Spiner;

// FullScreenLoader.js
import React from "react";

const FullScreenLoader = () => {
  return (
    <>
      <style>
        {`
          .loader-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  .loader {
    position: relative;
    width: 50px;
    height: 50px;
    background: rgb(247, 87, 87);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(255, 255, 255, 0.2);
    animation: pulse 1.5s ease-out infinite;

    &:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      border: 5px solid transparent;
      border-top-color: #fff;
      transform: translate(-50%, -50%);
      animation: loading 1s ease-out infinite;
    }
  }
}

@keyframes loading {
  0% {
    border: 0 solid #fff;
    transition: all 0.3s ease;
  }
  20% {
    border: 8px solid #fff;
    width: 0;
    height: 0;
    transition: all 0.3s ease;
  }
  100% {
    border: 8px solid #fff;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(255, 255, 255, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.15),
      inset 0 0 15px rgba(255, 255, 255, 0.4);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1),
      inset 0 0 10px rgba(255, 255, 255, 0.2);
  }
}
 `}
      </style>
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default FullScreenLoader;

// FullScreenLoader.js
import React from "react";

const FullScreenLoader = () => {
  return (
    <>
      <style>
        {`
          .full-screen-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.loader {
  border: 8px solid rgb(247, 87, 87);
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

        `}
      </style>
      <div className="full-screen-loader">
        <div className="loader"></div>
      </div>
    </>
  );
};

export default FullScreenLoader;

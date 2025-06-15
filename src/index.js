import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HelmetWrapper from "./Components/seo/HelmetWrapper";
import "./assets/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const branch = window.location.hostname.includes("develop") ? "/develop" : "/";

root.render(
  <BrowserRouter
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    // basename={branch}
  >
    <HelmetWrapper />
    <App />
    {/* </HelmetWrapper> */}
  </BrowserRouter>
);

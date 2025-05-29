import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HelmetWrapper from "./Components/seo/HelmetWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HelmetWrapper />
    <App />
    {/* </HelmetWrapper> */}
  </BrowserRouter>
);

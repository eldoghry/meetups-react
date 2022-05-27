import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// tell where App el should run in the real dom
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

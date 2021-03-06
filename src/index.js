import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Context } from "./Context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

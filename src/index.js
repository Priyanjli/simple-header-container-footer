import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import "./index.css";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

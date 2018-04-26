import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "../node_modules/jquery/dist/jquery";
import Popper from "popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./app.global.css";
import "./Shared/Search";
import "./Shared/Results";

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextRoot = require("./App").App;
    render(<NextRoot />, document.getElementById("root"));
  });
}

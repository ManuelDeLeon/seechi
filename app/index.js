import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Popper from "popper.js/dist/popper-utils.js";

render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextRoot = require("./App").App;
    render(<NextRoot />, document.getElementById("root"));
  });
}

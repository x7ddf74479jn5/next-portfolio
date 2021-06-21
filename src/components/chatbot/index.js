import "./assets/styles/index.css";
import "./assets/styles/style.css";

import React from "react";
import ReactDOM from "react-dom";

import Chatbot from "./Chatbot";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Chatbot />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

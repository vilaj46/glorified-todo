import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";

// Simple styling we will be going for:
// https://www.w3schools.com/howto/howto_js_todolist.asp

// Add the correct 'x' and 'check' icon.
// Transition from completed to uncomplete.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

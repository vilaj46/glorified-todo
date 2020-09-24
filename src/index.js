import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";

// Simple styling we will be going for:
// https://www.w3schools.com/howto/howto_js_todolist.asp

// Testing

// Login / Authentication.
// If we have an invalid username and we type in another bad username, we have to show we are looking for it. Not just keep the same message?
// Signup Page
// Profile Page / Icon should be added in.
// List of items TodoItems for edit.
// Ability to change password.
// Verify account.

// On the deploy file, redirect to the '/' instead of having http://vilaj46.github.io/glorified-todo?

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route to="/" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

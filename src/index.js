import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App/App";

// Simple styling we will be going for:
// https://www.w3schools.com/howto/howto_js_todolist.asp

// Testing
// Spacing on larger screens.

// Clean up current code base then add more features.

// Hook todos up to the database.
// Clean up todos.

// Captcha
// Other types of authentication
// Passports
// Honeypot
// Complex password
// Expiration
// Loading spinner for login and stuff.

// Profile Page
// List of items TodoItems for edit.
// Ability to change email/password.
// Verify account.
// Delete account.

// On the deploy file, redirect to the '/' instead of having http://vilaj46.github.io/glorified-todo?

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route to="/" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

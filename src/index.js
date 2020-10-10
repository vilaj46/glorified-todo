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

// If we click login and our forms are blank, display errors.
// If we get a username or password error remove the captchaValue.
// Do the same on the signup page. If are email or username arein use remove captcha.

// Hook todos up to the database.
// Clean up todos.

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

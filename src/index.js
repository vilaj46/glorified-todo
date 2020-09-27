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

// Combine the Biography string inputs into one file.
// Email dropdown input.
// Add hover over the input images.
// Get a new proper image.
// Check the spacing on the input images. ( the padding seems off )
// Figure out why logging out does not keep bio values.
// Save button / cancel button. Which means these will not be onChange automatically submit the data.
// Make everything under one form.
// Rename authentication hook and functions.

// Change the email into an account. We should have an account name and email associated to it.

// 404 Page
// Login / Authentication.
// Profile Page
// List of items TodoItems for edit.
// Ability to change email/password.
// Verify account.
// Delete account.
// Model off github.
// Add a bio.
// Company.
// Location.
// Email.
// Website.
// Twitter username.

// On the deploy file, redirect to the '/' instead of having http://vilaj46.github.io/glorified-todo?

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route to="/" exact component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

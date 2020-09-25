import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./LoginPage.module.css";

import api from "../../api.js";

// Helper Components
import LoginButton from "./helpers/LoginButton";
import UsernameText from "./helpers/UsernameText";
import PasswordText from "./helpers/PasswordText";
import UsernameErrorSVG from "./helpers/UsernameErrorSVG";
import PasswordErrorSVG from "./helpers/PasswordErrorSVG";
import PasswordVisibilityButton from "./helpers/PasswordVisibilityButton";

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [displayPassword, setDisplayPassword] = useState(false);

  const [usernameMessage, setUsernameMessage] = useState(0);
  const [passwordMessage, setPasswordMessage] = useState(0);

  const history = useHistory();
  const onSubmit = (e) => {
    e.preventDefault();
    const response = api.post(username, password);

    if (username.trim().length === 0) {
      // Username value is empty.
      setUsernameError(true);
      setPasswordError(false);
      setUsernameMessage(1);
      emphasizeUserErrorMessage(500);
    } else if (password.trim().length === 0) {
      // Password value is empty.
      setPasswordError(true);
      setUsernameError(false);
      setPasswordMessage(1);
      emphasizePassErrorMessage(500);
    } else if (response === 404) {
      // Username not found.
      setUsernameError(true);
      setPasswordError(false);
      setUsernameMessage(2);
      emphasizeUserErrorMessage(500);
    } else if (response === 406) {
      // Incorrect password.
      setPasswordError(true);
      setUsernameError(false);
      setPasswordMessage(2);
      emphasizePassErrorMessage(500);
    } else {
      // Successful login.
      setToken({ username, response });
      setUsernameError(false);
      setPasswordError(false);
      history.push("/profile");
    }
  };

  const togglePWVisibility = (bool) => {
    setDisplayPassword(bool);
  };

  let lastClicked;
  const emphasizeUserErrorMessage = (time) => {
    if (Date.now() - time < lastClicked) return;
    lastClicked = Date.now();
    const prevMessage = usernameMessage;
    if (usernameMessage > 0 && prevMessage === usernameMessage) {
      const element = document.getElementById("usernameId");
      const passwordId = document.getElementById("passwordId");
      passwordId.classList.remove("bold");
      element.classList.add(styles.bold);
      setTimeout(() => {
        element.classList.remove(styles.bold);
      }, time);
    }
  };

  const emphasizePassErrorMessage = (time) => {
    if (Date.now() - time < lastClicked) return;
    lastClicked = Date.now();
    const prevMessage = passwordMessage;
    const usernameId = document.getElementById("usernameId");
    if (passwordMessage > 0 && prevMessage === passwordMessage) {
      const element = document.getElementById("passwordId");
      usernameId.classList.remove("bold");
      element.classList.add(styles.bold);
      setTimeout(() => {
        element.classList.remove(styles.bold);
      }, time);
    }
  };

  return (
    <Jumbotron>
      <Form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail" className={styles.relative}>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
            className={usernameError ? styles.error : ""}
          />
          <UsernameErrorSVG usernameError={usernameError} />
          <UsernameText
            usernameError={usernameError}
            usernameMessage={usernameMessage}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className={styles.relative}>
          <Form.Control
            type={displayPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? styles.error : ""}
            autoComplete="on"
          />
          <PasswordVisibilityButton
            displayPassword={displayPassword}
            passwordError={passwordError}
            togglePWVisibility={togglePWVisibility}
          />
          <PasswordErrorSVG passwordError={passwordError} />
          <PasswordText
            passwordError={passwordError}
            passwordMessage={passwordMessage}
          />
        </Form.Group>
        <LoginButton />
      </Form>
    </Jumbotron>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;

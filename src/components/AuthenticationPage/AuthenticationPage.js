import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./AuthenticationPage.module.css";

// Helper Functions
import login from "./funcs/login.js";
import signup from "./funcs/signup.js";

// Helper Components
import LoginButton from "./helpers/LoginButton";
import UsernameText from "./helpers/UsernameText";
import PasswordText from "./helpers/PasswordText";
import UsernameErrorSVG from "./helpers/UsernameErrorSVG";
import PasswordErrorSVG from "./helpers/PasswordErrorSVG";
import PasswordVisibilityButton from "./helpers/PasswordVisibilityButton";

const AuthenticationPage = ({ setToken, page }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [displayPassword, setDisplayPassword] = useState(false);

  const [usernameMessage, setUsernameMessage] = useState(0);
  const [passwordMessage, setPasswordMessage] = useState(0);

  const [lastClicked, setLastClicked] = useState(undefined);
  const [prevPage, setPrevPage] = useState(page);

  const history = useHistory();

  // Resets Form if we switch between the login / signup page.
  if (prevPage !== page) {
    setPrevPage(page);
    setUsername("");
    setPassword("");
    setUsernameError(false);
    setPasswordError(false);
    setDisplayPassword(false);
    setUsernameMessage(0);
    setPasswordMessage(0);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const credentials = { username, password };
    const state = { usernameMessage, passwordMessage, lastClicked, history };
    const actions = {
      setUsernameError,
      setPasswordError,
      setToken,
      setUsernameMessage,
      setPasswordMessage,
      lastClicked,
      setLastClicked,
    };

    if (page === "login") {
      login(credentials, actions, state);
    } else {
      signup(credentials, actions, state);
    }
  };

  const togglePWVisibility = (bool) => {
    setDisplayPassword(bool);
  };

  return (
    <Jumbotron>
      <Form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasicEmail" className={styles.relative}>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
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
            value={password}
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
        <LoginButton page={page} />
      </Form>
    </Jumbotron>
  );
};

AuthenticationPage.propTypes = {
  setToken: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};

export default AuthenticationPage;

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
import EmailText from "./helpers/EmailText";
import PasswordText from "./helpers/PasswordText";
import ErrorSVG from "./helpers/ErrorSVG";
import PasswordVisibilityButton from "./helpers/PasswordVisibilityButton";
import TokenOrCookie from "./helpers/TokenOrCookie";

const AuthenticationPage = ({ setToken, page, settings, setSettingsKey }) => {
  // Current state of the inputs.
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Whether or not we have an error. Does not specify the error.
  // Also determines the border / color of the input.
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Whether or not we will be displaying the password in text.
  // Also determines the password visiblity icon.
  const [displayPassword, setDisplayPassword] = useState(false);

  // Current state of the error message.
  // We keep an array of messages in another component.
  const [usernameMessage, setUsernameMessage] = useState(0);
  const [emailMessage, setEmailMessage] = useState(0);
  const [passwordMessage, setPasswordMessage] = useState(0);

  // The last time we have clicked the login / signup button.
  const [lastClicked, setLastClicked] = useState(undefined);

  // Either login or signup. Determines the action we take.
  const [prevPage, setPrevPage] = useState(page);

  // React-router-dom hook. Use the location to determine
  // aesthetics and we use the push function if we are successful.
  const history = useHistory();

  // Resets Form if we switch between the login / signup page.
  if (prevPage !== page) {
    setPrevPage(page);
    setUsername("");
    setEmail("");
    setPassword("");
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);
    setDisplayPassword(false);
    setUsernameMessage(0);
    setEmailMessage(0);
    setPasswordMessage(0);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Our current input states.
    const credentials = { username, email, password };

    // Also our current state not related to credentials.
    const state = {
      usernameMessage,
      passwordMessage,
      emailMessage,
      lastClicked,
      history,
    };

    // Our hook setters.
    const actions = {
      setUsernameError,
      setEmailError,
      setPasswordError,
      setUsernameMessage,
      setEmailMessage,
      setPasswordMessage,
      setLastClicked,
      setToken,
    };

    if (page === "login") {
      login(credentials, actions, state);
    } else {
      signup(credentials, actions, state);
    }
  };

  return (
    <Jumbotron>
      <Form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <Form.Group controlId="formBasic" className={styles.relative}>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={usernameError ? styles.error : ""}
          />
          <ErrorSVG error={usernameError} />
          <UsernameText
            usernameError={usernameError}
            usernameMessage={usernameMessage}
          />
        </Form.Group>
        {history.location.pathname === "/signup" && (
          <Form.Group controlId="formBasicEmail" className={styles.relative}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? styles.error : ""}
            />
            <ErrorSVG error={emailError} />
            <EmailText emailError={emailError} emailMessage={emailMessage} />
          </Form.Group>
        )}
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
            setDisplayPassword={setDisplayPassword}
          />
          <ErrorSVG error={passwordError} />
          <PasswordText
            passwordError={passwordError}
            passwordMessage={passwordMessage}
          />
        </Form.Group>
        <LoginButton page={page} />
        <TokenOrCookie settings={settings} setSettingsKey={setSettingsKey} />
      </Form>
    </Jumbotron>
  );
};

AuthenticationPage.propTypes = {
  setToken: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    method: PropTypes.string.isRequired,
  }).isRequired,
  setSettingsKey: PropTypes.func.isRequired,
};

export default AuthenticationPage;

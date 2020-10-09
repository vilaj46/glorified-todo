import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./AuthenticationPage.module.css";

// Helper Functions
import login from "./funcs/login.js";
import signup from "./funcs/signup.js";
import emphasize from "./funcs/emphasize.js";

// Helper Components
import LoginButton from "./helpers/LoginButton";
import UsernameText from "./helpers/UsernameText";
import EmailText from "./helpers/EmailText";
import PasswordText from "./helpers/PasswordText";
import ErrorSVG from "./helpers/ErrorSVG";
import PasswordVisibilityButton from "./helpers/PasswordVisibilityButton";
import Settings from "./helpers/Settings";

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
  const [overHeadMessage, setOverHeadMessage] = useState("");
  const [counter, setCounter] = useState(0);

  const [captchaValue, setCaptchaValue] = useState(undefined);

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
    setOverHeadMessage("");
    setCounter(0);
    setCaptchaValue(undefined);
  }

  // Prevents multiple rerenders.
  const history = useHistory();
  if (history.location.state && counter === 0) {
    setOverHeadMessage(history.location.state.message);
    setCounter(1);
  }

  // When page is initially loaded, remove the overhead message.
  // useHistory state was persistent.
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded === false && history.location.pathname === "/login") {
      setLoaded(true);
      setOverHeadMessage("");
    }
  }, [loaded, setLoaded, history]);

  const recaptchaRef = React.createRef();

  function captchaChange(value) {
    setCaptchaValue(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // Our current input states.
    const credentials = { username, email, password };
    let recaptchaValue;

    if (settings.captcha) {
      recaptchaValue = recaptchaRef.current.getValue();
    }

    const toEmphCaptcha = shouldWeDisplayCaptcha(
      history,
      credentials,
      settings
    );

    if (
      (recaptchaValue === undefined || recaptchaValue === "") &&
      toEmphCaptcha
    ) {
      emphasize.captchaError(500, setLastClicked, lastClicked);
    }

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

    if (captchaValue === undefined && settings.captcha) return;

    if (page === "login") {
      // display recaptcha
      login(credentials, actions, state);
    } else {
      // display recaptcha
      signup(credentials, actions, state);
    }
  };

  return (
    <Jumbotron>
      {overHeadMessage && (
        <p className={`${styles.boldError} ${styles.overHead}`}>
          {overHeadMessage}
        </p>
      )}
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

        {settings.captcha && (
          <div className={styles.captchaContainer}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={captchaChange}
            />
          </div>
        )}
        <LoginButton page={page} />
        <Settings settings={settings} setSettingsKey={setSettingsKey} />
      </Form>
    </Jumbotron>
  );
};

function shouldWeDisplayCaptcha(history, credentials, settings) {
  const { pathname } = history.location;
  const { username, email, password } = credentials;
  const { captcha } = settings;

  if (
    pathname === "/login" &&
    username.length > 0 &&
    password.length > 0 &&
    captcha
  ) {
    return true;
  } else if (
    pathname === "/signup" &&
    username.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    captcha
  ) {
    return true;
  } else {
    return false;
  }
}

AuthenticationPage.propTypes = {
  setToken: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    captcha: PropTypes.bool.isRequired,
  }).isRequired,
  setSettingsKey: PropTypes.func.isRequired,
};

export default AuthenticationPage;

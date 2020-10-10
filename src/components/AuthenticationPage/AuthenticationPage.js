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
  // const [ref, setRef] = useState(null);

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

  const recaptchaRef = React.createRef();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // When page is initially loaded, remove the overhead message.
    // useHistory state was persistent.
    if (loaded === false && history.location.pathname === "/login") {
      setOverHeadMessage("");
    }

    console.log(captchaValue);
    if ((usernameError || emailError || passwordError) && captchaValue) {
      recaptchaRef.current.reset();
    }

    setLoaded(true);
  }, [
    loaded,
    setLoaded,
    history,
    recaptchaRef,
    captchaValue,
    usernameError,
    emailError,
    passwordError,
  ]);

  function captchaChange(value) {
    setCaptchaValue(value);
  }

  // console.log(ref);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Our current input states.
    const credentials = { username, email, password };
    let recaptchaValue;
    if (settings.captcha) {
      // console.log(ref.current);
      recaptchaValue = recaptchaRef.current.getValue();
    }

    const toEmphCaptcha = shouldWeDisplayCaptcha(
      history,
      credentials,
      settings
    );

    // Cancels the login / signup if we don't click the captcha.
    if (
      (recaptchaValue === undefined || recaptchaValue === "") &&
      toEmphCaptcha
    ) {
      if (usernameError === true) {
        emphasize.userErrorMessage(500, setLastClicked, lastClicked);
      } else if (passwordError === true) {
        emphasize.passErrorMessage(500, setLastClicked, lastClicked);
      } else if (emailError === true) {
        emphasize.emailErrorMessage(500, setLastClicked, lastClicked);
      } else {
        emphasize.captchaError(500, setLastClicked, lastClicked);
      }
      return;
    }

    // Also our current state not related to credentials.
    const state = {
      usernameMessage,
      passwordMessage,
      emailMessage,
      lastClicked,
      history,
      captchaValue,
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
      const didWeLogin = login(credentials, actions, state);
      if (didWeLogin === false) {
        setCaptchaValue(undefined);
      }
    } else {
      const didWeSignup = await signup(credentials, actions, state);
      if (didWeSignup === false) {
        captchaChange(undefined);
      }
    }
  };

  const onUsernameChange = (value) => {
    setUsername(value);
    if (usernameMessage > 0) {
      setUsernameMessage(0);
      setUsernameError(false);
    }
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    if (passwordMessage > 0) {
      setPasswordMessage(0);
      setPasswordError(false);
    }
  };

  const onEmailChange = (value) => {
    setEmail(value);
    if (emailMessage > 0) {
      setEmailMessage(0);
      setEmailError(false);
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
            onChange={(e) => onUsernameChange(e.target.value)}
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
              onChange={(e) => onEmailChange(e.target.value)}
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
            onChange={(e) => onPasswordChange(e.target.value)}
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

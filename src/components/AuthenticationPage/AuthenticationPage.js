import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import ReCAPTCHA from "react-google-recaptcha";
import GoogleLogin from "react-google-login";

import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./AuthenticationPage.module.css";

// Helper Functions
import resetHooks from "./funcs/resetHooks.js";
import onChanges from "./funcs/onChanges.js";
import onSubmit from "./funcs/onSubmit.js";
import googleLogin from "./funcs/googleLogin.js";

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

  // Prevents multiple rerenders.
  const history = useHistory();
  if (history.location.state && counter === 0) {
    setOverHeadMessage(history.location.state.message);
    setCounter(1);
  }

  const setters = {
    setPrevPage,
    setUsername,
    setEmail,
    setPassword,
    setUsernameError,
    setEmailError,
    setPasswordError,
    setDisplayPassword,
    setUsernameMessage,
    setEmailMessage,
    setPasswordMessage,
    setOverHeadMessage,
    setCounter,
    setCaptchaValue,
    setToken,
    setLastClicked,
  };

  const state = {
    username,
    password,
    email,
    usernameError,
    passwordError,
    emailError,
    displayPassword,
    usernameMessage,
    emailMessage,
    passwordMessage,
    lastClicked,
    prevPage,
    overHeadMessage,
    counter,
    captchaValue,
    settings,
    history,
    page,
  };

  // Resets Form if we switch between the login / signup page.
  if (prevPage !== page) {
    resetHooks(setters, page);
  }

  const recaptchaRef = React.createRef();

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // When page is initially loaded, remove the overhead message.
    // useHistory state was persistent.
    if (loaded === false && history.location.pathname === "/login") {
      setOverHeadMessage("");
    }

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

  return (
    <Jumbotron>
      {overHeadMessage && (
        <p className={`${styles.boldError} ${styles.overHead}`}>
          {overHeadMessage}
        </p>
      )}
      <Form
        className={styles.form}
        onSubmit={(e) => onSubmit(e, state, setters)}
      >
        <Form.Group controlId="formBasic" className={styles.relative}>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) =>
              onChanges.onUsernameChange(e.target.value, state, setters)
            }
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
              onChange={(e) =>
                onChanges.onEmailChange(e.target.value, state, setters)
              }
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
            onChange={(e) =>
              onChanges.onPasswordChange(e.target.value, state, setters)
            }
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
      <GoogleLogin
        clientId="42780040355-28n6dcs4imkceufraqee2jmsboktg9n2.apps.googleusercontent.com"
        buttonText="Google Login"
        onSuccess={googleLogin}
        onFailure={googleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </Jumbotron>
  );
};

AuthenticationPage.propTypes = {
  setToken: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    captcha: PropTypes.bool.isRequired,
  }).isRequired,
  setSettingsKey: PropTypes.func.isRequired,
};

export default AuthenticationPage;

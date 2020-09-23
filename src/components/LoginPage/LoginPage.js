import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import styles from "./LoginPage.module.css";

import api from "../../api.js";

import authProblem from "../../svgs/auth_problem.svg";
import showPassword from "../../svgs/show_password.svg";
import hidePassword from "../../svgs/hide_password.svg";

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [displayPassword, setDisplayPassword] = useState(false);

  const history = useHistory();
  const onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    const response = api.post(username, password);
    if (response === 404) {
      setUsernameError(true);
      setPasswordError(false);
    } else if (response === 406) {
      setPasswordError(true);
      setUsernameError(false);
    } else {
      setToken({ username, response });
      history.push("/profile");
      setUsernameError(false);
      setPasswordError(false);
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
            onChange={(e) => setUsername(e.target.value)}
            className={usernameError ? styles.error : ""}
          />
          {usernameError && (
            <img
              src={authProblem}
              alt="Authentication Problem"
              className={styles.authProblem}
            />
          )}
          <Form.Text className="text-muted">
            {usernameError ? (
              <p className={styles.textError}>
                The email you've entered doesn't match any account.{" "}
                <span className={styles.boldError}>
                  Sign up for an account.
                </span>
              </p>
            ) : (
              <p>We'll never share your email with anyone else.</p>
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className={styles.relative}>
          <Form.Control
            type={displayPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {displayPassword ? (
            <button
              type="button"
              className={passwordError ? styles.showPW1 : styles.showPW2}
              onClick={() => togglePWVisibility(false)}
            >
              <img src={hidePassword} alt="Password Vision" />
            </button>
          ) : (
            <button
              type="button"
              className={passwordError ? styles.showPW1 : styles.showPW2}
              onClick={() => togglePWVisibility(true)}
            >
              <img src={showPassword} alt="Password Vision" />
            </button>
          )}
          {passwordError && (
            <img
              src={authProblem}
              alt="Authentication Problem"
              className={styles.authProblem}
            />
          )}
          <Form.Text className="text-muted">
            {passwordError ? (
              <p className={styles.textError}>
                The password you've entered is incorrect.{" "}
                <span className={styles.boldError}>Forgot Password?</span>
              </p>
            ) : (
              <p>Never share your password with anyone else.</p>
            )}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.loginButton}>
          Log In
        </Button>
      </Form>
    </Jumbotron>
  );
};

// const UnderPasswordMessage = ({ passwordError }) => {
//   return (

//   );
// };

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;

import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import styles from "./LoginPage.module.css";

import api from "../../api.js";

import authProblem from "../../svgs/auth_problem.svg";

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
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
      setUsernameError(false);
      setPasswordError(false);
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
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
              <p>Never share your password with anyone.</p>
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

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginPage;

import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../LoginPage.module.css";

const PasswordText = ({ passwordError, passwordMessage }) => {
  const messages = [
    <p id="passwordId">Never share your password with anyone else.</p>,
    <p className={styles.textError} id="passwordId">
      Password cannot be blank.
    </p>,
    <p className={styles.textError} id="passwordId">
      The password you've entered is incorrect.{" "}
      <span className={styles.boldError}>Forgot Password?</span>
    </p>,
  ];

  return (
    <Form.Text className="text-muted">
      {passwordError ? messages[passwordMessage] : messages[0]}
    </Form.Text>
  );
};

PasswordText.propTypes = {
  passwordError: PropTypes.bool.isRequired,
  passwordMessage: PropTypes.number.isRequired,
};

export default PasswordText;

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../AuthenticationPage.module.css";

const EmailText = ({ emailError, emailMessage }) => {
  const messages = [
    <p id="emailId">We'll never share your email with anyone else.</p>,
    <p className={styles.textError} id="emailId">
      Email cannot be blank.
    </p>,
    <p className={styles.textError} id="emailId">
      The email you've entered doesn't match any account.&nbsp;
      <Link to="signup" className={styles.boldError}>
        <span>Sign up for an account.</span>
      </Link>
    </p>,
    <p className={styles.textError} id="emailId">
      That email is already taken.
    </p>,
  ];

  return (
    <Form.Text className="text-muted">
      {emailError ? messages[emailMessage] : messages[0]}
    </Form.Text>
  );
};

EmailText.propTypes = {
  emailError: PropTypes.bool.isRequired,
  emailMessage: PropTypes.number.isRequired,
};

export default EmailText;

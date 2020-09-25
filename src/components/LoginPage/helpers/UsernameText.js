import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../LoginPage.module.css";

const UsernameText = ({ usernameError, usernameMessage }) => {
  const messages = [
    <p id="usernameId">We'll never share your email with anyone else.</p>,
    <p className={styles.textError} id="usernameId">
      Email cannot be blank.
    </p>,
    <p className={styles.textError} id="usernameId">
      The email you've entered doesn't match any account.{" "}
      <span className={styles.boldError}>Sign up for an account.</span>
    </p>,
  ];

  return (
    <Form.Text className="text-muted">
      {usernameError ? messages[usernameMessage] : messages[0]}
    </Form.Text>
  );
};

UsernameText.propTypes = {
  usernameError: PropTypes.bool.isRequired,
  usernameMessage: PropTypes.number.isRequired,
};

export default UsernameText;

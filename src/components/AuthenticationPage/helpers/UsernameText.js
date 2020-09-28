import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import styles from "../AuthenticationPage.module.css";

const UsernameText = ({ usernameError, usernameMessage }) => {
  const messages = [
    <p id="usernameId" className={styles.blankUsernameMessage}>
      We'll never share your email with anyone else.
    </p>,
    <p className={styles.textError} id="usernameId">
      Username cannot be blank.
    </p>,
    <p className={styles.textError} id="usernameId">
      The email you've entered doesn't match any account.&nbsp;
      <Link to="signup" className={styles.boldError}>
        <span>Sign up for an account.</span>
      </Link>
    </p>,
    <p className={styles.textError} id="usernameId">
      That username is already taken.
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

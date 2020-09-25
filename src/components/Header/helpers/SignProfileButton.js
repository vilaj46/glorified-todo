import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../../App/App.module.css";

const SignProfileButton = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <Link to="/profile">
        <Button className={`${styles.button} ${styles.link}`}>Profile</Button>
      </Link>
    );
  } else {
    return (
      <Link className={styles.link} to="/signup">
        <Button className={styles.button}>Signup</Button>
      </Link>
    );
  }
};

SignProfileButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default SignProfileButton;

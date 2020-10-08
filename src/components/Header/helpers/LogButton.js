import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../Header.module.css";

const LogButton = ({ isAuthenticated, setToken }) => {
  if (isAuthenticated) {
    return (
      <Button className={styles.button} onClick={() => setToken()}>
        Log Out
      </Button>
    );
  } else {
    return (
      <Link className={styles.link} to="/login">
        <Button className={styles.button}>Log In</Button>
      </Link>
    );
  }
};

LogButton.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default LogButton;

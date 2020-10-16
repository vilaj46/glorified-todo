import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import styles from "../Header.module.css";

const LogButton = ({ authData, setInitialTodos }) => {
  const logout = () => {
    authData.setToken();
    setInitialTodos([]);
  };

  if (authData.isAuthenticated) {
    return (
      <Button className={styles.button} onClick={logout}>
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
  authData: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    setToken: PropTypes.func.isRequired,
  }).isRequired,
  setInitialTodos: PropTypes.func.isRequired,
};

export default LogButton;

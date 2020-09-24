import React from "react";
import Button from "react-bootstrap/Button";

import styles from "../LoginPage.module.css";

const LoginButton = () => {
  return (
    <Button variant="primary" type="submit" className={styles.loginButton}>
      Log In
    </Button>
  );
};

export default LoginButton;
